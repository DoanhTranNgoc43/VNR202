"use client"

import { useState, useMemo, useEffect } from "react"
import { Card } from "../../components/ui/card"
import SiteHeader from "../../components/site-header"
import { Dialog, DialogContent } from "../../components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../../components/ui/pagination"
import { Users, Lightbulb, Target, Award, Heart, Rocket, Camera, Video, MapPin, Calendar, X } from "lucide-react"

const IMAGES_PER_PAGE = 20

export default function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const convertDriveImageUrl = (url: string): string => {
    if (url.includes("drive.google.com")) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
      if (match && match[1]) {
        const fileId = match[1]
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
      }
    }
    return url
  }

  // Scroll to top khi chuyển trang
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://www.bonboncar.vn/blog/content/images/2025/08/image-253.png" 
            alt="Trải nghiệm của nhóm" 
            className="w-full h-[60vh] md:h-[70vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[60vh] md:h-[70vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="text-white space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-6xl font-serif font-bold">Trải Nghiệm Của Nhóm</h1>
              </div>
              <h2 className="text-xl md:text-2xl text-white/90">Hành trình xây dựng dự án VNR202</h2>
              <p className="max-w-2xl text-white/85">
                Chia sẻ về quá trình nghiên cứu, phát triển và những bài học quý giá trong việc xây dựng dự án "Trầm tích Văn hoá Việt Nam trong Hội nhập Kinh tế Quốc tế".
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Exhibition Visit Section */}
      <section className="bg-gradient-to-b from-[#1a1009] to-[#2a1a0c] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <a 
              href="https://www.google.com/maps/search/Trung+tâm+Triển+lãm+Quốc+gia+Hà+Nội" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 mb-6 hover:bg-amber-600/30 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-white font-semibold text-sm">Trung tâm Triển lãm Quốc gia</span>
            </a>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Trải nghiệm thực tế VEC 2025 - Hội chợ mùa thu</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Nhóm đã có cơ hội đến tham quan Trung tâm Triển lãm Quốc gia để tìm hiểu sâu hơn về văn hoá Việt Nam và thu thập tư liệu cho dự án.
            </p>
          </div>

          {/* Experience Description */}
          <Card className="bg-black/30 border border-amber-800/40 p-6 md:p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
              <div className="flex items-center gap-3 mb-4">
  <Calendar className="w-6 h-6 text-amber-400" />
  <h3 className="text-2xl font-bold text-white">Trải Nghiệm Thực Tế</h3>
</div>

                <p className="text-white/80 mb-4">
                  Chuyến tham quan Trung tâm Triển lãm Quốc gia là một trải nghiệm đáng nhớ của nhóm. 
                  Chúng tôi đã được tận mắt chiêm ngưỡng các hiện vật văn hoá, tác phẩm nghệ thuật, 
                  và tìm hiểu về lịch sử phát triển văn hoá Việt Nam qua các thời kỳ.
                </p>
                <p className="text-white/80 mb-4">
                  Những hình ảnh và video được ghi lại trong chuyến đi này không chỉ là tư liệu quý giá 
                  cho dự án mà còn là kỷ niệm đẹp của cả nhóm trong hành trình nghiên cứu và phát triển.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Camera className="w-4 h-4 text-amber-400" />
                    <span>Nhiều ảnh tư liệu</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span>Video ghi lại trải nghiệm</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-amber-800/40 group">
                <img 
                  src="https://www.bonboncar.vn/blog/content/images/size/w1000/2025/08/image-255.png" 
                  alt="Triển lãm" 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Không gian triển lãm văn hoá</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Video Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Video className="w-6 h-6 text-amber-400" />
              Video Ghi Lại Trải Nghiệm
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* 
                Hướng dẫn sử dụng:
                - Đối với YouTube: type: "youtube", videoId: "ID_của_video" (ví dụ: "dQw4w9WgXcQ")
                - Đối với Google Drive: type: "drive", videoId: "FILE_ID" hoặc full share link
                
                Cách lấy FILE_ID từ Google Drive:
                1. Share video với quyền "Anyone with the link can view"
                2. Copy link share (dạng: https://drive.google.com/file/d/FILE_ID/view?usp=sharing)
                3. Lấy FILE_ID từ link hoặc dùng toàn bộ link share
              */}
              {[
                {
                  title: "Tổng quan chuyến tham quan",
                  description: "Video tổng hợp về chuyến đi và các hoạt động của nhóm tại triển lãm",
                  type: "drive", // "youtube" hoặc "drive"
                  videoId: "https://drive.google.com/file/d/1NsgFug16AaoRW8J49CgDanT-bdPWr5aa/view?usp=drive_link" // Thay bằng FILE_ID từ Google Drive hoặc YouTube video ID
                },
                {
                  title: "Giới thiệu các hiện vật",
                  description: "Video giới thiệu chi tiết về các hiện vật văn hoá được trưng bày",
                  type: "drive", // "youtube" hoặc "drive"
                  videoId: "https://drive.google.com/file/d/1hH0_n0tw09mjbmz69Dj8Mn_lFfUsI1L1/view?usp=drive_link" // Thay bằng FILE_ID từ Google Drive hoặc YouTube video ID
                },
                {
                    title: "Giới thiệu các hiện vật",
                    description: "Video giới thiệu chi tiết về các hiện vật văn hoá được trưng bày",
                    type: "drive", 
                    videoId: "https://drive.google.com/file/d/1vfrnIrqw6Py0tz33jSPLlrUAmx1I3B-s/view?usp=drive_link" // Thay bằng FILE_ID từ Google Drive hoặc YouTube video ID
                  },
                  {
                    title: "Giới thiệu các hiện vật",
                    description: "Video giới thiệu chi tiết về các hiện vật văn hoá được trưng bày",
                    type: "drive", // "youtube" hoặc "drive"
                    videoId: "https://drive.google.com/file/d/1OM8VCg61vwy8KdGPLLBK_B708_738m7L/view?usp=drive_link" // Thay bằng FILE_ID từ Google Drive hoặc YouTube video ID
                  },
                  {
                    title: "Giới thiệu các hiện vật",
                    description: "Video giới thiệu chi tiết về các hiện vật văn hoá được trưng bày",
                    type: "drive", // "youtube" hoặc "drive"
                    videoId: "https://drive.google.com/file/d/1_69rAf-QaQTYbXwesZO-J1uihN_ExY8m/view?usp=drive_link" // Thay bằng FILE_ID từ Google Drive hoặc YouTube video ID
                  }
                
              ].map((video, index) => {
                // Hàm chuyển đổi Google Drive link thành embed link
                const getVideoSrc = () => {
                  if (video.type === "youtube") {
                    return `https://www.youtube.com/embed/${video.videoId}`
                  } else {
                    // Google Drive: Nếu là full link, extract FILE_ID
                    let fileId = video.videoId
                    if (video.videoId.includes("drive.google.com")) {
                      const match = video.videoId.match(/\/d\/([a-zA-Z0-9_-]+)/)
                      fileId = match ? match[1] : video.videoId
                    }
                    return `https://drive.google.com/file/d/${fileId}/preview`
                  }
                }

                return (
                  <Card 
                    key={index}
                    className="bg-black/30 border border-amber-800/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300"
                  >
                    <div className="aspect-video bg-black/50 relative">
                      {video.videoId ? (
                        <iframe
                          className="w-full h-full"
                          src={getVideoSrc()}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center text-white/50">
                            <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Chưa có video</p>
                            <p className="text-xs mt-1">Vui lòng thêm video ID hoặc link</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <div className="p-4">
                      <h4 className="font-bold mb-2">{video.title}</h4>
                      <p className="text-sm text-white/70">{video.description}</p>
                      {video.videoId && (
                        <p className="text-xs text-white/50 mt-2">
                          {video.type === "youtube" ? "📺 YouTube" : "☁️ Google Drive"}
                        </p>
                      )}
                    </div> */}
                  </Card>
                )
              })}
            </div>
            
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Camera className="w-6 h-6 text-amber-400" />
              Thư Viện Ảnh
            </h3>
            
            {/* Thay thế các URL ảnh dưới đây bằng ảnh thực tế từ chuyến tham quan */}
            {(() => {
              const allImages = [
                "https://drive.google.com/file/d/1G2no0xthrc6oCkf6q3Jp5ED5dYtZoFcf/view?usp=drive_link",
                "https://drive.google.com/file/d/1_Rg8WqhSmpdjUp_bk3fy3n98nzKdaFgx/view?usp=drive_link",
                "https://drive.google.com/file/d/1uRZLVqVoyOgTi-5_2xCMVmrbU54_oLht/view?usp=drive_link",
                "https://drive.google.com/file/d/18NTqwgNr0cdKUvf0XSKkoEu0z5OQK-Xr/view?usp=drive_link",
                "https://drive.google.com/file/d/18a8YxW0l5TPaoiuaJtKwm0p_EsExNTL7/view?usp=drive_link",
                "https://drive.google.com/file/d/1mVlhpcC7jHwzICzTKpjTcwhnWLyGGCtL/view?usp=drive_link",
                "https://drive.google.com/file/d/1omkPSC_tPz63Wnnwu9bYaiEhhy6J9vHk/view?usp=drive_link",
                "https://drive.google.com/file/d/1HErCzBvf9gFvGLDuIKJOLAkkJ3Pm-r_m/view?usp=drive_link",
                "https://drive.google.com/file/d/1Rttc3oEvU6-Qmcs3v-m3PxKC49Vp1EIh/view?usp=drive_link",
                "https://drive.google.com/file/d/1qPkDR2ogZAQysd7iODI64Rug7vjrCMQF/view?usp=drive_link",
                "https://drive.google.com/file/d/1qPkDR2ogZAQysd7iODI64Rug7vjrCMQF/view?usp=drive_link",
                "https://drive.google.com/file/d/1JX5quUwWc10dOcCFOZi00y8mLh7eWrBl/view?usp=drive_link",
                "https://drive.google.com/file/d/1eeCaADVGm-b5sBnT8mEVdrEjK_jC08TU/view?usp=drive_link",
                "https://drive.google.com/file/d/1j77sGSn5REhDUXjTJkX9s4ak6DHO6SEI/view?usp=drive_link",
                "https://drive.google.com/file/d/1bH6uRLSrRcf1UzX-JPfBBQ_yf939KV5E/view?usp=drive_link",
                "https://drive.google.com/file/d/1ahla7dRiguNxNiST6bvps_7bNZ8kQt91/view?usp=drive_link",
                "https://drive.google.com/file/d/1GKFCzu2SlYjDB8s4nhxTbDmfpasUITq7/view?usp=drive_link",
                "https://drive.google.com/file/d/11VKSR3Da60hscYbzWsLaqCJDW-IpBn0T/view?usp=drive_link",
                "https://drive.google.com/file/d/1qPZi0J5gXmMhrU1pqcehWFtaWkdhjir1/view?usp=drive_link",
                "https://drive.google.com/file/d/1VValtr2ztMSiGIzRpcibqQxzReIUveCd/view?usp=drive_link",
                "https://drive.google.com/file/d/1PTptoScCNojCidVKxM16364oGYi580it/view?usp=drive_link",
                "https://drive.google.com/file/d/1OARQt1xyvWJNLEfCm0M-eC-kZ8rcNl4F/view?usp=drive_link",
                "https://drive.google.com/file/d/1gNwbah9MYTFp8rcXIwqX6_RZkP3Hw9sm/view?usp=drive_link",
                "https://drive.google.com/file/d/1cjPvcKdvoJQKm8q9Cj0M4HltYaa7VFoR/view?usp=drive_link",
                "https://drive.google.com/file/d/1wAIW-jxnyFZG5HOOJXQ50nctoRYxCZiI/view?usp=drive_link",
                "https://drive.google.com/file/d/1TaP6mpEge8fKkRBBC7TFPcC56h4ol2qP/view?usp=drive_link",
                "https://drive.google.com/file/d/1g46hMef3A4Zowst-abDAfluCq2LzEkjK/view?usp=drive_link",
                "https://drive.google.com/file/d/1ambNe1LYd8n_3SG8dIuRCETupksDSMsl/view?usp=drive_link",
                "https://drive.google.com/file/d/1OoUtTtEJLtgsApZOIX4yMSpLDbkTVupJ/view?usp=drive_link",
                "https://drive.google.com/file/d/1VSK4OK-i8uGLoQ8q44RELP0NNXj_G42A/view?usp=drive_link",
                "https://drive.google.com/file/d/1pvPDAOEa8PDNumjVXlSIcIYUNbj08Ljs/view?usp=drive_link",
                "https://drive.google.com/file/d/1yl8melWKdr5muGJiTWgwd_yh5kLfdQ57/view?usp=drive_link",
                "https://drive.google.com/file/d/1Lxq3VVU9RbG8khmMw7r-q0UehEhQIGK_/view?usp=drive_link",
                "https://drive.google.com/file/d/1LF7fn-i6qYd006fCS38xOx5_-bJpyW86/view?usp=drive_link",
                "https://drive.google.com/file/d/1i6XxCDU72yjWVbn-YIm39-OKPixqyOAw/view?usp=drive_link",
                "https://drive.google.com/file/d/1JpKzucwWx3ENK7wVZupQid-WmHkZjON9/view?usp=drive_link",
                "https://drive.google.com/file/d/1eVWX1uMYO0tpbJoe__UFGKPPBww9HFz5/view?usp=drive_link",
                "https://drive.google.com/file/d/1ITj7nJreiTA22yL5sFDCdA2LE-u5V6j3/view?usp=drive_link",
                "https://drive.google.com/file/d/1jEBl-12JnI0s6soi2_xzo_SdYAa66-i5/view?usp=drive_link",
                "https://drive.google.com/file/d/1Yq7RMJPNs1zOLBeQPIUfWe91RZ6W5ks2/view?usp=drive_link",
                "https://drive.google.com/file/d/1IrlklTt_UUbZLMEZvGY_b4Upew02Kd77/view?usp=drive_link",
                "https://drive.google.com/file/d/1TAxK9h2jYoll9bsFD672_tY2NS_j8MLL/view?usp=drive_link",
                "https://drive.google.com/file/d/1TfORZ_QSA_6snDJlIwwaOIe3Z4Y3I6Py/view?usp=drive_link",
                "https://drive.google.com/file/d/1SNQPq2jbSI_E1j7H53p2ffenYEt0Gp04/view?usp=drive_link",
                "https://drive.google.com/file/d/16lQR195FhyvrLebo7xtNZHI4f1QDncgC/view?usp=drive_link",
                "https://drive.google.com/file/d/1qheJ5ea2PeSQ_Tzn0KNTr4cS6AtdWEFy/view?usp=drive_link",
                "https://drive.google.com/file/d/1SK3_cmOzl9ReiqnnXzkYwXUev9ccbeSd/view?usp=drive_link",
                "https://drive.google.com/file/d/1QBKXVleidHzbaXnlbAJQKLgupJBcwU16/view?usp=drive_link",
                "https://drive.google.com/file/d/1J0wxQIdg63NJ5-ZxQ-xNRhxYiF7pqyik/view?usp=drive_link",
                "https://drive.google.com/file/d/1ocVZrtA2fiGQRLMIAglUwsQkl1J4ueCm/view?usp=drive_link",
                "https://drive.google.com/file/d/17WfhFbH3c9cLLsTqiglWpj8wRNzZqxEw/view?usp=drive_link",
                "https://drive.google.com/file/d/1-LltUMG0wSqH09phUQvM0aXzj0BuzCAF/view?usp=drive_link",
                "https://drive.google.com/file/d/1fwwG779gvAHc9SXlzjaac8TunvHonK-X/view?usp=drive_link",
                "https://drive.google.com/file/d/10vRwK5F65mEocaagX5fk-0o0tap6nZeB/view?usp=drive_link",
                "https://drive.google.com/file/d/1vsGTsn5WR-wHKvlT7A-iCG6jAzpL-846/view?usp=drive_link",
                "https://drive.google.com/file/d/1-ZQf2-0PZLzCPDnPotb9o_3fkA8LqiDS/view?usp=drive_link",
                "https://drive.google.com/file/d/1_4mOjiH8VcCG4waJ4Xj-0adQAlLRintx/view?usp=drive_link",
                "https://drive.google.com/file/d/1o5e9AB1hAckc3Kn0EuM-ojI_XDGA-U5F/view?usp=drive_link",
                "https://drive.google.com/file/d/1P8pVTPg0-08OVpDmyrWp0OgacveQHQiJ/view?usp=drive_link",
                "https://drive.google.com/file/d/1_ziBHWa34BkThDP1lUjFr-aSHdjL3fN1/view?usp=drive_link",
                "https://drive.google.com/file/d/1KGsaFPsX1UIuYRx1iWx_oCeAxCe_JsTH/view?usp=drive_link",
                "https://drive.google.com/file/d/1QV1duAF2TFl28Ja3sFhlU2sFiMhCVqrS/view?usp=drive_link",
                "https://drive.google.com/file/d/1mvnj-6-UiP57Ss9TFeZ4vIgaGj7GkFQF/view?usp=drive_link",
                "https://drive.google.com/file/d/1ygKjfi3DVJMb3LGn1I8jn_9-z1gObqYO/view?usp=drive_link",
                "https://drive.google.com/file/d/1tg2xKMET6F7ua_NhbYbe3detultzIzK2/view?usp=drive_link",
                "https://drive.google.com/file/d/181Bo08mt-ebZA0McYtMWt1EDNAFP7uB1/view?usp=drive_link",
                "https://drive.google.com/file/d/1aTDp5fLt5CClBAXfKEQcavR5yDGRU7qj/view?usp=drive_link",
                "https://drive.google.com/file/d/1DntWI9MgoDtO1uDuMfw1fDtLPcHLxsbg/view?usp=drive_link",
                "https://drive.google.com/file/d/1t7NOhcfj-CedVVlsyRSMuWz_M4OE8nac/view?usp=drive_link",
                "https://drive.google.com/file/d/1mmrnB4PRxee8auHt9pDK8Nh6hN-iEItH/view?usp=drive_link",
                "https://drive.google.com/file/d/14LAo_cgZ8BV-Bz8I6d8R_QIw9FuaioQu/view?usp=drive_link",
                "https://drive.google.com/file/d/1P34JatbMyQ4qoSaw41alLtXnDxtMWGeM/view?usp=drive_link",
                "https://drive.google.com/file/d/1wQlLsZMUGHrPW0dA28cpvxRbtcF71Fhh/view?usp=drive_link",
                "https://drive.google.com/file/d/1kFeAkKjShITENfeVhhtaGS7eWec1Rz7T/view?usp=drive_link",
                "https://drive.google.com/file/d/1ZJYAVac9w5bokxPFrikynb7EJYfFlHX4/view?usp=drive_link",
                "https://drive.google.com/file/d/1ShiWnv3hxE7OfeLRgyI21NM3OKdeB56R/view?usp=drive_link",
                "https://drive.google.com/file/d/1wUQ-Z3TII1rjJ_m4vTnDGvvOvV8JrM3W/view?usp=drive_link",
                "https://drive.google.com/file/d/1bUeRktJ5tiQ6V1u4aHf1r7SCWxIyXANb/view?usp=drive_link",
              ]

              // Tính toán phân trang
              const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE)
              const startIndex = (currentPage - 1) * IMAGES_PER_PAGE
              const endIndex = startIndex + IMAGES_PER_PAGE
              const paginatedImages = allImages.slice(startIndex, endIndex)

              // Hàm tạo số trang để hiển thị
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

              const handlePageChange = (page: number) => {
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page)
                }
              }

              return (
                <>
                  {/* Results Count */}
                  <div className="mb-4 text-white/70 text-sm">
                    Hiển thị {paginatedImages.length} / {allImages.length} ảnh
                    {allImages.length > IMAGES_PER_PAGE && (
                      <span className="ml-2">
                        (Trang {currentPage} / {totalPages})
                      </span>
                    )}
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {paginatedImages.map((imageUrl, index) => {
                      const directImageUrl = convertDriveImageUrl(imageUrl)
                      const globalIndex = startIndex + index + 1
                      return (
                        <Card 
                          key={startIndex + index}
                          onClick={() => setSelectedImage(directImageUrl)}
                          className="group bg-black/30 border border-amber-800/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 cursor-pointer aspect-square"
                        >
                          <div className="relative w-full h-full">
                            <img 
                              src={directImageUrl}
                              alt={`Ảnh triển lãm ${globalIndex}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = `https://via.placeholder.com/400x400/1a1009/ffffff?text=Ảnh+${globalIndex}`
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-xs font-semibold drop-shadow-lg">Ảnh {globalIndex}</p>
                            </div>
                          </div>
                        </Card>
                      )
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
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
              )
            })()}
          </div>
        </div>
      </section>

   

      {/* Image Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full bg-black/95 border-amber-800/40 p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage}
                alt="Ảnh triển lãm"
                className="w-full h-auto max-h-[90vh] object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://via.placeholder.com/800x600/1a1009/ffffff?text=Không+thể+tải+ảnh`
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}

