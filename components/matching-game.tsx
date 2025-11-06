"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { motion } from "framer-motion"

interface MatchingGameProps {
  onGameEnd: (score: number) => void
}

export default function MatchingGame({ onGameEnd }: MatchingGameProps) {
  const [pairs, setPairs] = useState<any[]>([])
  const [flipped, setFlipped] = useState<Set<number>>(new Set())
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)

  const matchingPairs = [
    { left: "Tư duy bảo thủ", right: "Cản trở hội nhập" },
    { left: "Tham nhũng", right: "Vấn đề quản lý" },
    { left: "Kỹ năng mềm", right: "Cần phát triển" },
    { left: "CPTPP", right: "Hiệp định thương mại" },
    { left: "OCOP", right: "Sản phẩm địa phương" },
    { left: "Hội chợ Mùa Thu", right: "Sự kiện hội nhập" },
  ]

  useEffect(() => {
    const shuffled = [...matchingPairs].sort(() => Math.random() - 0.5)
    setPairs(shuffled)
  }, [])

  const handleCardClick = (index: number) => {
    if (matched.has(index) || flipped.has(index) || selectedCards.length >= 2) return

    const newFlipped = new Set(flipped)
    newFlipped.add(index)
    setFlipped(newFlipped)

    const newSelected = [...selectedCards, index]
    setSelectedCards(newSelected)

    if (newSelected.length === 2) {
      setMoves((m) => m + 1)
      const [first, second] = newSelected

      const isMatch =
        (first < matchingPairs.length &&
          second >= matchingPairs.length &&
          pairs[first]?.left === pairs[second]?.right) ||
        (first >= matchingPairs.length && second < matchingPairs.length && pairs[first]?.right === pairs[second]?.left)

      if (isMatch) {
        setMatched((prev) => new Set([...prev, first, second]))
        setScore((s) => s + 20)
        setSelectedCards([])
        setFlipped(new Set())
      } else {
        setTimeout(() => {
          setFlipped(new Set())
          setSelectedCards([])
        }, 1000)
      }
    }
  }

  const isGameComplete = matched.size === matchingPairs.length * 2

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-2 border-blue-300 dark:border-blue-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Ghép Cặp Khái Niệm</h3>
          <div className="text-right">
            <div className="text-sm text-blue-800 dark:text-blue-200">Điểm: {score}</div>
            <div className="text-sm text-blue-800 dark:text-blue-200">Nước: {moves}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {pairs.map((pair, index) => {
            const isFlipped = flipped.has(index)
            const isMatched = matched.has(index)
            const content = index < matchingPairs.length ? pair.left : pair.right

            return (
              <motion.button
                key={index}
                onClick={() => handleCardClick(index)}
                disabled={isMatched}
                whileHover={!isMatched ? { scale: 1.05 } : {}}
                whileTap={!isMatched ? { scale: 0.95 } : {}}
                className={`p-4 rounded-lg font-semibold text-sm text-center transition-all min-h-24 flex items-center justify-center ${
                  isMatched
                    ? "bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-100 opacity-50"
                    : isFlipped
                      ? "bg-blue-500 dark:bg-blue-600 text-white"
                      : "bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-400"
                }`}
              >
                {isFlipped || isMatched ? content : "?"}
              </motion.button>
            )
          })}
        </div>

        {isGameComplete && (
          <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-lg text-center">
            <p className="font-bold text-lg">🎉 Hoàn thành! Điểm: {score}</p>
            <Button onClick={() => onGameEnd(score)} className="mt-4 bg-green-600 hover:bg-green-700">
              Quay Lại Menu
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
