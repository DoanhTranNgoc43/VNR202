"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, useAnimation } from "framer-motion"
import { Info, RotateCcw } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Ticker() {
  const pathname = usePathname()
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1) // 1 = right, -1 = left
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
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

  // Đảm bảo component chỉ render trên client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Không hiển thị ticker trên trang game
  if (pathname === "/game") {
    return null
  }

  if (!isVisible || !mounted) {
    return null
  }

  const tickerContent = (
    <div 
      className="ticker-fixed pointer-events-none"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100
      }}
    >
      <div 
        className="relative overflow-hidden whitespace-nowrap py-3 cursor-pointer group pointer-events-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={handleReverse}
      >
        {/* Icon và controls */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center gap-2 px-4 z-10">
          <Info className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse flex-shrink-0 drop-shadow-lg" />
          <RotateCcw className={`w-3 h-3 md:w-4 md:h-4 text-white/70 hover:text-white transition-all flex-shrink-0 drop-shadow-lg ${direction === -1 ? 'rotate-180' : ''}`} />
          {isPaused && (
            <span className="text-white/80 text-[10px] md:text-xs font-semibold ml-1 drop-shadow-lg">
              Paused
            </span>
          )}
        </div>
        
        <motion.div
          className="inline-flex items-center font-semibold text-sm md:text-lg tracking-wide pl-12 md:pl-16 text-white"
          animate={controls}
          initial={{ x: "0%" }}
        >
          <span className="inline-flex items-center gap-4 mr-20">
            <span className="text-white drop-shadow-lg">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-white flex-shrink-0 drop-shadow-lg"></span>
          </span>

          <span className="inline-flex items-center gap-4 mr-20">
            <span className="text-white drop-shadow-lg">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-white flex-shrink-0 drop-shadow-lg"></span>
          </span>
        </motion.div>

      </div>
    </div>
  )

  return createPortal(tickerContent, document.body)
}

