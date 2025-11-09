"use client"

import { useState, useMemo, useEffect } from "react"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import SiteHeader from "../../components/site-header"
import { Search, MapPin, ChefHat, X } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../../components/ui/pagination"

interface Dish {
  name: string
  ingredients: string
  origin: string
  image: string
}

const DISHES: Dish[] = [
  {
    name: "Phở bò",
    ingredients: "Bánh phở, thịt bò, xương bò, hành, gừng, quế, hồi",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://bizweb.dktcdn.net/100/477/987/products/pho-bo-ha-noi-jpeg.jpg?v=1712628941747"
  },
  {
    name: "Bún chả",
    ingredients: "Bún, thịt nướng, nước mắm pha, rau sống",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://i-giadinh.vnecdn.net/2023/04/16/Buoc-11-Thanh-pham-11-7068-1681636164.jpg"
  },
  {
    name: "Bánh cuốn",
    ingredients: "Bột gạo, thịt băm, mộc nhĩ, hành khô",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://cdn.tgdd.vn/2021/04/content/banhcuon-800x450.jpg"
  },
  {
    name: "Bún riêu cua",
    ingredients: "Bún, cua đồng, cà chua, đậu phụ, rau sống",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://cdn.tgdd.vn/Files/2020/03/31/1245702/cach-lam-cha-ca-la-vong-cha-ca-lang-thom-ngon-c-760x367.jpg"
  },
  {
    name: "Bánh xèo",
    ingredients: "Bột gạo, tôm, thịt heo, giá đỗ, hành, nước mắm chua ngọt",
    origin: "Miền Trung & Nam Bộ",
    image: "https://daylambanh.edu.vn/wp-content/uploads/2019/03/banh-xeo-bang-bot-pha-san-600x400.jpg"
  },
  {
    name: "Bánh mì Việt Nam",
    ingredients: "Bánh mì, pate, thịt nguội, chả lụa, rau, nước sốt",
    origin: "TP. Hồ Chí Minh (Nam Bộ)",
    image: "https://thanhnien.mediacdn.vn/Uploaded/trantam/2022_11_17/anh-chup-man-hinh-2022-10-07-luc-172838-4541-9511.png"
  },
  {
    name: "Bún bò Huế",
    ingredients: "Bún, thịt bò, chả cua, mắm ruốc, rau thơm",
    origin: "Huế (Trung Bộ)",
    image: "https://www.hungryhuy.com/wp-content/uploads/bun-bo-hue-bowl.jpg"
  },
  {
    name: "Cơm lam",
    ingredients: "Gạo nếp, nước dừa, đậu xanh",
    origin: "Tây Bắc – Tây Nguyên",
    image: "https://cdnphoto.dantri.com.vn/lNbIsfnQ6O8WhQCwd6k2f3nAkCo=/thumb_w/1155/2021/12/18/comlamtaynguyen7-1639845775533.jpg"
  },
  {
    name: "Bánh chưng",
    ingredients: "Gạo nếp, đậu xanh, thịt ba chỉ, lá dong",
    origin: "Miền Bắc",
    image: "https://cdn.xanhsm.com/2025/01/62eda6b7-banh-chung-1.jpg"
  },
  {
    name: "Nem nướng Nha Trang",
    ingredients: "Thịt heo, mỡ heo, tỏi, đường, nước mắm",
    origin: "Nha Trang (Trung Bộ)",
    image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_4_5_638479384067296638_nem-nu-o-ng-nha-trang-0.jpg"
  },
  {
    name: "Cao lầu Hội An",
    ingredients: "Mì cao lầu, thịt heo, tôm, rau sống, nước dùng",
    origin: "Hội An (Trung Bộ)",
    image: "https://imagevietnam.vnanet.vn/Upload/2021/1/20/20012021154321187-5_resize.JPG"
  },
  {
    name: "Bánh canh",
    ingredients: "Bánh canh, tôm, thịt, nước dùng, hành lá",
    origin: "Miền Trung & Nam Bộ",
    image: "https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-63.jpg"
  },
  {
    name: "Hủ tiếu",
    ingredients: "Hủ tiếu, thịt heo, tôm, trứng cút, nước dùng",
    origin: "Nam Bộ",
    image: "https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg"
  },
  {
    name: "Bánh tét",
    ingredients: "Gạo nếp, đậu xanh, thịt ba chỉ, lá chuối",
    origin: "Nam Bộ",
    image: "https://cdn.tgdd.vn/2021/01/CookRecipe/Avatar/ga-nau-bia-thumbnail-2.jpg"
  },
  {
    name: "Chả cá Lã Vọng",
    ingredients: "Cá lăng, nghệ, thì là, hành tây, bún, mắm tôm",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://cdn.tgdd.vn/Files/2020/03/31/1245702/cach-lam-cha-ca-la-vong-cha-ca-lang-thom-ngon-c-760x367.jpg"
  },
  {
    name: "Bún đậu mắm tôm",
    ingredients: "Bún, đậu phụ, chả cốm, mắm tôm, rau sống",
    origin: "Hà Nội (Bắc Bộ)",
    image: "https://i-giadinh.vnecdn.net/2025/05/16/Bun-dau-mam-tom-6-vnexpress-17-9082-8722-1747388531.jpg"
  },
  {
    name: "Bánh ướt",
    ingredients: "Bột gạo, thịt nướng, nước mắm, rau sống",
    origin: "Miền Trung",
    image: "https://file.hstatic.net/200000700229/article/banh-uot-thit-nuong-1_3995edea6f4141148812abe72520f623.jpg"
  },
  {
    name: "Bún mắm",
    ingredients: "Bún, mắm cá, tôm, thịt, rau sống",
    origin: "Nam Bộ",
    image: "https://cdn.tgdd.vn/2021/09/CookRecipe/GalleryStep/thanh-pham-1618.jpg"
  },
  {
    name: "Bánh bèo",
    ingredients: "Bột gạo, tôm chấy, mỡ hành, nước mắm",
    origin: "Huế (Trung Bộ)",
    image: "https://statics.vinpearl.com/banh-nam-hue-14_1631007586.jpg"
  },
  {
    name: "Bánh nậm",
    ingredients: "Bột gạo, tôm, thịt, lá chuối, nước mắm",
    origin: "Huế (Trung Bộ)",
    image: "https://cdn.tgdd.vn/Files/2019/12/22/1227966/bi-quyet-lam-banh-nam-hue-thom-ngon-kho-cuong-9-760x367.jpg"
  },
  {
    name: "Bánh lọc",
    ingredients: "Bột năng, tôm, thịt, lá chuối",
    origin: "Huế (Trung Bộ)",
    image: "https://i.ytimg.com/vi/pSfOPyBKlFQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxhTCjhT7E4UO8_bL9whPwOI1bGQ"
  },
  {
    name: "Cơm tấm sườn bì chả",
    ingredients: "Cơm tấm, sườn nướng, bì, chả trứng, nước mắm",
    origin: "TP. Hồ Chí Minh (Nam Bộ)",
    image: "https://i-giadinh.vnecdn.net/2024/03/07/7Honthinthnhphm1-1709800144-8583-1709800424.jpg"
  },
  {
    name: "Bánh hỏi",
    ingredients: "Bột gạo, thịt nướng, hành lá, nước mắm",
    origin: "Bình Định (Trung Bộ)",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/B%C3%A1nh_h%E1%BB%8Fi_tr%C3%ACnh_b%C3%A0y_tr%C3%AAn_%C4%91%C4%A9a.jpg"
  },
  {
    name: "Bún thịt nướng",
    ingredients: "Bún, thịt heo nướng, rau sống, nước mắm",
    origin: "Nam Bộ",
    image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_9_638324664353641656_bun-thit-nuong-thumb.jpg"
  },
  {
    name: "Bánh tráng nướng",
    ingredients: "Bánh tráng, trứng, hành lá, tương ớt",
    origin: "Đà Lạt (Tây Nguyên)",
    image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/162644/Originals/banh-trang-nuong-1.jpg"
  },
  {
    name: "Bánh căn",
    ingredients: "Bột gạo, trứng, tôm, hành lá, nước mắm",
    origin: "Nha Trang (Trung Bộ)",
    image: "https://cdn.tgdd.vn/Files/2020/06/24/1265158/cach-lam-banh-can-da-lat-chuan-vi-lam-mot-lan-la-an-ngay-202006240904228277.jpg    "
  },
  {
    name: "Bánh đậu xanh",
    ingredients: "Đậu xanh, đường, dầu ăn",
    origin: "Hải Dương (Bắc Bộ)",
    image: "https://dacsanlamqua.com/wp-content/uploads/2015/10/Banh-dau-xanh-Hai-Duong.jpg"
  },
  {
    name: "Bánh pía",
    ingredients: "Bột mì, đậu xanh, mỡ heo, đường",
    origin: "Sóc Trăng (Nam Bộ)",
    image: "https://banhbaominh.com/wp-content/uploads/2023/08/kham-pha-huong-vi-banh-pia-soc-trang-banh-pia-soc-trang1.jpeg"
  },
  {
    name: "Bánh tằm bì",
    ingredients: "Bánh tằm, bì, nước cốt dừa, nước mắm",
    origin: "Cà Mau (Nam Bộ)",
    image: "https://cdn.tgdd.vn/Files/2020/03/23/1243943/2-cach-lam-banh-tam-ngon-dai-mem-don-gian-chuan--16-760x367.jpg"
  }
]

const REGIONS = ["Tất cả", "Bắc Bộ", "Trung Bộ", "Nam Bộ", "Tây Bắc", "Tây Nguyên"]
const ITEMS_PER_PAGE = 20

export default function CuisinePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredDishes = useMemo(() => {
    return DISHES.filter((dish) => {
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesRegion = selectedRegion === "Tất cả" ||
        dish.origin.toLowerCase().includes(selectedRegion.toLowerCase())
      
      return matchesSearch && matchesRegion
    })
  }, [searchQuery, selectedRegion])

  // Reset về trang 1 khi search hoặc filter thay đổi
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedRegion])

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredDishes.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedDishes = filteredDishes.slice(startIndex, endIndex)

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
            src="https://paoquan.vn/wp-content/uploads/2023/07/mam-co-nguoi-thai.jpg" 
            alt="Ẩm thực Việt Nam" 
            className="w-full h-[50vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[50vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center gap-3">
                <ChefHat className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
                <h1 className="text-4xl md:text-6xl font-serif font-bold">Ẩm Thực Việt Nam</h1>
              </div>
              <h2 className="text-xl md:text-2xl text-white/90">3 miền – Ẩm thực thành thương hiệu</h2>
              <p className="max-w-2xl text-white/85">
                Khám phá hơn 29 món ăn đặc trưng từ khắp mọi miền đất nước, mỗi món là một câu chuyện văn hoá và hương vị độc đáo.
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
              placeholder="Tìm kiếm món ăn hoặc nguyên liệu..."
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

          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {REGIONS.map((region) => (
              <Button
                key={region}
                onClick={() => setSelectedRegion(region)}
                variant={selectedRegion === region ? "default" : "outline"}
                className={
                  selectedRegion === region
                    ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                    : "bg-black/30 border-amber-800/40 text-white hover:bg-black/50"
                }
                size="sm"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-white/70 text-sm">
          Hiển thị {filteredDishes.length} / {DISHES.length} món ăn
          {filteredDishes.length > ITEMS_PER_PAGE && (
            <span className="ml-2">
              (Trang {currentPage} / {totalPages})
            </span>
          )}
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16">
            <ChefHat className="w-16 h-16 mx-auto text-white/30 mb-4" />
            <p className="text-white/70 text-lg">Không tìm thấy món ăn nào</p>
            <p className="text-white/50 text-sm mt-2">Thử tìm kiếm với từ khoá khác</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedDishes.map((dish, index) => (
                <Card
                  key={dish.name}
                  className="group bg-black/30 border border-amber-800/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "https://via.placeholder.com/400x300/1a1009/ffffff?text=" + encodeURIComponent(dish.name)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {dish.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Origin */}
                    <div className="flex items-center gap-2 text-sm text-amber-400">
                      <MapPin className="w-4 h-4" />
                      <span>{dish.origin}</span>
                    </div>

                    {/* Ingredients */}
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                        Nguyên liệu chính
                      </p>
                      <p className="text-sm text-white/85 leading-relaxed line-clamp-3">
                        {dish.ingredients}
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

