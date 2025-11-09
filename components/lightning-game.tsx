"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ArrowLeft, Zap } from "lucide-react"
import NhanhNhuChopIntro from "./nhanh-nhu-chop-intro"
import { QUESTION_BANK, Question } from "./questions"

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
}

interface LightningGameProps {
  onBack: () => void
  skipInternalIntro?: boolean
  presetTeams?: [number, number]
  onMatchEnd?: (winnerTeamId: number) => void
}

const TEAMS = [
  {
    id: 1,
    name: "Đội Đỏ",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-500",
    textColor: "text-red-600",
  },
  {
    id: 2,
    name: "Đội Xanh",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
  },
  {
    id: 3,
    name: "Đội Vàng",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-600",
  },
  {
    id: 4,
    name: "Đội Tím",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
  },
  {
    id: 5,
    name: "Đội Cam",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
  },
  {
    id: 6,
    name: "Đội Lục",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
  },
  {
    id: 7,
    name: "Đội Nâu",
    color: "from-amber-700 to-amber-800",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-700",
    textColor: "text-amber-800",
  },
  {
    id: 8,
    name: "Đội Đen",
    color: "from-slate-700 to-slate-900",
    bgColor: "bg-slate-100 dark:bg-slate-800/40",
    borderColor: "border-slate-700",
    textColor: "text-slate-800 dark:text-slate-200",
  },
]

const QUESTIONS: Question[] = QUESTION_BANK

interface RoundResult {
  team1: number
  team2: number
  team1Score: number
  team2Score: number
  winner: number | null
}

export default function LightningGame({ onBack, skipInternalIntro = false, presetTeams, onMatchEnd }: LightningGameProps) {
  const [gameState, setGameState] = useState<"setup" | "selectTeams" | "playing" | "team1Finished" | "specialRound" | "results">(
    skipInternalIntro ? "selectTeams" : "setup"
  )
  const [showIntro, setShowIntro] = useState(!skipInternalIntro)
  const [roundScores, setRoundScores] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 })
  const [roundResults, setRoundResults] = useState<RoundResult[]>([])
  const [currentRound, setCurrentRound] = useState(1)
  const [team1, setTeam1] = useState<number | null>(null)
  const [team2, setTeam2] = useState<number | null>(null)
  const [currentTeamPlaying, setCurrentTeamPlaying] = useState<number | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(120)
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0)
  const [maxConsecutive, setMaxConsecutive] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showLightning, setShowLightning] = useState(false)
  const [team1MaxStreak, setTeam1MaxStreak] = useState(0)
  const [team2MaxStreak, setTeam2MaxStreak] = useState(0)
  const [team1TimeLeft, setTeam1TimeLeft] = useState(0)
  const [team2TimeLeft, setTeam2TimeLeft] = useState(0)
  const [matchWinner, setMatchWinner] = useState<number | null>(null)
  const [finalT1, setFinalT1] = useState(0)
  const [finalT2, setFinalT2] = useState(0)
  const [gameSessionKey, setGameSessionKey] = useState(0) // Key để trigger random lại câu hỏi
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Hàm shuffle để random câu hỏi
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const QUESTIONS_PER_ROUND = 10
  // Sử dụng tất cả 180 câu hỏi, được random mỗi khi bắt đầu game mới
  // Sử dụng gameSessionKey để random lại mỗi khi bắt đầu game mới
  const questionsForRound = useMemo(() => {
    const shuffled = shuffleArray(QUESTIONS)
    return shuffled.slice(0, QUESTIONS_PER_ROUND)
  }, [gameSessionKey])
  const currentQuestion = questionsForRound[currentQuestionIndex]
  const currentTeam = TEAMS.find((t) => t.id === currentTeamPlaying)
  const getTeamLabel = (id: number | null) => {
    if (!id) return ""
    return presetTeams ? `Đội ${id}` : (TEAMS.find((t) => t.id === id)?.name || `Đội ${id}`)
  }

  const ensureAudioContext = async () => {
    if (typeof window === "undefined") return null
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return null
      audioCtxRef.current = new AudioCtx()
    }
    const ctx = audioCtxRef.current
    if (ctx.state === "suspended") {
      try {
        await ctx.resume()
      } catch (error) {
        console.warn("Không thể resume AudioContext", error)
      }
    }
    return ctx
  }

  const playFeedback = async (type: "correct" | "incorrect") => {
    const ctx = await ensureAudioContext()
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.type = "sine"
    const now = ctx.currentTime
    const frequency = type === "correct" ? 1047 : 220
    oscillator.frequency.setValueAtTime(frequency, now)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(type === "correct" ? 0.22 : 0.16, now + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35)

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.start(now)
    oscillator.stop(now + 0.35)
  }

  useEffect(() => {
    if (gameState !== "playing" || answered) return

    if (timeLeft <= 0) {
      handleRoundEnd()
      return
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, gameState, answered])

  // Auto start with preset teams
  // Lưu ý: Trong tournament mode, mỗi trận đấu có key riêng nên component sẽ được mount mới
  // và câu hỏi sẽ được random tự động thông qua useMemo
  useEffect(() => {
    if (presetTeams) {
      setShowIntro(false)
      setTeam1(presetTeams[0])
      setTeam2(presetTeams[1])
      setCurrentTeamPlaying(presetTeams[0])
      setGameState("playing")
      setTimeLeft(120)
    }
  }, [presetTeams])

  const handleIntroFinish = () => {
    setShowIntro(false)
    setGameState("selectTeams")
  }

  const handleSelectTeams = (t1: number, t2: number) => {
    setTeam1(t1)
    setTeam2(t2)
    setCurrentTeamPlaying(t1)
    setGameState("playing")
    setTimeLeft(120)
    setCurrentQuestionIndex(0)
    setConsecutiveCorrect(0)
    setMaxConsecutive(0)
    setGameSessionKey(prev => prev + 1) // Random lại câu hỏi cho game mới
  }

  const handleAnswer = (optionIndex: number) => {
    if (answered) return
    setSelectedAnswer(optionIndex)
    setAnswered(true)

    const correct = optionIndex === currentQuestion.correct
    setIsCorrect(correct)

    if (correct) {
      setShowLightning(true)
      setTimeout(() => setShowLightning(false), 600)
      const newConsecutive = consecutiveCorrect + 1
      setConsecutiveCorrect(newConsecutive)
      setMaxConsecutive(Math.max(maxConsecutive, newConsecutive))
    } else {
      setConsecutiveCorrect(0)
    }

    void playFeedback(correct ? "correct" : "incorrect")
  }

  const handleNextQuestion = () => {

    if (currentQuestionIndex === questionsForRound.length - 1) {
      handleRoundEnd()
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setAnswered(false)
      setSelectedAnswer(null)
      setIsCorrect(null)
    }
  }

  const handleRoundEnd = () => {
    if (!team1 || !team2 || !currentTeamPlaying) return

    if (currentTeamPlaying === team1) {
      // Team 1 finished, show intermediate screen with "Chơi tiếp" button
      setTeam1MaxStreak(maxConsecutive)
      setTeam1TimeLeft(timeLeft)
      setGameState("team1Finished")
    } else {
      // Both teams finished, determine round winner
      const team1MaxConsec = team1MaxStreak
      const team2MaxConsec = maxConsecutive
      setTeam2MaxStreak(maxConsecutive)
      setTeam2TimeLeft(timeLeft)

      let winner: number | null = null
      if (team2MaxConsec > team1MaxConsec) winner = team2
      else if (team1MaxConsec > team2MaxConsec) winner = team1
      else {
        // Tie-breaker by remaining time
        if (team2TimeLeft > team1TimeLeft) winner = team2
        else if (team1TimeLeft > team2TimeLeft) winner = team1
        else winner = null // still tie → sudden-death handled below
      }

      const newResult: RoundResult = {
        team1,
        team2,
        team1Score: team1MaxConsec,
        team2Score: team2MaxConsec,
        winner,
      }

      setRoundResults([...roundResults, newResult])

      if (!winner) {
        // Sudden-death simple mode: go to specialRound to resolve
        setGameState("specialRound")
        return
      }

      // Kết thúc trận ngay sau khi cả 2 đội đã chơi xong (phiên bản lớp học)
      setMatchWinner(winner)
      setFinalT1(team1MaxConsec)
      setFinalT2(team2MaxConsec)
      setRoundScores((prev) => ({ ...prev, [winner]: (prev[winner] || 0) + 1 }))
      setGameState("results")

      // Trong chế độ giải đấu, sẽ báo về điều phối khi người dùng bấm nút ở màn kết quả
    }
  }

  const sortedTeams = [...TEAMS].sort((a, b) => roundScores[b.id] - roundScores[a.id])

  return (
    <div className="space-y-6">

      {showIntro && <NhanhNhuChopIntro onFinish={handleIntroFinish} />}

      {gameState === "selectTeams" && (
        <div className="space-y-6">
          <Card className="bg-slate-100 dark:bg-slate-700 p-6 text-center">
            <h3 className="text-2xl font-bold">Chọn 2 Đội Thi Đấu</h3>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {TEAMS.map((team) => (
              <Button
                key={team.id}
                onClick={() => {
                  if (team1 === null) {
                    setTeam1(team.id)
                  } else if (team1 !== team.id && team2 === null) {
                    handleSelectTeams(team1, team.id)
                  }
                }}
                className={`${team.bgColor} border-2 ${team.borderColor} p-8 h-auto text-2xl font-bold ${team.textColor} hover:scale-105 transition-all`}
              >
                {team.name}
                {team1 === team.id && <span className="ml-2">✓</span>}
                {team2 === team.id && <span className="ml-2">✓</span>}
              </Button>
            ))}
          </div>
        </div>
      )}

      {gameState === "playing" && currentTeamPlaying && currentTeam && (
        <div className="space-y-6">
          {showLightning && <div className="fixed inset-0 bg-green-400 opacity-30 pointer-events-none animate-pulse" />}

          {/* Level Tower */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-12 rounded-sm font-bold text-xs flex items-center justify-center transition-all ${
                  i < consecutiveCorrect
                    ? "bg-green-500 text-white"
                    : i === consecutiveCorrect
                      ? "bg-yellow-400 text-black scale-110 animate-pulse"
                      : "bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Score and Timer */}
          <div className="grid grid-cols-3 gap-4">
            <Card className={`${currentTeam.bgColor} border-2 ${currentTeam.borderColor} p-4 text-center`}>
              <div className="text-sm font-bold">Đội</div>
              <div className={`text-2xl font-bold ${currentTeam.textColor}`}>{getTeamLabel(currentTeam.id)}</div>
            </Card>
            <Card
              className={`p-4 text-center border-2 ${timeLeft <= 10 ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-green-500 bg-green-50 dark:bg-green-900/20"}`}
            >
              <div className="text-sm font-bold">Thời Gian</div>
              <div
                className={`text-4xl font-black ${timeLeft <= 10 ? "text-red-600 animate-pulse" : "text-green-600"}`}
              >
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </div>
            </Card>
            <Card className="bg-slate-100 dark:bg-slate-700 p-4 text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400">Câu</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {currentQuestionIndex + 1}/{questionsForRound.length}
              </div>
            </Card>
          </div>

          {/* Question Card */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-green-500 p-8 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">{currentQuestion.question}</h3>

            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 h-auto text-left justify-start text-lg font-bold transition-all ${
                    answered
                      ? index === currentQuestion.correct
                        ? "bg-green-500 hover:bg-green-500 text-white scale-105"
                        : index === selectedAnswer
                          ? "bg-red-500 hover:bg-red-500 text-white"
                          : "bg-slate-600 text-slate-300"
                      : "bg-slate-700 hover:bg-slate-600 text-white hover:scale-105"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {answered && (
              <Button
                onClick={handleNextQuestion}
                className={`w-full font-bold py-3 text-lg ${
                  isCorrect
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    : "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                }`}
              >
                {isCorrect ? "✓ Chính Xác!" : "✗ Sai Rồi!"} -{" "}
                {currentQuestionIndex === questionsForRound.length - 1 ? "Kết Thúc" : "Tiếp Theo"}
              </Button>
            )}
          </Card>
        </div>
      )}

      {gameState === "team1Finished" && team1 && team2 && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-400 dark:border-blue-600 p-8 text-center space-y-6">
            <h2 className="text-4xl font-black text-blue-600 dark:text-blue-400">Đội 1 Đã Hoàn Thành!</h2>
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                {getTeamLabel(team1)}: {team1MaxStreak} câu liên tiếp đúng
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300">
                Thời gian còn lại: {Math.floor(team1TimeLeft / 60)}:{String(team1TimeLeft % 60).padStart(2, "0")}
              </div>
            </div>
          </Card>

          <Card className={`p-6 ${
            TEAMS.find((t) => t.id === team1)?.bgColor
          } border-2 ${TEAMS.find((t) => t.id === team1)?.borderColor}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-black">
                {getTeamLabel(team1)}
              </div>
              <div className="text-5xl font-black">{team1MaxStreak}</div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-opacity-20 border-gray-600 dark:border-gray-400">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Thời gian còn lại:
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {Math.floor(team1TimeLeft / 60)}:{String(team1TimeLeft % 60).padStart(2, "0")}
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={() => {
                setCurrentTeamPlaying(team2)
                setCurrentQuestionIndex(0)
                setTimeLeft(120)
                setConsecutiveCorrect(0)
                setMaxConsecutive(0)
                setAnswered(false)
                setSelectedAnswer(null)
                setIsCorrect(null)
                setGameState("playing")
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 text-xl"
            >
              Chơi Tiếp
            </Button>
          </div>
        </div>
      )}

      {gameState === "specialRound" && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-2 border-purple-400 dark:border-purple-600 p-8 text-center space-y-6">
            <h2 className="text-4xl font-black text-purple-600 dark:text-purple-400">Câu Hỏi Phụ (Sudden-Death)</h2>
            <p className="text-lg font-bold text-purple-700 dark:text-purple-300">Hai đội giành quyền trả lời. Đội trả lời đúng trước sẽ thắng.</p>
            <div className="text-xl">Ví dụ: “EVFTA là hiệp định giữa Việt Nam và khối nào?”</div>
            <div className="text-sm text-slate-600">Đáp án: EU</div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => setGameState("results")}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 text-xl"
            >
              Chốt kết quả (GV xác nhận đội thắng)
            </Button>
          </div>
        </div>
      )}

      {gameState === "results" && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 border-2 border-green-400 dark:border-green-600 p-8 text-center space-y-6">
            <h2 className="text-5xl font-black text-green-600 dark:text-green-400 flex items-center justify-center gap-3">
              <Zap className="w-12 h-12" />
              Kết Quả Chớp Nhoáng
              <Zap className="w-12 h-12" />
            </h2>
            {team1 && team2 && (
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-bold">
                  {(() => {
                    const t1 = finalT1
                    const t2 = finalT2
                    const t1Name = getTeamLabel(team1)
                    const t2Name = getTeamLabel(team2)
                    if (t1 > t2) return `${t1Name} thắng (${t1} - ${t2})`
                    if (t2 > t1) return `${t2Name} thắng (${t2} - ${t1})`
                    // Hòa điểm - kiểm tra xem có đội thắng nhờ thời gian không
                    if (team1TimeLeft > team2TimeLeft) {
                      return `${t1Name} thắng (${t1} - ${t2}) - Nhờ thời gian`
                    } else if (team2TimeLeft > team1TimeLeft) {
                      return `${t2Name} thắng (${t2} - ${t1}) - Nhờ thời gian`
                    }
                    return `Hòa điểm (${t1} - ${t2})`
                  })()}
                </div>
                {finalT1 === finalT2 && (
                  <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-semibold space-y-2">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      💡 Khi hòa điểm: Đội có thời gian còn lại NHIỀU HƠN (làm nhanh hơn) sẽ thắng
                    </div>
                    {(() => {
                      const t1Name = getTeamLabel(team1)
                      const t2Name = getTeamLabel(team2)
                      if (team1TimeLeft > team2TimeLeft) {
                        return (
                          <div>
                            <div className="font-bold text-green-700 dark:text-green-400">
                              ⚡ {t1Name} thắng vì hoàn thành nhanh hơn
                            </div>
                            <div className="text-xs mt-1">
                              Thời gian còn lại: {t1Name} {Math.floor(team1TimeLeft / 60)}:{String(team1TimeLeft % 60).padStart(2, "0")} {'>'} {t2Name} {Math.floor(team2TimeLeft / 60)}:{String(team2TimeLeft % 60).padStart(2, "0")}
                            </div>
                          </div>
                        )
                      } else if (team2TimeLeft > team1TimeLeft) {
                        return (
                          <div>
                            <div className="font-bold text-green-700 dark:text-green-400">
                              ⚡ {t2Name} thắng vì hoàn thành nhanh hơn
                            </div>
                            <div className="text-xs mt-1">
                              Thời gian còn lại: {t2Name} {Math.floor(team2TimeLeft / 60)}:{String(team2TimeLeft % 60).padStart(2, "0")} {'>'} {t1Name} {Math.floor(team1TimeLeft / 60)}:{String(team1TimeLeft % 60).padStart(2, "0")}
                            </div>
                          </div>
                        )
                      } else {
                        return `⚡ Hai đội hòa cả điểm và thời gian còn lại → Câu hỏi phụ (Sudden Death)`
                      }
                    })()}
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {team1 && (
              <Card className={`p-6 ${
                TEAMS.find((t) => t.id === team1)?.bgColor
              } border-2 ${TEAMS.find((t) => t.id === team1)?.borderColor}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-black">
                    {getTeamLabel(team1)}
                  </div>
                  <div className="text-5xl font-black">{finalT1}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-opacity-20 border-gray-600 dark:border-gray-400">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Thời gian còn lại:
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {Math.floor(team1TimeLeft / 60)}:{String(team1TimeLeft % 60).padStart(2, "0")}
                  </div>
                </div>
              </Card>
            )}
            {team2 && (
              <Card className={`p-6 ${
                TEAMS.find((t) => t.id === team2)?.bgColor
              } border-2 ${TEAMS.find((t) => t.id === team2)?.borderColor}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-black">
                    {getTeamLabel(team2)}
                  </div>
                  <div className="text-5xl font-black">{finalT2}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-opacity-20 border-gray-600 dark:border-gray-400">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Thời gian còn lại:
                  </div>
                  <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {Math.floor(team2TimeLeft / 60)}:{String(team2TimeLeft % 60).padStart(2, "0")}
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <Button
              onClick={() => {
                setGameState("setup")
                setRoundScores({ 1: 0, 2: 0, 3: 0, 4: 0 })
                setRoundResults([])
                setCurrentRound(1)
                setTeam1(null)
                setTeam2(null)
                setCurrentTeamPlaying(null)
                setCurrentQuestionIndex(0)
                setTimeLeft(120)
                setConsecutiveCorrect(0)
                setMaxConsecutive(0)
                setAnswered(false)
                setSelectedAnswer(null)
                setIsCorrect(null)
                setGameSessionKey(prev => prev + 1) // Random lại câu hỏi khi chơi lại
              }}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 text-lg"
            >
              Chơi Lại
            </Button>
            {onMatchEnd && matchWinner && (
              <Button
                onClick={() => onMatchEnd(matchWinner)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 text-lg"
              >
                Tiếp tục trận tiếp theo
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
