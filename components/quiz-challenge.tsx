"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { motion } from "framer-motion"

interface QuizChallengeProps {
  onGameEnd: (score: number) => void
}

export default function QuizChallenge({ onGameEnd }: QuizChallengeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const questions = [
    {
      question: "Tư duy nào cản trở Việt Nam hội nhập?",
      options: ["Tư duy bảo thủ", "Tư duy tiến bộ", "Tư duy toàn cầu", "Tư duy hiện đại"],
      correct: 0,
    },
    {
      question: "Vấn đề nào liên quan đến chất lượng nguồn nhân lực?",
      options: ["Tham nhũng", "Kỹ năng yếu", "Bảo thủ", "Thiếu công nghệ"],
      correct: 1,
    },
    {
      question: "Hội chợ Mùa Thu 2025 có bao nhiêu phân khu?",
      options: ["3", "4", "5", "6"],
      correct: 2,
    },
    {
      question: "Phân khu nào quảng bá sản phẩm OCOP?",
      options: ["Công Nghiệp", "Thu Gia Đình", "Thu Đất Việt - Sắc Nước Hương Thu", "Tinh Hoa Văn Hóa"],
      correct: 2,
    },
    {
      question: "Hiệp định thương mại nào Việt Nam tham gia?",
      options: ["AFTA", "CPTPP", "EVFTA", "Tất cả đều đúng"],
      correct: 3,
    },
  ]

  useEffect(() => {
    if (answered || currentQuestion >= questions.length) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setAnswered(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [answered, currentQuestion, questions.length])

  const handleAnswer = (index: number) => {
    if (answered) return
    setSelectedAnswer(index)
    setAnswered(true)

    if (index === questions[currentQuestion].correct) {
      setScore((s) => s + Math.max(10, timeLeft * 2))
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setTimeLeft(15)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      onGameEnd(score)
    }
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-2 border-purple-300 dark:border-purple-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Thử Thách Nhanh</h3>
          <div className="text-right">
            <div className="text-sm text-purple-800 dark:text-purple-200">
              Câu: {currentQuestion + 1}/{questions.length}
            </div>
            <div className="text-sm text-purple-800 dark:text-purple-200">Điểm: {score}</div>
          </div>
        </div>

        {/* Timer */}
        <motion.div
          className={`mb-6 p-4 rounded-lg text-center font-bold text-2xl ${
            timeLeft <= 5
              ? "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
              : "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100"
          }`}
          animate={{ scale: timeLeft <= 5 ? [1, 1.1, 1] : 1 }}
          transition={{ repeat: timeLeft <= 5 ? Number.POSITIVE_INFINITY : 0, duration: 0.5 }}
        >
          ⏱️ {timeLeft}s
        </motion.div>

        {/* Question */}
        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">{question.question}</h4>

        {/* Options */}
        <div className="space-y-2 mb-6">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              whileHover={!answered ? { scale: 1.02 } : {}}
              className={`w-full p-4 text-left rounded-lg border-2 font-semibold transition-all ${
                selectedAnswer === index
                  ? isCorrect
                    ? "border-green-600 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                    : "border-red-600 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
                  : answered && index === question.correct
                    ? "border-green-600 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                    : "border-purple-300 dark:border-purple-700 hover:border-purple-500"
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {/* Result Message */}
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-center font-bold mb-6 ${
              isCorrect
                ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                : "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100"
            }`}
          >
            {isCorrect ? `✅ Chính xác! +${Math.max(10, timeLeft * 2)} điểm` : "❌ Sai rồi!"}
          </motion.div>
        )}

        {/* Next Button */}
        {answered && (
          <Button onClick={handleNext} className="w-full bg-purple-600 hover:bg-purple-700">
            {currentQuestion < questions.length - 1 ? "Câu Tiếp Theo" : "Kết Thúc"}
          </Button>
        )}
      </Card>
    </div>
  )
}
