"use client"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { X } from "lucide-react"

interface GameInstructionsProps {
  onClose: () => void
}

export default function GameInstructions({ onClose }: GameInstructionsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white dark:bg-slate-900 max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-amber-400 dark:border-amber-600">
        <div className="sticky top-0 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-slate-800 dark:to-slate-700 p-6 flex justify-between items-center border-b-2 border-amber-400 dark:border-amber-600">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100">📖 Hướng Dẫn Chơi</h2>
          <button
            onClick={onClose}
            className="text-amber-900 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-slate-700 p-2 rounded"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Nhanh Như Chớp */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Nhanh Như Chớp</h3>
            </div>
            <div className="bg-green-50 dark:bg-slate-800 border-l-4 border-green-500 p-4 space-y-3">
              <p className="font-semibold text-green-900 dark:text-green-100">Luật Chơi:</p>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>✓ Mỗi đội có 1 đại diện ngồi trên "máy chớp"</li>
                <li>✓ Có 2 phút để trả lời các câu hỏi liên tiếp</li>
                <li>✓ Trả lời đúng → tiến lên 1 bậc trên dốc</li>
                <li>✓ Trả lời sai → quay về bậc 0</li>
                <li>✓ Điểm = số câu trả lời đúng liên tiếp cao nhất</li>
              </ul>
              
            </div>
          </div>

          

          {/* Mẹo Chơi */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">💡 Mẹo Chơi</h3>
            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
              <p>• Đọc kỹ câu hỏi trước khi trả lời</p>
              <p>• Tập trung và không vội vàng</p>
              <p>• Trong các trò chơi nhóm, hãy cổ vũ cho đội của bạn</p>
              <p>• Học hỏi từ các câu hỏi để hiểu rõ hơn về chủ đề</p>
              <p>• Tham gia hết các trò chơi để tích lũy điểm cao nhất</p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-slate-800 dark:to-slate-700 p-6 border-t-2 border-amber-400 dark:border-amber-600">
          <Button onClick={onClose} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3">
            Bắt Đầu Chơi
          </Button>
        </div>
      </Card>
    </div>
  )
}
