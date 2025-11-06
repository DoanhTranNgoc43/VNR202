"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Play } from 'lucide-react'

interface IntroProps {
  onFinish?: () => void
}

export default function NhanhNhuChopIntro({ onFinish }: IntroProps) {
  const [showIntro, setShowIntro] = useState(false)
  const [introStep, setIntroStep] = useState(0)

  useEffect(() => {
    if (showIntro) {
      const timers = [
        setTimeout(() => setIntroStep(1), 500),
        setTimeout(() => setIntroStep(2), 1500),
        setTimeout(() => setIntroStep(3), 2500),
        setTimeout(() => setIntroStep(4), 4000),
        // auto finish after last step (safety)
        setTimeout(() => {
          setShowIntro(false)
          setIntroStep(0)
          onFinish?.()
        }, 6000),
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [showIntro, onFinish])

  const startGame = () => {
    setShowIntro(true)
    setIntroStep(0)
  }

  const skipIntro = () => {
    setShowIntro(false)
    setIntroStep(0)
    onFinish?.()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!showIntro ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Zap className="w-32 h-32 mx-auto text-yellow-400 mb-8 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)]" />
            </motion.div>

            <h1 className="text-7xl font-bold text-white mb-4 drop-shadow-lg">NHANH NHƯ CHỚP</h1>

            <p className="text-2xl text-blue-200 mb-12">Thử thách trí tuệ và tốc độ</p>

            <motion.button
              onClick={startGame}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-6 rounded-full text-3xl font-bold shadow-2xl flex items-center gap-4 mx-auto hover:from-yellow-500 hover:to-orange-600 transition-all"
            >
              <Play className="w-10 h-10" />
              CHƠI NGAY
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="intro"
            className="w-full h-screen flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />

            {introStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 3 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [3, 1, 1, 0.5] }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Zap className="w-96 h-96 text-yellow-300 drop-shadow-[0_0_100px_rgba(250,204,21,1)]" />
              </motion.div>
            )}

            {introStep >= 2 && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="absolute">
                <motion.h1
                  className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"
                  style={{
                    textShadow: '0 0 80px rgba(250,204,21,0.8), 0 0 120px rgba(251,146,60,0.6)',
                    WebkitTextStroke: '3px rgba(255,255,255,0.3)',
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                >
                  NHANH
                </motion.h1>
              </motion.div>
            )}

            {introStep >= 3 && (
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute mt-48">
                <motion.h2
                  className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 to-teal-400"
                  style={{ textShadow: '0 0 60px rgba(56,189,248,0.8)', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
                >
                  NHƯ CHỚP
                </motion.h2>
              </motion.div>
            )}

            {introStep >= 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-20">
                <motion.button
                  onClick={() => {
                    setShowIntro(false)
                    setIntroStep(0)
                    onFinish?.()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-900 px-16 py-6 rounded-full text-3xl font-bold shadow-2xl hover:bg-gray-100 transition-all"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                >
                  BẮT ĐẦU
                </motion.button>
              </motion.div>
            )}

            <motion.button
              onClick={skipIntro}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              className="absolute top-8 right-8 text-white text-xl px-6 py-3 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
            >
              Bỏ qua →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
