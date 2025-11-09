"use client"

import { useState, useMemo, useEffect } from "react"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import SiteHeader from "../../components/site-header"
import { Search, Users, X } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../../components/ui/pagination"
import { ETHNIC_COSTUMES } from "./data"

interface EthnicCostume {
  name: string
  description: string
  image: string
}

const ITEMS_PER_PAGE = 20

export default function CostumePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredCostumes = useMemo(() => {
    return ETHNIC_COSTUMES.filter((costume) => {
      const matchesSearch = costume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        costume.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesSearch
    })
  }, [searchQuery])

  // Reset về trang 1 khi search thay đổi
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredCostumes.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedCostumes = filteredCostumes.slice(startIndex, endIndex)

  // Scroll to top khi chuyển trang
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Tạo mảng số trang để hiển thị
  const getPageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      // Nếu tổng số trang <= 7, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Luôn hiển thị trang đầu
      pages.push(1)

      if (currentPage <= 3) {
        // Gần đầu: 1, 2, 3, 4, 5, ..., last
        for (let i = 2; i <= 5; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Gần cuối: 1, ..., n-4, n-3, n-2, n-1, n
        pages.push('ellipsis')
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Ở giữa: 1, ..., current-1, current, current+1, ..., last
        pages.push('ellipsis')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('ellipsis')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://bvhttdl.mediacdn.vn/291773308735864832/2022/11/18/la-hu-16687504593971950567539-1668757766339-1668757766418130402471.jpg" 
            alt="Trang phục Việt Nam" 
            className="w-full h-[50vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[50vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
                <h1 className="text-4xl md:text-6xl font-serif font-bold">Trang Phục Việt Nam</h1>
              </div>
              <h2 className="text-xl md:text-2xl text-white/90">Áo dài, thổ cẩm, sắc phục dân tộc</h2>
              <p className="max-w-2xl text-white/85">
                Khám phá trang phục truyền thống của 54 dân tộc Việt Nam, mỗi bộ trang phục là một biểu tượng văn hoá độc đáo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8 sticky top-0 z-40 bg-gradient-to-b from-[#1a1009] to-transparent backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <Input
              type="text"
              placeholder="Tìm kiếm dân tộc hoặc mô tả trang phục..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-black/30 border-amber-800/40 text-white placeholder:text-white/50 focus:border-amber-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-white/70 text-sm">
          Hiển thị {filteredCostumes.length} / {ETHNIC_COSTUMES.length} dân tộc
          {filteredCostumes.length > ITEMS_PER_PAGE && (
            <span className="ml-2">
              (Trang {currentPage} / {totalPages})
            </span>
          )}
        </div>
      </section>

      {/* Costumes Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {filteredCostumes.length === 0 ? (
          <div className="text-center py-16">
            <Users className="w-16 h-16 mx-auto text-white/30 mb-4" />
            <p className="text-white/70 text-lg">Không tìm thấy dân tộc nào</p>
            <p className="text-white/50 text-sm mt-2">Thử tìm kiếm với từ khoá khác</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedCostumes.map((costume, index) => (
                <Card
                  key={costume.name}
                  className="group bg-black/30 border border-amber-800/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={costume.image}
                      alt={costume.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "https://via.placeholder.com/400x300/1a1009/ffffff?text=" + encodeURIComponent(costume.name)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {costume.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Description */}
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                        Trang phục truyền thống
                      </p>
                      <p className="text-sm text-white/85 leading-relaxed line-clamp-4">
                        {costume.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : "cursor-pointer bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
                        }
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, index) => (
                      <PaginationItem key={index}>
                        {page === 'ellipsis' ? (
                          <PaginationEllipsis className="text-white/50" />
                        ) : (
                          <PaginationLink
                            onClick={() => handlePageChange(page as number)}
                            isActive={currentPage === page}
                            className={
                              currentPage === page
                                ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600 cursor-pointer"
                                : "bg-black/30 border-amber-800/40 text-white hover:bg-black/50 cursor-pointer"
                            }
                          >
                            {page}
                          </PaginationLink>
                        )}
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : "cursor-pointer bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </section>

      {/* Back Button */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pb-16">
        <a href="/culture">
          <Button 
            variant="outline" 
            className="bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
          >
            ← Quay lại trang Văn Hoá
          </Button>
        </a>
      </section>
    </main>
  )
}
