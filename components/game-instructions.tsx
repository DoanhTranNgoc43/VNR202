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
                <li>✓ 10 câu đúng liên tiếp = Giải thưởng đặc biệt 20,000,000 VND (chỉ 1 lần/tập)</li>
              </ul>
              <p className="font-semibold text-green-900 dark:text-green-100 mt-4">Vòng Đặc Biệt:</p>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <li>✓ Đội chiến thắng có 1 phút để liệt kê 20 câu trả lời theo chủ đề</li>
                <li>✓ Các thành viên phải xen kẽ nhau và chạm vào cột</li>
                <li>✓ Không được lặp lại câu trả lời</li>
                <li>✓ Nếu liệt kê được 20+ câu trong 1 phút → Chiến thắng giải thưởng cao nhất</li>
              </ul>
            </div>
          </div>

          {/* Cuộc Thi 4 Đội */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🏆</span>
              <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400">Cuộc Thi 4 Đội</h3>
            </div>
            <div className="bg-amber-50 dark:bg-slate-800 border-l-4 border-amber-500 p-4 space-y-3">
              <p className="font-semibold text-amber-900 dark:text-amber-100">Luật Chơi:</p>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                <li>✓ Chia lớp thành 4 nhóm: Đội Đỏ, Đội Xanh, Đội Vàng, Đội Tím</li>
                <li>✓ Mỗi vòng có 3 câu hỏi với mức điểm tăng dần (100, 150, 200 điểm)</li>
                <li>✓ Các đội trả lời lần lượt</li>
                <li>✓ Trả lời đúng → cộng điểm, sai → không cộng</li>
                <li>✓ Tổng cộng 3 vòng</li>
                <li>✓ Đội có tổng điểm cao nhất chiến thắng</li>
              </ul>
            </div>
          </div>

          {/* Nón Kỳ Diệu */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🎩</span>
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">Nón Kỳ Diệu</h3>
            </div>
            <div className="bg-red-50 dark:bg-slate-800 border-l-4 border-red-500 p-4 space-y-3">
              <p className="font-semibold text-red-900 dark:text-red-100">Luật Chơi:</p>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>✓ Có 10 chiếc nón được sắp xếp trên bàn</li>
                <li>✓ Mỗi nón chứa một câu hỏi bí ẩn</li>
                <li>✓ Chọn một nón để tiết lộ câu hỏi</li>
                <li>✓ Trả lời đúng → cộng điểm, sai → không cộng</li>
                <li>✓ Mỗi nón chỉ được chọn 1 lần</li>
                <li>✓ Người chơi có thể chọn nón cho đến khi hết hoặc muốn dừng</li>
              </ul>
            </div>
          </div>

          {/* Ghép Cặp */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🧩</span>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Ghép Cặp</h3>
            </div>
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 p-4 space-y-3">
              <p className="font-semibold text-blue-900 dark:text-blue-100">Luật Chơi:</p>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>✓ Có 10 cặp thẻ được lật úp</li>
                <li>✓ Mỗi cặp gồm một khái niệm và định nghĩa tương ứng</li>
                <li>✓ Lật 2 thẻ để tìm cặp khớp</li>
                <li>✓ Nếu khớp → cộng điểm và tiếp tục</li>
                <li>✓ Nếu không khớp → lật lại và đợi lượt tiếp theo</li>
                <li>✓ Mục tiêu: Tìm được nhiều cặp nhất trong thời gian cho phép</li>
              </ul>
            </div>
          </div>

          {/* Thử Thách Nhanh */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Thử Thách Nhanh</h3>
            </div>
            <div className="bg-purple-50 dark:bg-slate-800 border-l-4 border-purple-500 p-4 space-y-3">
              <p className="font-semibold text-purple-900 dark:text-purple-100">Luật Chơi:</p>
              <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <li>✓ Có 10 câu hỏi trắc nghiệm</li>
                <li>✓ Mỗi câu có 15 giây để trả lời</li>
                <li>✓ Trả lời đúng → cộng điểm, sai → không cộng</li>
                <li>✓ Trả lời nhanh → cộng thêm điểm thưởng</li>
                <li>✓ Mục tiêu: Đạt điểm cao nhất</li>
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
