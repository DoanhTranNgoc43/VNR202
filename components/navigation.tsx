"use client"

import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight, Gamepad2 } from "lucide-react"

interface NavigationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onStartGame: () => void
}

export default function Navigation({ currentPage, totalPages, onPageChange, onStartGame }: NavigationProps) {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          variant="outline"
          size="lg"
          className="gap-2 bg-transparent"
        >
          <ChevronLeft className="w-5 h-5" />
          Trang Trước
        </Button>

        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-amber-700">
          <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
            {currentPage + 1} / {totalPages}
          </span>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          variant="outline"
          size="lg"
          className="gap-2 bg-transparent"
        >
          Trang Sau
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {currentPage === totalPages - 1 && (
        <Button
          onClick={onStartGame}
          size="lg"
          className="gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
        >
          <Gamepad2 className="w-5 h-5" />
          Chơi Trò Chơi: Quay Nón Hội Nhập
        </Button>
      )}
    </div>
  )
}
