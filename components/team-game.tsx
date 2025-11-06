"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { ArrowLeft, Zap, Play, Volume2 } from "lucide-react"
import NhanhNhuChopIntro from "./nhanh-nhu-chop-intro"

interface TeamGameProps {
  onBack: () => void
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
]

interface Question {
  round: number
  type: "text" | "image" | "video" | "audio"
  question: string
  media?: string
  options: string[]
  correct: number
  points: number
}

const QUESTIONS: Question[] = [
  {
    round: 1,
    type: "text",
    question: "Hạn chế nào của văn hóa Việt Nam cản trở hội nhập kinh tế quốc tế?",
    options: ["Tư duy bảo thủ", "Quan liêu tham nhũng", "Kỹ năng con người yếu", "Tất cả các đáp án trên"],
    correct: 3,
    points: 100,
  },
  {
    round: 1,
    type: "image",
    question: "Hình ảnh này đại diện cho phân khu nào của Hội chợ Mùa Thu 2025?",
    media: "/autumn-fair-cultural-zone.jpg",
    options: ["Thu Văn Hóa", "Thu Đất Việt", "Thu Công Nghiệp", "Thu Du Lịch"],
    correct: 0,
    points: 100,
  },
  {
    round: 2,
    type: "video",
    question: "Theo video, giải pháp chính để vượt qua hạn chế văn hóa là gì?",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    options: ["Cải cách giáo dục", "Đào tạo kỹ năng số", "Hội nhập quốc tế", "Cả A, B và C"],
    correct: 3,
    points: 150,
  },
  {
    round: 2,
    type: "image",
    question: "Hội chợ Mùa Thu 2025 có bao nhiêu phân khu chủ đề?",
    media: "/five-exhibition-zones-map.jpg",
    options: ["3 phân khu", "4 phân khu", "5 phân khu", "6 phân khu"],
    correct: 2,
    points: 150,
  },
  {
    round: 3,
    type: "audio",
    question: "Nghe đoạn phát biểu và xác định nó nói về vấn đề gì?",
    media: "audio",
    options: ["Bảo vệ bản sắc dân tộc", "Hội nhập văn hóa quốc tế", "Phát triển kinh tế", "Giáo dục con người"],
    correct: 1,
    points: 200,
  },
  {
    round: 3,
    type: "video",
    question: "Video này giới thiệu về phân khu nào của Hội chợ?",
    media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    options: ["Thu Đất Việt - OCOP", "Thu Công Nghiệp", "Thu Văn Hóa", "Thu Du Lịch"],
    correct: 0,
    points: 200,
  },
]

export default function TeamGame({ onBack }: TeamGameProps) {
  const [gameState, setGameState] = useState<"setup" | "playing" | "results">("setup")
  const [showIntro, setShowIntro] = useState(true)
  const [scores, setScores] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 })
  const [currentRound, setCurrentRound] = useState(1)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [roundScores, setRoundScores] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 })
  const [audioPlaying, setAudioPlaying] = useState(false)

  const roundQuestions = QUESTIONS.filter((q) => q.round === currentRound)
  const currentQuestion = roundQuestions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === roundQuestions.length - 1
  const isLastRound = currentRound === 3

  const handleStartGame = (teamId: number) => {
    setSelectedTeam(teamId)
    setGameState("playing")
  }

  useEffect(() => {
    // If intro is shown, keep initial game state as setup until intro finishes
    if (showIntro) return
  }, [showIntro])

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    setAnswered(true)

    if (selectedTeam && optionIndex === currentQuestion.correct) {
      const newScore = scores[selectedTeam] + currentQuestion.points
      setScores((prev) => ({ ...prev, [selectedTeam]: newScore }))
      setRoundScores((prev) => ({ ...prev, [selectedTeam]: (prev[selectedTeam] || 0) + currentQuestion.points }))
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      if (isLastRound) {
        setGameState("results")
      } else {
        setCurrentRound(currentRound + 1)
        setCurrentQuestionIndex(0)
        setRoundScores({ 1: 0, 2: 0, 3: 0, 4: 0 })
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
    setAnswered(false)
    setSelectedAnswer(null)
    setAudioPlaying(false)
  }

  const sortedTeams = [...TEAMS].sort((a, b) => scores[b.id] - scores[a.id])

  const renderMedia = () => {
    if (!currentQuestion.media) return null

    switch (currentQuestion.type) {
      case "image":
        return (
          <div className="w-full rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600">
            <img src={currentQuestion.media || "/placeholder.svg"} alt="Question media" className="w-full h-auto" />
          </div>
        )
      case "video":
        return (
          <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600">
            <iframe
              width="100%"
              height="100%"
              src={currentQuestion.media}
              title="Question video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )
      case "audio":
        return (
          <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-center space-y-4">
            <Volume2 className="w-16 h-16 mx-auto text-white" />
            <p className="text-white font-semibold">Nhấn nút phát để nghe đoạn phát biểu</p>
            <Button
              onClick={() => setAudioPlaying(!audioPlaying)}
              className="bg-white text-purple-600 hover:bg-slate-100 font-bold gap-2"
            >
              <Play className="w-5 h-5" />
              {audioPlaying ? "Đang phát..." : "Phát Âm Thanh"}
            </Button>
            {audioPlaying && (
              <audio autoPlay className="w-full mt-4">
                <source src="/placeholder.mp3" type="audio/mpeg" />
              </audio>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="outline" className="gap-2 bg-transparent">
        <ArrowLeft className="w-4 h-4" />
        Quay Lại Sách
      </Button>

      {showIntro ? (
        <NhanhNhuChopIntro onFinish={() => setShowIntro(false)} />
      ) : gameState === "setup" && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-2 border-amber-300 dark:border-amber-700 p-8 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100">🏆 Cuộc Thi 4 Đội</h2>
            <p className="text-lg text-amber-800 dark:text-amber-200">
              Chọn đội của bạn và chuẩn bị cho cuộc thi kiến thức hấp dẫn với câu hỏi đa dạng!
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {TEAMS.map((team) => (
              <Card
                key={team.id}
                onClick={() => handleStartGame(team.id)}
                className={`${team.bgColor} border-2 ${team.borderColor} p-8 cursor-pointer hover:shadow-xl transition-all hover:scale-105`}
              >
                <div className="text-center space-y-4">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${team.color} bg-clip-text text-transparent`}>
                    {team.name}
                  </div>
                  <p className="text-lg font-semibold">Nhấn để bắt đầu</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {gameState === "playing" && selectedTeam && (
        <div className="space-y-6">
          {/* Score Board */}
          <div className="grid md:grid-cols-4 gap-3">
            {TEAMS.map((team) => (
              <Card
                key={team.id}
                className={`${team.bgColor} border-2 ${team.borderColor} p-4 text-center ${
                  selectedTeam === team.id ? "ring-4 ring-offset-2 ring-amber-400" : ""
                }`}
              >
                <div className={`text-sm font-bold ${team.textColor}`}>{team.name}</div>
                <div className="text-3xl font-bold mt-2">{scores[team.id]}</div>
              </Card>
            ))}
          </div>

          {/* Question Card */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-2 border-slate-300 dark:border-slate-600 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-slate-600 dark:text-slate-400">
                Vòng {currentRound} - Câu {currentQuestionIndex + 1}/{roundQuestions.length}
                <span className="ml-3 inline-block px-3 py-1 bg-slate-300 dark:bg-slate-600 rounded-full text-xs font-bold">
                  {currentQuestion.type === "text" && "📝 Văn Bản"}
                  {currentQuestion.type === "image" && "🖼️ Hình Ảnh"}
                  {currentQuestion.type === "video" && "🎬 Video"}
                  {currentQuestion.type === "audio" && "🔊 Âm Thanh"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-amber-600">
                <Zap className="w-5 h-5" />
                {currentQuestion.points} điểm
              </div>
            </div>

            {renderMedia()}

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {currentQuestion.question}
            </h3>

            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => !answered && handleAnswer(index)}
                  disabled={answered}
                  className={`p-4 h-auto text-left justify-start text-lg font-semibold transition-all ${
                    answered
                      ? index === currentQuestion.correct
                        ? "bg-green-500 hover:bg-green-500 text-white"
                        : index === selectedAnswer
                          ? "bg-red-500 hover:bg-red-500 text-white"
                          : "bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300"
                      : "bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-900 dark:text-slate-100"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {answered && (
              <div className="flex gap-4">
                <Button
                  onClick={handleNextQuestion}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3"
                >
                  {isLastQuestion ? (isLastRound ? "Xem Kết Quả" : "Vòng Tiếp Theo") : "Câu Tiếp Theo"}
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}

      {gameState === "results" && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-2 border-amber-300 dark:border-amber-700 p-8 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100">🎉 Kết Quả Cuộc Thi</h2>
          </Card>

          <div className="space-y-3">
            {sortedTeams.map((team, index) => {
              const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "4️⃣"
              return (
                <Card
                  key={team.id}
                  className={`${team.bgColor} border-2 ${team.borderColor} p-6 flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{medal}</div>
                    <div>
                      <div className={`text-xl font-bold ${team.textColor}`}>{team.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Vị trí {index + 1}</div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold">{scores[team.id]}</div>
                </Card>
              )
            })}
          </div>

          <Button
            onClick={() => {
              setGameState("setup")
              setScores({ 1: 0, 2: 0, 3: 0, 4: 0 })
              setCurrentRound(1)
              setCurrentQuestionIndex(0)
              setSelectedTeam(null)
              setAnswered(false)
              setSelectedAnswer(null)
              setRoundScores({ 1: 0, 2: 0, 3: 0, 4: 0 })
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3"
          >
            Chơi Lại
          </Button>
        </div>
      )}
    </div>
  )
}
