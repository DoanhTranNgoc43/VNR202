"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import LightningGame from "./lightning-game"

interface TournamentProps {
  onBack: () => void
}

type Stage = "quarter" | "semi" | "final" | "done"

export default function TournamentLightning({ onBack }: TournamentProps) {
  const initialPairs = useMemo(() => [[1, 2], [3, 4], [5, 6], [7, 8]] as [number, number][], [])
  const [stage, setStage] = useState<Stage>("quarter")
  const [matchIndex, setMatchIndex] = useState(0)
  const [qfWinners, setQfWinners] = useState<number[]>([])
  const [sfPairs, setSfPairs] = useState<[number, number][]>([])
  const [sfWinners, setSfWinners] = useState<number[]>([])
  const [finalPair, setFinalPair] = useState<[number, number] | null>(null)
  const [champion, setChampion] = useState<number | null>(null)
  const [showSemiConclusion, setShowSemiConclusion] = useState(false)
  const [showFinalConclusion, setShowFinalConclusion] = useState(false)

  // Lưu state vào sessionStorage khi có thay đổi
  useEffect(() => {
    const gameState = {
      stage,
      matchIndex,
      qfWinners,
      sfPairs,
      sfWinners,
      finalPair,
      champion,
      showSemiConclusion,
      showFinalConclusion
    }
    sessionStorage.setItem('tournament-lightning-state', JSON.stringify(gameState))
  }, [stage, matchIndex, qfWinners, sfPairs, sfWinners, finalPair, champion, showSemiConclusion, showFinalConclusion])

  // Khôi phục state từ sessionStorage khi component mount (chỉ nếu có state đã lưu)
  useEffect(() => {
    const savedState = sessionStorage.getItem('tournament-lightning-state')
    if (savedState) {
      try {
        const state = JSON.parse(savedState)
        // Khôi phục nếu có dữ liệu hợp lệ
        if (state.showSemiConclusion && state.sfWinners && state.sfWinners.length > 0) {
          setStage(state.stage || "semi")
          setMatchIndex(state.matchIndex || 0)
          setQfWinners(state.qfWinners || [])
          setSfPairs(state.sfPairs || [])
          setSfWinners(state.sfWinners || [])
          setFinalPair(state.finalPair || null)
          setChampion(state.champion || null)
          setShowSemiConclusion(true)
          setShowFinalConclusion(state.showFinalConclusion || false)
        } else if (state.showFinalConclusion && state.champion) {
          // Khôi phục nếu đang ở trạng thái kết luận tổng thể
          setStage(state.stage || "done")
          setMatchIndex(state.matchIndex || 0)
          setQfWinners(state.qfWinners || [])
          setSfPairs(state.sfPairs || [])
          setSfWinners(state.sfWinners || [])
          setFinalPair(state.finalPair || null)
          setChampion(state.champion || null)
          setShowSemiConclusion(false)
          setShowFinalConclusion(true)
        }
      } catch (e) {
        console.error('Error restoring game state:', e)
      }
    }
  }, [])

  const currentPair: [number, number] | null = (() => {
    if (stage === "quarter") return initialPairs[matchIndex] || null
    if (stage === "semi") return sfPairs[matchIndex] || null
    if (stage === "final") return finalPair
    return null
  })()

  const handleMatchEnd = (winner: number) => {
    if (stage === "quarter") {
      const next = [...qfWinners, winner]
      setQfWinners(next)
      if (matchIndex < initialPairs.length - 1) {
        setMatchIndex(matchIndex + 1)
      } else {
        const semis: [number, number][] = [
          [next[0], next[1]],
          [next[2], next[3]],
        ]
        setSfPairs(semis)
        setStage("semi")
        setMatchIndex(0)
      }
    } else if (stage === "semi") {
      const next = [...sfWinners, winner]
      setSfWinners(next)
      if (matchIndex < sfPairs.length - 1) {
        setMatchIndex(matchIndex + 1)
      } else {
        // Vòng bán kết kết thúc, hiển thị kết luận
        setShowSemiConclusion(true)
      }
    } else if (stage === "final") {
      setChampion(winner)
      setStage("done")
      // Hiển thị kết luận tổng thể sau khi vòng chung kết kết thúc
      setShowFinalConclusion(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button variant="outline" onClick={onBack} className="bg-transparent">← Quay Lại</Button>
      </div>

      <Card className="p-4 text-center bg-slate-100 dark:bg-slate-800">
        <h3 className="text-xl font-bold">Giải đấu 8 đội</h3>
        <div className="text-sm opacity-80">Vòng loại → Bán kết → Chung kết</div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="font-semibold mb-2">Vòng loại</div>
          {initialPairs.map((p, i) => (
            <div key={i} className={`text-sm ${i === matchIndex && stage === "quarter" ? "font-bold" : ""}`}>Trận {i + 1}: Đội {p[0]} vs Đội {p[1]}</div>
          ))}
        </Card>
        <Card className="p-4">
          <div className="font-semibold mb-2">Bán kết</div>
          {sfPairs.length > 0 ? (
            sfPairs.map((p, i) => (
              <div key={i} className={`text-sm ${i === matchIndex && stage === "semi" ? "font-bold" : ""}`}>Trận {i + 1}: Đội {p[0]} vs Đội {p[1]}</div>
            ))
          ) : (
            <>
              <div className="text-sm opacity-60 mb-1">Chờ đủ 4 đội thắng vòng loại</div>
              {qfWinners.map((id, idx) => (
                <div key={idx} className="text-sm">Đã vào bán kết: Đội {id}</div>
              ))}
            </>
          )}
        </Card>
        <Card className="p-4">
          <div className="font-semibold mb-2">Chung kết</div>
          {finalPair ? <div className="text-sm">Đội {finalPair[0]} vs Đội {finalPair[1]}</div> : <div className="text-sm opacity-60">Chưa xác định</div>}
        </Card>
      </div>

      {showSemiConclusion && (
        <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-400 dark:border-blue-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            Kết luận
          </h3>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Các đội đã hoàn thành vòng bán kết. Để hiểu sâu hơn về các trầm tích văn hóa ảnh hưởng đến hội nhập kinh tế, 
            hãy tham khảo trang phân tích chi tiết.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/analysis/challenges" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Xem Trầm tích Văn hóa
              </Button>
            </Link>
            <Button 
              onClick={() => {
                setFinalPair([sfWinners[0], sfWinners[1]])
                setStage("final")
                setMatchIndex(0)
                setShowSemiConclusion(false)
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg"
            >
              Tiếp tục Chung kết
            </Button>
          </div>

        </Card>
      )}

      {stage !== "done" && !showSemiConclusion && currentPair && (
        <LightningGame
          key={`${stage}-${matchIndex}-${currentPair[0]}-${currentPair[1]}`}
          onBack={onBack}
          skipInternalIntro
          presetTeams={currentPair}
          onMatchEnd={handleMatchEnd}
        />
      )}

      {showFinalConclusion && champion && (
        <Card className="p-8 text-center bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 border-2 border-amber-400 dark:border-amber-500">
          <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">
            Kết luận chung
          </h3>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Giải đấu đã kết thúc với đội vô địch là <strong>Đội {champion}</strong>. 
            Để hiểu sâu hơn về đường lối của Đảng trong việc khắc phục các trầm tích văn hóa và 
            xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, hãy tham khảo trang phân tích chi tiết.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/analysis/solutions" target="_blank" rel="noopener noreferrer">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Xem Đường lối của Đảng
              </Button>
            </Link>
            <Button 
              onClick={() => {
                setShowFinalConclusion(false)
              }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
            >
              Xem Kết quả Vô địch
            </Button>
          </div>

        </Card>
      )}

      {stage === "done" && champion && !showFinalConclusion && (
        <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-amber-400">
          <div className="text-5xl mb-2">🏆</div>
          <div className="text-3xl font-black mb-4">Vô địch: Đội {champion}</div>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Chúc mừng đội vô địch đã xuất sắc vượt qua tất cả các vòng thi đấu!
          </div>
          <Button 
            onClick={onBack}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
          >
            Quay lại Menu
          </Button>
        </Card>
      )}
    </div>
  )
}


