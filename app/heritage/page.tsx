"use client"

import { useState, useMemo, useEffect } from "react"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import SiteHeader from "../../components/site-header"
import { Search, Award, X } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../../components/ui/pagination"
import { HERITAGE_ITEMS } from "./data"

const ITEMS_PER_PAGE = 20

export default function HeritagePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredHeritage = useMemo(() => {
    return HERITAGE_ITEMS.filter((heritage) => {
      const matchesSearch = heritage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        heritage.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        heritage.location.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === "all" || heritage.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Reset về trang 1 khi search hoặc filter thay đổi
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredHeritage.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedHeritage = filteredHeritage.slice(startIndex, endIndex)

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

  // Danh sách các category chính
  const mainCategories = [
    "Di sản Thế giới",
    "Di sản Văn hóa Phi vật thể",
    "Di sản Văn hóa Tư liệu",
    "Khu Dự trữ Sinh quyển Thế giới",
    "Công viên Địa chất Toàn cầu UNESCO",
    "Khu Ramsar"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a39805f374379f7857a0f99accf283d00f33843a42a2f8092de8320de2a1462b33557d72b5f1feaa821cf56fc1792750bc6cc16c8877b7786236b6ada0347396aec6e4ffbf2a89e0e2b57e8a4dadf8d58b48c195c5fe6d520984eb09ce86f9b1c1fbb/z6694153730445-6d1c355c6824382452e78ed187cf7750-5813-5729.jpg" 
            alt="Di sản Việt Nam" 
            className="w-full h-[50vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[50vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
                <h1 className="text-4xl md:text-6xl font-serif font-bold">Di Sản Việt Nam</h1>
              </div>
              <h2 className="text-xl md:text-2xl text-white/90">Di sản vật thể & phi vật thể UNESCO</h2>
              <p className="max-w-2xl text-white/85">
                Khám phá các di sản văn hóa và thiên nhiên thế giới của Việt Nam được UNESCO công nhận, từ các công trình kiến trúc cổ đến các loại hình nghệ thuật dân gian độc đáo.
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
              placeholder="Tìm kiếm di sản, mô tả hoặc địa điểm..."
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

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={
                selectedCategory === "all"
                  ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                  : "bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
              }
            >
              Tất cả
            </Button>
            {mainCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                    : "bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-white/70 text-sm">
          Hiển thị {filteredHeritage.length} / {HERITAGE_ITEMS.length} di sản
          {filteredHeritage.length > ITEMS_PER_PAGE && (
            <span className="ml-2">
              (Trang {currentPage} / {totalPages})
            </span>
          )}
        </div>
      </section>

      {/* Heritage Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {filteredHeritage.length === 0 ? (
          <div className="text-center py-16">
            <Award className="w-16 h-16 mx-auto text-white/30 mb-4" />
            <p className="text-white/70 text-lg">Không tìm thấy di sản nào</p>
            <p className="text-white/50 text-sm mt-2">Thử tìm kiếm với từ khoá khác hoặc chọn loại di sản khác</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedHeritage.map((heritage) => (
                <Card
                  key={heritage.name}
                  className="group bg-black/30 border border-amber-800/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={heritage.image}
                      alt={heritage.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "https://via.placeholder.com/400x300/1a1009/ffffff?text=" + encodeURIComponent(heritage.name)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2 py-1 text-xs font-semibold bg-amber-600/90 text-white rounded">
                        {heritage.type}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded">
                        {heritage.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg line-clamp-2">
                        {heritage.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Location and Year */}
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="flex items-center gap-1">
                        📍 {heritage.location}
                      </span>
                      <span className="flex items-center gap-1">
                        📅 {heritage.year}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <p className="text-sm text-white/85 leading-relaxed line-clamp-4">
                        {heritage.description}
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

