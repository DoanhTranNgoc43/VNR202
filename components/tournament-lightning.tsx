"use client"

import { useMemo, useState } from "react"
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
        setFinalPair([next[0], next[1]])
        setStage("final")
        setMatchIndex(0)
      }
    } else if (stage === "final") {
      setChampion(winner)
      setStage("done")
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

      {stage !== "done" && currentPair && (
        <LightningGame
          key={`${stage}-${matchIndex}-${currentPair[0]}-${currentPair[1]}`}
          onBack={onBack}
          skipInternalIntro
          presetTeams={currentPair}
          onMatchEnd={handleMatchEnd}
        />
      )}

      {stage === "done" && champion && (
        <Card className="p-8 text-center bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-amber-400">
          <div className="text-5xl mb-2">🏆</div>
          <div className="text-3xl font-black">Vô địch: Đội {champion}</div>
        </Card>
      )}
    </div>
  )
}


