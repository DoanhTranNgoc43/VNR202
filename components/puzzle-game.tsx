"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { RotateCcw, CheckCircle2, Trophy, Info, Sparkles } from "lucide-react"

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
}

// Component để render puzzle piece bằng canvas
function PuzzlePieceCanvas({
  imageUrl,
  correctPosition,
  gridSize,
}: {
  imageUrl: string
  correctPosition: number
  gridSize: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawPlaceholder = () => {
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "#fee2e2")
      gradient.addColorStop(1, "#f97316")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = "rgba(0,0,0,0.6)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.font = `${Math.max(Math.floor(width / 12), 12)}px sans-serif`
      ctx.fillText("Ảnh đang tải...", width / 2, height / 2)
    }

    // Set canvas size based on container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()
    drawPlaceholder()

    const img = new Image()
    img.crossOrigin = "anonymous"
    
    img.onload = () => {
      updateCanvasSize()
      
      const col = correctPosition % gridSize
      const row = Math.floor(correctPosition / gridSize)
      
      // Kích thước của mỗi mảnh trong ảnh gốc
      const pieceWidth = img.width / gridSize
      const pieceHeight = img.height / gridSize
      
      // Vị trí source trong ảnh gốc
      const sourceX = col * pieceWidth
      const sourceY = row * pieceHeight
      
      // Kích thước canvas
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      
      // Vẽ mảnh tranh lên canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.drawImage(
        img,
        sourceX, sourceY, pieceWidth, pieceHeight, // Source rectangle
        0, 0, canvasWidth, canvasHeight // Destination rectangle
      )
    }
    
    img.onerror = () => {
      console.error("Failed to load image:", imageUrl)
      drawPlaceholder()
    }
    
    img.src = imageUrl

    // Resize observer để update canvas khi container size thay đổi
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
      if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
        const col = correctPosition % gridSize
        const row = Math.floor(correctPosition / gridSize)
        const pieceWidth = img.width / gridSize
        const pieceHeight = img.height / gridSize
        const sourceX = col * pieceWidth
        const sourceY = row * pieceHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(
          img,
          sourceX, sourceY, pieceWidth, pieceHeight,
          0, 0, canvas.width, canvas.height
        )
      } else {
        drawPlaceholder()
      }
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [imageUrl, correctPosition, gridSize])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: "auto" }}
      />
    </div>
  )
}

interface PuzzlePiece {
  id: number
  correctPosition: number
  currentPosition: number | null
  image: string
}

interface PuzzleImage {
  id: string
  title: string
  image: string
  description: string
  culturalInfo: string
}

const PUZZLE_IMAGES: PuzzleImage[] = [
  {
    id: "chua-mot-cot",
    title: "Chùa Một Cột",
    image: "https://images.pexels.com/photos/17177476/pexels-photo-17177476.jpeg?cs=srgb&dl=pexels-dqnguyen15-17177476.jpg&fm=jpg",
    description: "Biểu tượng văn hoá tâm linh của Hà Nội",
    culturalInfo: "Chùa Một Cột (hay Chùa Diên Hựu) được xây dựng vào năm 1049 dưới thời vua Lý Thái Tông. Kiến trúc độc đáo với một cột đá duy nhất nâng đỡ toàn bộ ngôi chùa, tượng trưng cho sự thanh tịnh và tinh thần Phật giáo Việt Nam. Đây là một trong những biểu tượng văn hoá nổi tiếng nhất của thủ đô Hà Nội."
  },
  {
    id: "ao-dai",
    title: "Áo Dài Việt Nam",
    image: "https://images2.thanhnien.vn/528068263637045248/2025/7/26/aodai1-1753535915713343848658.jpg",
    description: "Trang phục truyền thống của phụ nữ Việt Nam",
    culturalInfo: "Áo dài là trang phục truyền thống của phụ nữ Việt Nam, được coi là biểu tượng của vẻ đẹp và sự duyên dáng. Áo dài hiện đại được phát triển từ áo ngũ thân vào những năm 1930, kết hợp giữa truyền thống và hiện đại. Ngày nay, áo dài không chỉ là trang phục trong các dịp lễ tết mà còn được sử dụng trong nhiều sự kiện văn hoá quốc tế."
  },
  {
    id: "dinh-lang",
    title: "Đình Làng Việt Nam",
    image: "https://media.baothaibinh.com.vn/upload/news/3_2017/53057_.jpg",
    description: "Không gian văn hoá cộng đồng truyền thống",
    culturalInfo: "Đình làng là trung tâm văn hoá, tín ngưỡng và sinh hoạt cộng đồng của làng quê Việt Nam. Đình không chỉ là nơi thờ thành hoàng làng mà còn là nơi hội họp, quyết định các việc quan trọng của làng. Kiến trúc đình làng thể hiện tinh hoa nghệ thuật điêu khắc gỗ Việt Nam với các hoạ tiết rồng, phượng, hoa lá cách điệu."
  },
  {
    id: "trong-dong",
    title: "Trống Đồng Đông Sơn",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/9/2/752431/1.jpg",
    description: "Di sản văn hoá thời đại đồ đồng",
    culturalInfo: "Trống đồng Đông Sơn là biểu tượng của nền văn minh Đông Sơn (khoảng 700 TCN - 100 SCN), một trong những nền văn hoá rực rỡ nhất của Việt Nam cổ đại. Trống đồng không chỉ là nhạc cụ mà còn là vật thiêng liêng trong các nghi lễ tôn giáo, biểu tượng quyền lực và sự thịnh vượng. Các hoạ tiết trên trống đồng phản ánh đời sống văn hoá, tín ngưỡng của người Việt cổ."
  },
  {
    id: "pho-co-hoi-an",
    title: "Phố Cổ Hội An",
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg",
    description: "Di sản văn hoá thế giới UNESCO",
    culturalInfo: "Phố cổ Hội An là một trong những đô thị cổ được bảo tồn tốt nhất ở Đông Nam Á. Với lịch sử hơn 400 năm, Hội An từng là thương cảng quốc tế sầm uất, nơi giao thoa văn hoá Việt - Nhật - Trung - Pháp. Kiến trúc độc đáo với những ngôi nhà gỗ cổ, đèn lồng đầy màu sắc, và văn hoá ẩm thực phong phú đã khiến Hội An trở thành điểm đến du lịch văn hoá nổi tiếng."
  },
  {
    id: "quan-ho",
    title: "Quan Họ Bắc Ninh",
    image: "https://i.ytimg.com/vi/qPndpkzE1ws/maxresdefault.jpg",
    description: "Di sản văn hoá phi vật thể của nhân loại",
    culturalInfo: "Dân ca Quan họ Bắc Ninh là một trong những di sản văn hoá phi vật thể đại diện của nhân loại được UNESCO công nhận. Quan họ là loại hình dân ca độc đáo với lối hát đối đáp giữa các liền anh, liền chị, thể hiện tình cảm, tâm hồn và trí tuệ của người dân vùng Kinh Bắc. Nghệ thuật Quan họ không chỉ là âm nhạc mà còn là văn hoá ứng xử, giao tiếp đầy tinh tế."
  }
]

export default function PuzzleGame() {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([])
  const [slots, setSlots] = useState<(number | null)[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const [gridSize, setGridSize] = useState(3) // 3x3 hoặc 4x4
  const [currentPuzzle, setCurrentPuzzle] = useState<PuzzleImage>(PUZZLE_IMAGES[0])
  const [showImageSelect, setShowImageSelect] = useState(false)
  const draggedPieceRef = useRef<number | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  const ensureAudioContext = async () => {
    if (typeof window === "undefined") return null
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) {
        return null
      }
      audioCtxRef.current = new AudioCtx()
    }
    if (audioCtxRef.current.state === "suspended") {
      try {
        await audioCtxRef.current.resume()
      } catch (error) {
        console.warn("Unable to resume audio context", error)
      }
    }
    return audioCtxRef.current
  }

  const playFeedback = async (type: "correct" | "incorrect") => {
    const ctx = await ensureAudioContext()
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.type = "sine"
    const now = ctx.currentTime
    const frequency = type === "correct" ? 1047 : 220
    oscillator.frequency.setValueAtTime(frequency, now)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(type === "correct" ? 0.25 : 0.18, now + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32)

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.start(now)
    oscillator.stop(now + 0.35)
  }

  // Khởi tạo puzzle khi thay đổi gridSize hoặc currentPuzzle
  useEffect(() => {
    initializePuzzle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridSize, currentPuzzle.id])

  // Timer
  useEffect(() => {
    if (isComplete || pieces.length === 0) return
    const timer = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [isComplete, pieces.length])

  // Kiểm tra hoàn thành
  useEffect(() => {
    if (slots.length > 0 && slots.every((slot, index) => slot === index)) {
      setIsComplete(true)
    }
  }, [slots])

  const initializePuzzle = () => {
    const totalPieces = gridSize * gridSize
    const piecePositions = Array.from({ length: totalPieces }, (_, i) => i)
    
    // Shuffle positions
    for (let i = piecePositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[piecePositions[i], piecePositions[j]] = [piecePositions[j], piecePositions[i]]
    }

    const newPieces: PuzzlePiece[] = Array.from({ length: totalPieces }, (_, i) => ({
      id: i,
      correctPosition: i,
      currentPosition: piecePositions[i],
      image: currentPuzzle.image,
    }))

    const newSlots: (number | null)[] = Array(totalPieces).fill(null)
    newPieces.forEach((piece) => {
      if (piece.currentPosition !== null && piece.currentPosition >= 0 && piece.currentPosition < totalPieces) {
        newSlots[piece.currentPosition] = piece.id
      } else {
        console.error("Invalid currentPosition:", piece)
      }
    })

    // Đảm bảo tất cả slots đều có piece
    const emptySlots = newSlots.filter(slot => slot === null).length
    if (emptySlots > 0) {
      console.error(`Warning: ${emptySlots} empty slots found!`, {
        totalPieces,
        slots: newSlots,
        pieces: newPieces.map(p => ({ id: p.id, currentPos: p.currentPosition }))
      })
    }

    setPieces(newPieces)
    setSlots(newSlots)
    setIsComplete(false)
    setMoves(0)
    setTime(0)
  }

  const handlePuzzleChange = (puzzle: PuzzleImage) => {
    setCurrentPuzzle(puzzle)
    setShowImageSelect(false)
  }

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showImageSelect && !target.closest('.puzzle-selector')) {
        setShowImageSelect(false)
      }
    }
    if (showImageSelect) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showImageSelect])

  const handleDragStart = (pieceId: number) => {
    draggedPieceRef.current = pieceId
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (slotIndex: number) => {
    const draggedPieceId = draggedPieceRef.current
    if (draggedPieceId === null) return

    const currentSlotIndex = slots.findIndex((slot) => slot === draggedPieceId)
    if (currentSlotIndex === slotIndex) return

    // Swap pieces
    const newSlots = [...slots]
    const temp = newSlots[slotIndex]
    newSlots[slotIndex] = draggedPieceId
    newSlots[currentSlotIndex] = temp

    setSlots(newSlots)
    setMoves((prev) => prev + 1)
    const placedCorrect = newSlots[slotIndex] === slotIndex
    void playFeedback(placedCorrect ? "correct" : "incorrect")
    draggedPieceRef.current = null
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getBackgroundPosition = (position: number, gridSize: number) => {
    const col = position % gridSize
    const row = Math.floor(position / gridSize)
    // Với backgroundSize = gridSize * 100%, mỗi bước di chuyển = 100 / gridSize
    // Ví dụ với 3x3: step = 33.33%, để hiển thị mảnh ở cột 1, ta cần di chuyển -33.33%
    const step = 100 / gridSize
    const x = -col * step
    const y = -row * step
    return { x, y }
  }

  // Tạo map để tìm piece nhanh hơn
  const pieceMap = useMemo(() => {
    return new Map(pieces.map(p => [p.id, p]))
  }, [pieces])

  const pieceSizePx = gridSize >= 8 ? 70 : gridSize >= 6 ? 85 : 120
  const puzzleMaxWidth = pieceSizePx * gridSize
  const puzzleGapClass = gridSize >= 6 ? "gap-1" : "gap-2"

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border-2 border-red-500/30 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span>🧩</span>
            <span className="bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 bg-clip-text text-transparent">
              Ghép Tranh Văn Hoá Việt Nam
            </span>
          </h1>
     
          {/* Puzzle Selection & Difficulty */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="relative puzzle-selector">
              <Button
                onClick={() => setShowImageSelect(!showImageSelect)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Chọn tranh: {currentPuzzle.title}
              </Button>
              {showImageSelect && (
                <Card className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-2 border-red-500/30 p-4 w-[280px] md:w-[300px] max-h-96 overflow-y-auto puzzle-selector shadow-xl">
                  <div className="space-y-2">
                    {PUZZLE_IMAGES.map((puzzle) => (
                      <button
                        key={puzzle.id}
                        onClick={() => handlePuzzleChange(puzzle)}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                          currentPuzzle.id === puzzle.id
                            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-red-300"
                        }`}
                      >
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{puzzle.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{puzzle.description}</div>
                      </button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 border border-white/20">
              <span className="text-white/70 text-sm">Độ khó:</span>
              <Button
                onClick={() => setGridSize(3)}
                variant={gridSize === 3 ? "default" : "ghost"}
                size="sm"
                className={gridSize === 3 ? "bg-red-600 text-white" : "text-white/70"}
              >
                3x3
              </Button>
              <Button
                onClick={() => setGridSize(4)}
                variant={gridSize === 4 ? "default" : "ghost"}
                size="sm"
                className={gridSize === 4 ? "bg-red-600 text-white" : "text-white/70"}
              >
                4x4
              </Button>
              <Button
                onClick={() => setGridSize(8)}
                variant={gridSize === 8 ? "default" : "ghost"}
                size="sm"
                className={gridSize === 8 ? "bg-red-600 text-white" : "text-white/70"}
              >
                8x8
              </Button>
            </div>
          </div>

          {/* Current Puzzle Info */}
          <div className="mb-6">
            <Card className="bg-white/5 border-white/10 p-4 inline-block">
              <div className="flex items-center gap-2 text-white/90">
                <Info className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{currentPuzzle.title}</span>
                <span className="text-white/70">-</span>
                <span className="text-white/70 text-sm">{currentPuzzle.description}</span>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/20">
              <div className="text-white/70 text-sm">Thời gian</div>
              <div className="text-yellow-400 font-bold text-xl">{formatTime(time)}</div>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/20">
              <div className="text-white/70 text-sm">Số lần di chuyển</div>
              <div className="text-yellow-400 font-bold text-xl">{moves}</div>
            </div>
            <Button
              onClick={initializePuzzle}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Chơi lại
            </Button>
          </div>
        </div>

        {/* Puzzle Grid */}
        <div className="mb-8">
          {pieces.length === 0 || slots.length === 0 ? (
            <div className="text-center text-white/70 py-8">
              Đang tải puzzle...
            </div>
          ) : (
            <div
              className={`grid mx-auto ${puzzleGapClass}`}
              style={{
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                width: "100%",
                maxWidth: `${puzzleMaxWidth}px`,
              }}
            >
              {Array.from({ length: gridSize * gridSize }, (_, index) => {
                  const pieceId = slots[index]
                  const piece = pieceId !== null ? pieceMap.get(pieceId) : null
                  const isCorrect = pieceId !== null && pieceId === index

              return (
                <div
                  key={`slot-${index}`}
                  className={`aspect-square border-2 rounded-lg overflow-hidden transition-all ${
                    piece
                      ? "cursor-move hover:scale-105 hover:shadow-lg"
                      : "bg-white/5 border-dashed border-white/20"
                  } ${
                    isCorrect && piece
                      ? "border-green-400 ring-2 ring-green-400/50"
                      : "border-white/30"
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                  draggable={!!piece}
                  onDragStart={() => piece && handleDragStart(piece.id)}
                >
                  {piece ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <PuzzlePieceCanvas
                        key={`piece-canvas-${piece.id}-${piece.correctPosition}`}
                        imageUrl={piece.image}
                        correctPosition={piece.correctPosition}
                        gridSize={gridSize}
                      />
                      {isCorrect && (
                        <div className="absolute inset-0 bg-green-400/20 flex items-center justify-center z-10 pointer-events-none">
                          <CheckCircle2 className="w-8 h-8 text-green-400" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-white/5 border-dashed border-white/20 flex items-center justify-center">
                      <span className="text-white/30 text-xs">Trống</span>
                    </div>
                  )}
                </div>
              )
            })}
            </div>
          )}
        </div>

        {/* Completion Modal */}
        {isComplete && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="bg-gradient-to-br from-yellow-400 via-red-600 to-yellow-400 p-8 max-w-2xl w-full">
              <div className="bg-white rounded-lg p-6 space-y-6">
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Chúc mừng!</h2>
                  <p className="text-gray-600">Bạn đã hoàn thành bức tranh</p>
                  <h3 className="text-2xl font-bold text-red-600 mt-2">{currentPuzzle.title}</h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Thời gian</div>
                    <div className="text-2xl font-bold text-red-600">{formatTime(time)}</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Số lần di chuyển</div>
                    <div className="text-2xl font-bold text-red-600">{moves}</div>
                  </div>
                </div>

                {/* Cultural Information */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Thông tin văn hoá
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {currentPuzzle.culturalInfo}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={initializePuzzle}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Chơi lại
                  </Button>
                  <Button
                    onClick={() => {
                      const nextIndex = (PUZZLE_IMAGES.findIndex(p => p.id === currentPuzzle.id) + 1) % PUZZLE_IMAGES.length
                      handlePuzzleChange(PUZZLE_IMAGES[nextIndex])
                    }}
                    variant="outline"
                    className="flex-1 border-red-600 text-red-600 hover:bg-red-50"
                  >
                    Tranh tiếp theo
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 text-center">
          <Card className="bg-white/5 border-white/10 p-4">
            <p className="text-white/70 text-sm">
              💡 <strong>Hướng dẫn:</strong> Kéo các mảnh tranh vào đúng vị trí để hoàn thành bức tranh
            </p>
          </Card>
        </div>
      </Card>
    </div>
  )
}

