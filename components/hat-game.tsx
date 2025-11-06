"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { motion } from "framer-motion"

interface HatGameProps {
  onGameEnd: (score: number) => void
}

export default function HatGame({ onGameEnd }: HatGameProps) {
  const [selectedHat, setSelectedHat] = useState<number | null>(null)
  const [revealedHats, setRevealedHats] = useState<Set<number>>(new Set())
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [resultMessage, setResultMessage] = useState("")

  const questions = [
    {
      id: 0,
      question: "Tư duy nào cản trở Việt Nam hội nhập kinh tế quốc tế?",
      options: ["Tư duy bảo thủ", "Tư duy tiến bộ", "Tư duy toàn cầu", "Tư duy hiện đại"],
      correct: 0,
      reward: 10,
    },
    {
      id: 1,
      question: "Vấn đề nào liên quan đến chất lượng nguồn nhân lực?",
      options: ["Tham nhũng", "Kỹ năng yếu", "Bảo thủ", "Thiếu công nghệ"],
      correct: 1,
      reward: 10,
    },
    {
      id: 2,
      question: "Hội chợ Mùa Thu 2025 có bao nhiêu phân khu chính?",
      options: ["3", "4", "5", "6"],
      correct: 2,
      reward: 15,
    },
    {
      id: 3,
      question: "Phân khu nào quảng bá sản phẩm OCOP?",
      options: ["Công Nghiệp", "Thu Gia Đình", "Thu Đất Việt - Sắc Nước Hương Thu", "Tinh Hoa Văn Hóa"],
      correct: 2,
      reward: 15,
    },
    {
      id: 4,
      question: "Hiệp định thương mại nào Việt Nam tham gia?",
      options: ["AFTA", "CPTPP", "EVFTA", "Tất cả đều đúng"],
      correct: 3,
      reward: 15,
    },
    {
      id: 5,
      question: "Kỹ năng nào còn yếu trong giáo dục Việt Nam?",
      options: ["Tiếng Anh", "Kỹ năng mềm", "Tư duy phê phán", "Tất cả đều đúng"],
      correct: 3,
      reward: 15,
    },
  ]

  const handleHatClick = (index: number) => {
    if (revealedHats.has(index) || currentQuestion) return

    const newRevealed = new Set(revealedHats)
    newRevealed.add(index)
    setRevealedHats(newRevealed)
    setSelectedHat(index)
    setCurrentQuestion(questions[index])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return

    const isCorrect = selectedAnswer === currentQuestion.correct
    if (isCorrect) {
      const newScore = score + currentQuestion.reward
      setScore(newScore)
      setResultMessage(`✅ Chính xác! +${currentQuestion.reward} điểm`)
    } else {
      setResultMessage(`❌ Sai rồi! Đáp án đúng là: ${currentQuestion.options[currentQuestion.correct]}`)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    if (revealedHats.size === questions.length) {
      onGameEnd(score)
    } else {
      setCurrentQuestion(null)
      setSelectedAnswer(null)
      setShowResult(false)
      setSelectedHat(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Hats Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">Chọn một chiếc nón</h3>
          <div className="grid grid-cols-3 gap-3">
            {questions.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleHatClick(index)}
                disabled={revealedHats.has(index) || currentQuestion !== null}
                whileHover={!revealedHats.has(index) && !currentQuestion ? { scale: 1.1 } : {}}
                whileTap={!revealedHats.has(index) && !currentQuestion ? { scale: 0.95 } : {}}
                className={`p-4 rounded-lg font-bold text-2xl transition-all ${
                  revealedHats.has(index)
                    ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-br from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 cursor-pointer shadow-lg"
                }`}
              >
                {revealedHats.has(index) ? "✓" : "🎩"}
              </motion.button>
            ))}
          </div>
          <div className="text-sm text-amber-800 dark:text-amber-200">
            Đã mở: {revealedHats.size}/{questions.length}
          </div>
        </div>

        {/* Question Section */}
        <div>
          {currentQuestion ? (
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-2 border-red-300 dark:border-red-700 p-6 space-y-4">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100">{currentQuestion.question}</h3>

              <div className="space-y-2">
                {currentQuestion.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? "border-red-600 bg-red-100 dark:bg-red-900"
                        : "border-red-200 dark:border-red-700 hover:border-red-400"
                    } ${showResult && index === currentQuestion.correct ? "border-green-600 bg-green-100 dark:bg-green-900" : ""} ${
                      showResult && index === selectedAnswer && index !== currentQuestion.correct
                        ? "border-red-600 bg-red-100 dark:bg-red-900"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div
                  className={`p-4 rounded-lg text-center font-semibold ${
                    selectedAnswer === currentQuestion.correct
                      ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                      : "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
                  }`}
                >
                  {resultMessage}
                </div>
              )}

              <div className="flex gap-2">
                {!showResult ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    Trả Lời
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="flex-1 bg-green-600 hover:bg-green-700">
                    {revealedHats.size === questions.length ? "Kết Thúc" : "Nón Tiếp Theo"}
                  </Button>
                )}
              </div>

              <div className="text-center text-sm text-red-700 dark:text-red-300">
                Điểm: <span className="font-bold text-lg">{score}</span>
              </div>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-2 border-red-300 dark:border-red-700 p-6 text-center space-y-4">
              <p className="text-lg text-red-900 dark:text-red-100">Chọn một chiếc nón để bắt đầu</p>
              <div className="text-4xl">🎩</div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
