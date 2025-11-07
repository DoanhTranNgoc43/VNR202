"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"
import { Info, RotateCcw } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Ticker() {
  const pathname = usePathname()
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1) // 1 = right, -1 = left
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const text = "Trang web được xây dựng nhằm mục đích học tập và tìm hiểu về văn hoá Việt Nam - góp phần lan toả những giá trị tốt đẹp của dân tộc. Trang web hoạt động phi lợi nhuận, không phục vụ mục đích thương mại hay chống phá bất kỳ cá nhân, tổ chức nào."

  const startAnimation = useCallback(() => {
    if (isPaused || !isVisible) return
    
    const endX = direction === 1 ? "-33.333%" : "0%"
    
    controls.start({
      x: endX,
      transition: {
        duration: 40,
        ease: "linear",
        onComplete: () => {
          // Khi animation hoàn thành, ẩn ticker và đợi 15 giây
          setIsVisible(false)
          timeoutRef.current = setTimeout(() => {
            // Sau 15 giây, hiển thị lại và reset về vị trí ban đầu
            setIsVisible(true)
            controls.set({ x: direction === 1 ? "0%" : "-33.333%" })
            // Chạy lại
            setTimeout(() => startAnimation(), 100)
          }, 15000) // 15 giây
        },
      },
    })
  }, [isPaused, direction, controls, isVisible])

  const handleReverse = () => {
    setDirection((prev) => (prev === 1 ? -1 : 1))
    // Reset và chạy lại ngay khi đảo chiều
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsVisible(true)
    controls.set({ x: direction === 1 ? "0%" : "-33.333%" })
    setTimeout(() => startAnimation(), 100)
  }

  useEffect(() => {
    if (isPaused) {
      controls.stop()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    } else if (isVisible) {
      startAnimation()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [isPaused, direction, isVisible, startAnimation, controls])

  // Khởi động animation lần đầu
  useEffect(() => {
    if (isVisible) {
      startAnimation()
    }
  }, [startAnimation, isVisible])

  // Không hiển thị ticker trên trang game
  if (pathname === "/game") {
    return null
  }

  if (!isVisible) {
    return null
  }

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="relative overflow-hidden whitespace-nowrap py-3 cursor-pointer group pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={handleReverse}
      >
        {/* Icon và controls */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center gap-2 px-4 z-10">
          <Info className="w-4 h-4 md:w-5 md:h-5 text-red-600 dark:text-red-500 animate-pulse flex-shrink-0 drop-shadow-lg" />
          <RotateCcw className={`w-3 h-3 md:w-4 md:h-4 text-red-500/70 dark:text-red-400/70 hover:text-red-600 dark:hover:text-red-500 transition-all flex-shrink-0 drop-shadow-lg ${direction === -1 ? 'rotate-180' : ''}`} />
          {isPaused && (
            <span className="text-red-600/80 dark:text-red-400/80 text-[10px] md:text-xs font-medium ml-1 drop-shadow-lg">
              Paused
            </span>
          )}
        </div>
        
        <motion.div
  className="inline-flex items-center font-semibold text-sm md:text-lg tracking-wide pl-12 md:pl-16"
  animate={controls}
  initial={{ x: "0%" }}
>
  <span className="inline-flex items-center gap-4 mr-20">
    <span className="relative">
      <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
        {text}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 opacity-20 blur-sm">
        {text}
      </span>
    </span>
    <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]"></span>
  </span>

  <span className="inline-flex items-center gap-4 mr-20">
    <span className="relative">
      <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
        {text}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 opacity-20 blur-sm">
        {text}
      </span>
    </span>
    <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]"></span>
  </span>
</motion.div>

      </div>
    </motion.div>
  )
}

