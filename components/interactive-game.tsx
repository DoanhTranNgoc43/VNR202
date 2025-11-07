"use client"

import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ArrowLeft } from "lucide-react"
import LightningGame from "./lightning-game"
import TournamentLightning from "./tournament-lightning"
import GameInstructions from "./game-instructions"

interface InteractiveGameProps {
  onBack: () => void
}

export default function InteractiveGame({ onBack }: InteractiveGameProps) {
  const INTRO_DURATION_MS = 6000
  const [gameMode, setGameMode] = useState<"menu" | "intro" | "instructions" | "tournament">("menu")
  const [nextModeAfterIntro, setNextModeAfterIntro] = useState<"tournament">("tournament")
  const [totalScore, setTotalScore] = useState(0)

  const handleGameEnd = (score: number) => {
    setTotalScore((prev) => prev + score)
    setGameMode("menu")
  }

  useEffect(() => {
    if (gameMode === "intro") {
      const timer = setTimeout(() => setGameMode(nextModeAfterIntro), INTRO_DURATION_MS)
      return () => clearTimeout(timer)
    }
  }, [gameMode, nextModeAfterIntro])

  return (
    <div className="space-y-6">
  

      {gameMode === "menu" && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-2 border-amber-300 dark:border-amber-700 p-8 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100">⚡ Nhanh Như Chớp</h2>
            <p className="text-lg text-amber-800 dark:text-amber-200">
              Trò chơi tốc độ kiểm tra kiến thức hội nhập văn hoá Việt Nam
            </p>
            <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">
              Tổng Điểm: <span className="text-3xl text-orange-600">{totalScore}</span>
            </div>
            <Button
              onClick={() => setGameMode("instructions")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              📖 Hướng Dẫn Chơi
            </Button>
          </Card>

          <div className="grid md:grid-cols-1 gap-4 mb-6">
            <Card
              onClick={() => {
                setNextModeAfterIntro("tournament")
                setGameMode("intro")
              }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-2 border-indigo-400 dark:border-indigo-600 p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl">🏆</div>
                <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200">Giải đấu 8 đội</h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-200">Vòng loại → Bán kết → Chung kết</p>
                <div className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 px-3 py-1 rounded-full inline-block">
                  Tự động sắp lịch & chạy từng trận
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {gameMode === "instructions" && <GameInstructions onClose={() => setGameMode("menu")} />}

      {gameMode === "intro" && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/C-jwuSUiZZg?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&fs=0&disablekb=1&showinfo=0"
              title="Intro Nhanh Như Chớp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Overlays to mask YouTube UI elements */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
            <div className="text-white/80 text-sm">Đang phát intro… sẽ tự chuyển vào trò chơi.</div>
            <Button variant="outline" className="border-white/60 text-white hover:bg-white/10" onClick={() => setGameMode("menu")}>Thoát</Button>
          </div>
        </div>
      )}
      {gameMode === "tournament" && <TournamentLightning onBack={() => setGameMode("menu")} />}
    </div>
  )
}
