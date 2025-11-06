"use client"

import { useState, useRef } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { motion } from "framer-motion"

interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correct: number
  reward: number
}

interface WheelGameProps {
  questions: Question[]
  onGameEnd: (score: number) => void
}

export default function WheelGame({ questions, onGameEnd }: WheelGameProps) {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [usedQuestions, setUsedQuestions] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [resultMessage, setResultMessage] = useState("")
  const wheelRef = useRef<HTMLDivElement>(null)

  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-purple-500"]

  const spinWheel = () => {
    if (isSpinning || usedQuestions.length === questions.length) return

    setIsSpinning(true)
    setSelectedAnswer(null)
    setShowResult(false)

    const spins = Math.floor(Math.random() * 5) + 5
    const randomDegree = Math.floor(Math.random() * 360)
    const totalRotation = spins * 360 + randomDegree
    const newRotation = rotation + totalRotation

    setRotation(newRotation)

    setTimeout(() => {
      const normalizedRotation = newRotation % 360
      const segmentSize = 360 / questions.length
      const selectedSegment = Math.floor((360 - normalizedRotation) / segmentSize) % questions.length

      let questionIndex = selectedSegment
      let attempts = 0
      while (usedQuestions.includes(questionIndex) && attempts < questions.length) {
        questionIndex = (questionIndex + 1) % questions.length
        attempts++
      }

      if (attempts < questions.length) {
        setCurrentQuestion(questions[questionIndex])
        setUsedQuestions([...usedQuestions, questionIndex])
      }

      setIsSpinning(false)
    }, 3000)
  }

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
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

  const handleNextQuestion = () => {
    if (usedQuestions.length === questions.length) {
      onGameEnd(score)
    } else {
      setCurrentQuestion(null)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Wheel */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64">
            <motion.div
              ref={wheelRef}
              animate={{ rotate: rotation }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              {questions.map((q, index) => {
                const angle = (360 / questions.length) * index
                return (
                  <div
                    key={q.id}
                    className={`absolute w-full h-full ${colors[index % colors.length]} flex items-center justify-center text-white font-bold text-sm text-center p-2 rounded-full`}
                    style={{
                      transform: `rotate(${angle}deg) translateY(-50%)`,
                      transformOrigin: "50% 50%",
                      clipPath: `polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)`,
                    }}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>{q.category}</div>
                  </div>
                )
              })}
            </motion.div>
            {/* Center circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full border-4 border-amber-900 dark:border-amber-600 flex items-center justify-center">
                <span className="text-2xl">🎡</span>
              </div>
            </div>
            {/* Pointer */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-600" />
          </div>
        </div>

        {/* Question Section */}
        <div className="space-y-4">
          {currentQuestion ? (
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-300 dark:border-blue-700 p-6 space-y-4">
              <div className="space-y-2">
                <div className="inline-block bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentQuestion.category}
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{currentQuestion.question}</h3>
              </div>

              <div className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? "border-blue-600 bg-blue-100 dark:bg-blue-900"
                        : "border-blue-200 dark:border-blue-700 hover:border-blue-400"
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
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Trả Lời
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} className="flex-1 bg-green-600 hover:bg-green-700">
                    {usedQuestions.length === questions.length ? "Kết Thúc" : "Câu Tiếp Theo"}
                  </Button>
                )}
              </div>

              <div className="text-center text-sm text-blue-700 dark:text-blue-300">
                Điểm: <span className="font-bold text-lg">{score}</span> | Câu hỏi: {usedQuestions.length}/
                {questions.length}
              </div>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 border-2 border-purple-300 dark:border-purple-700 p-6 text-center space-y-4">
              <p className="text-lg text-purple-900 dark:text-purple-100">
                {usedQuestions.length === questions.length
                  ? "🎉 Bạn đã hoàn thành tất cả câu hỏi!"
                  : "Quay bánh xe để chọn câu hỏi tiếp theo"}
              </p>
              <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">Điểm: {score}</div>
            </Card>
          )}

          <Button
            onClick={spinWheel}
            disabled={isSpinning || usedQuestions.length === questions.length}
            size="lg"
            className="w-full gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            {isSpinning ? "⏳ Đang Quay..." : "🎡 Quay Bánh Xe"}
          </Button>
        </div>
      </div>
    </div>
  )
}
