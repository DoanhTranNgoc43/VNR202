"use client"

import { motion } from "framer-motion"
import { Card } from "../components/ui/card"

export interface Page {
  id: string
  title: string
  subtitle?: string
  content?: string
  type: "cover" | "text"
  image?: string
  highlight?: string
}

interface BookViewerProps {
  pages: Page[]
  currentPage: number
  onPageChange: (page: number) => void
}

export default function BookViewer({ pages, currentPage, onPageChange }: BookViewerProps) {
  const page = pages[currentPage]

  return (
    <div className="flex justify-center items-center min-h-[600px] mb-8">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, rotateY: -20 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-gradient-to-br from-amber-100 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-4 border-amber-900 dark:border-amber-700 shadow-2xl p-8 md:p-12 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-900 dark:border-amber-600 opacity-50" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-900 dark:border-amber-600 opacity-50" />

          {page.type === "cover" ? (
            <div className="text-center space-y-6">
              {page.image && (
                <img
                  src={page.image || "/placeholder.svg"}
                  alt={page.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-4 font-serif">
                  {page.title}
                </h1>
                <p className="text-xl md:text-2xl text-amber-800 dark:text-amber-200 font-serif italic">
                  {page.subtitle}
                </p>
              </div>
              <div className="pt-8 text-amber-700 dark:text-amber-300 text-sm">
                Một bài thuyết trình sáng tạo về hội nhập kinh tế quốc tế
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-2 font-serif">
                  {page.title}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-900 to-orange-600 dark:from-amber-600 dark:to-orange-400" />
              </div>

              <p className="text-base md:text-lg text-amber-900 dark:text-amber-50 leading-relaxed whitespace-pre-wrap font-serif">
                {page.content}
              </p>

              {page.highlight && (
                <div className="bg-orange-200 dark:bg-orange-900 border-l-4 border-orange-600 dark:border-orange-400 p-4 rounded">
                  <p className="text-amber-900 dark:text-orange-100 font-semibold italic">💡 {page.highlight}</p>
                </div>
              )}
            </div>
          )}

          {/* Page number */}
          <div className="text-center mt-8 text-amber-700 dark:text-amber-400 text-sm font-serif">
            Trang {currentPage + 1} / {pages.length}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
