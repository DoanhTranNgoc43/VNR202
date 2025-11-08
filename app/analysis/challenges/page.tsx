"use client"

import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import SiteHeader from "../../../components/site-header"
import { AlertCircle, TrendingDown, Users, Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-amber-100">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://media.vov.vn/sites/default/files/styles/large/public/2022-12/60c4608765d1bd8fe4c0.jpg" 
            alt="Trầm tích văn hóa" 
            className="w-full h-[50vh] md:h-[60vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[50vh] md:h-[60vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30">
                <TrendingDown className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">PHẦN 1</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                Trầm Tích, Yếu Kém Văn Hóa
              </h1>
              <p className="text-lg md:text-xl text-amber-200/90 max-w-3xl">
                Phân tích các hạn chế văn hóa cản trở quá trình hội nhập kinh tế quốc tế của Việt Nam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/30 border border-amber-800/40 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-200 mb-3">
                  Phương pháp phân tích
                </h3>
                <p className="text-amber-200/90 leading-relaxed mb-4">
                  Để làm rõ các hạn chế văn hóa cản trở hội nhập, mỗi vấn đề được phân tích theo 3 khía cạnh:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">1</div>
                    <div className="font-semibold text-amber-200 mb-1">Biểu hiện</div>
                    <p className="text-sm text-amber-200/80">Thể hiện cụ thể như thế nào trong thực tế?</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">2</div>
                    <div className="font-semibold text-amber-200 mb-1">Nguồn gốc</div>
                    <p className="text-sm text-amber-200/80">Xuất phát từ đâu trong lịch sử, văn hóa?</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">3</div>
                    <div className="font-semibold text-amber-200 mb-1">Tác động</div>
                    <p className="text-sm text-amber-200/80">Cản trở hội nhập như thế nào?</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* PHẦN 1: PHÂN TÍCH CÁC TRẦM TÍCH, YẾU KÉM */}
      <section className="bg-gradient-to-b from-[#1a1009] to-[#2a1a0c] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">

          {/* 1.1. Nhóm 1: Hạn chế trong Tư duy & Nếp nghĩ */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-amber-900/20 border-2 border-red-500/50 p-6 mb-8 shadow-xl shadow-red-900/20">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                    <TrendingDown className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-sm font-black text-red-800">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">NHÓM 1</span>
                    <span className="text-amber-300/70 text-sm">Tư duy & Nếp nghĩ</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Tư duy & Nếp nghĩ
                  </h3>
                  <p className="text-amber-200/80 text-sm mt-2">
                    Các tư duy cũ, lạc hậu từ thời kỳ tiểu nông và bao cấp vẫn còn ảnh hưởng đến tư duy hiện đại
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* a. Tư duy tiểu nông */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://lh5.googleusercontent.com/proxy/W1VX9kLxbMe8j1jwOXyBqfr7J2H71_I7qbQdPhD-XMjkBI1xDtXqsnScgvFtW_Q_hrUjvRI4eo-Uw2DvL_vs6EiW2kP5ziRGINo07JRnU94" 
                  alt="Tư duy tiểu nông" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Tư duy tiểu nông</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Manh mún, ngắn hạn ("ăn xổi ở thì")</li>
                      <li>Ngại rủi ro, thiếu liên kết</li>
                      <li>Cục bộ địa phương, "vụ lợi"</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Truyền thống tiểu nông, nền kinh tế tự cung tự cấp</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Kinh tế quốc tế đòi hỏi tầm nhìn chiến lược, quy mô lớn, liên kết chuỗi giá trị toàn cầu, chấp nhận đầu tư mạo hiểm cho công nghệ và R&D.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Tàn dư tư duy bao cấp */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://i1-vnexpress.vnecdn.net/2018/08/22/HUY-0859-1534903453.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=d35c-1NxvTX63xqBgeKcVw
" 
                  alt="Tư duy bao cấp" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Tàn dư tư duy bao cấp</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Tâm lý ỷ lại, trông chờ vào Nhà nước/tập thể</li>
                      <li>Thụ động, thiếu sáng tạo</li>
                      <li>"Chủ nghĩa bình quân" (cào bằng)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Thời kỳ bao cấp, kinh tế kế hoạch hóa tập trung</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Hội nhập là cạnh tranh sòng phẳng, đòi hỏi sự chủ động, sáng tạo không ngừng của doanh nghiệp và người lao động; phải chấp nhận chênh lệch giàu - nghèo do năng lực.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* c. Bệnh thành tích & Hình thức chủ nghĩa */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://file3.qdnd.vn/data/images/0/2023/09/07/kimoanh/02.jpg?dpi=150&quality=100&w=870" 
                  alt="Bệnh thành tích" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Bệnh thành tích & Hình thức chủ nghĩa</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Chú trọng báo cáo đẹp, số liệu tốt hơn là thực chất</li>
                      <li>Làm việc đối phó</li>
                      <li>"Nói hay làm dở"</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa quan liêu, thiếu minh bạch, thiếu trách nhiệm</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Đối tác quốc tế cần sự MINH BẠCH, CHÍNH XÁC và THỰC CHẤT. Bệnh thành tích làm sai lệch thông tin, gây mất lòng tin, dẫn đến quyết định sai lầm trong kinh doanh.</p>
                  </div>
                </div>
                </div>
              </Card>
            </div>
          </div>

          {/* 1.2. Nhóm 2: Hạn chế trong Tác phong & Kỷ luật */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-amber-900/20 border-2 border-red-500/50 p-6 mb-8 shadow-xl shadow-red-900/20">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-sm font-black text-red-800">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">NHÓM 2</span>
                    <span className="text-amber-300/70 text-sm">Tác phong & Kỷ luật</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Tác phong & Kỷ luật
                  </h3>
                  <p className="text-amber-200/80 text-sm mt-2">
                    Tác phong làm việc thiếu chuyên nghiệp, kỷ luật lao động lỏng lẻo ảnh hưởng đến hiệu quả và uy tín
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* a. Kỷ luật lao động lỏng lẻo */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://bachkhoaluat.vn/Files/CamNangDoanhNghiep/14598/680_CNDN6669_Ky%20luat%20lao%20dong%20la%20gi%20Co%20bao%20nhieu%20hinh%20thuc%20ky%20luat%20lao%20dong_VN_BKL_files/image001.jpg
" 
                  alt="Kỷ luật lao động" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Kỷ luật lao động lỏng lẻo</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Tác phong tùy tiện, "giờ cao su"</li>
                      <li>Thiếu chuyên nghiệp</li>
                      <li>Vi phạm quy trình kỹ thuật</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa nông nghiệp, thiếu kỷ luật công nghiệp</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Các chuỗi cung ứng toàn cầu (Apple, Samsung...) đòi hỏi kỷ luật công nghiệp tuyệt đối, chính xác về thời gian (Just-in-time), tuân thủ quy trình nghiêm ngặt. Kỷ luật kém dẫn đến phá vỡ chuỗi cung ứng.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Thói quen "đi tắt đón đầu" & Thiếu chữ tín */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/528147011_1177861001026252_2269891275596632700_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ITry2s8vBYUQ7kNvwG_H9zS&_nc_oc=AdmCo-dG8fi8P0zXnQ_9Wg3rUh54opEBzVcPRnAQoua9y0rtPjfHgXEn703v5Ij91FY&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=nv6YfhUY27sM7SB5MVpJhg&oh=00_Afg2q7ir2kWjrVoFR2SMtgR_QG6jUMLPI3vzzTAZhW0m3A&oe=69155CAD
" 
                  alt="Thiếu chữ tín" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Thói quen "đi tắt đón đầu" & Thiếu chữ tín</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Muốn làm giàu nhanh, bỏ qua quy trình</li>
                      <li>Vi phạm bản quyền, làm hàng giả, hàng nhái</li>
                      <li>Vi phạm cam kết hợp đồng</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa "ăn xổi ở thì", thiếu ý thức pháp luật</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Kinh tế quốc tế vận hành dựa trên PHÁP QUYỀN và CHỮ TÍN. Vi phạm sẽ bị kiện, bị tẩy chay, mất thương hiệu quốc gia.</p>
                  </div>
                </div>
                </div>
              </Card>
            </div>
          </div>

          {/* 1.3. Nhóm 3: Hạn chế trong Thể chế & Quản lý */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-amber-900/20 border-2 border-red-500/50 p-6 mb-8 shadow-xl shadow-red-900/20">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-sm font-black text-red-800">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">NHÓM 3</span>
                    <span className="text-amber-300/70 text-sm">Thể chế & Quản lý</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Thể chế & Quản lý
                  </h3>
                  <p className="text-amber-200/80 text-sm mt-2">
                    Quan liêu, tham nhũng và tư duy phe cánh làm giảm hiệu quả quản lý và môi trường đầu tư
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {/* a. Tệ quan liêu, hành chính hóa */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://i1-giaitri.vnecdn.net/2008/04/02/DSC09340aa-1345570045.jpg?w=480&h=0&q=100&dpr=1&fit=crop&s=nP4tCPQwx8zHN1uQ8sDrag
" 
                  alt="Quan liêu hành chính" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Tệ quan liêu, hành chính hóa</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Thủ tục rườm rà, "hành là chính"</li>
                      <li>Gây phiền hà cho doanh nghiệp</li>
                      <li>Tư duy "ban phát" cơ chế</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa quan liêu từ thời phong kiến, bao cấp</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Tăng chi phí giao dịch, tăng chi phí tuân thủ, làm nản lòng nhà đầu tư nước ngoài, giảm năng lực cạnh tranh quốc gia.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Tham nhũng vặt & "Văn hóa phong bì" */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://vnn-imgs-f.vgcloud.vn/2018/11/22/16/chong-tham-nhung-duoi-goc-nhin-biem-hoa.jpg?width=0&s=3Fgb8Don8p66O2XtHnJL5w
" 
                  alt="Tham nhũng" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Tham nhũng vặt & "Văn hóa phong bì"</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Phải có "lót tay" mọi khâu</li>
                      <li>Coi việc nhận hối lộ là "luật bất thành văn"</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa "phong bì", thiếu minh bạch, thiếu trách nhiệm giải trình</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Làm méo mó môi trường cạnh tranh, vi phạm các luật chống hối lộ quốc tế (ví dụ: FCPA của Mỹ), làm mất uy tín nghiêm trọng của môi trường đầu tư.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* c. Tư duy "phe cánh", "con ông cháu cha" (COCC) */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
                <img 
                  src="https://media-cdn-v2.laodong.vn/storage/newsportal/2018/1/16/586615/Luat-Hoi-Ty2.jpg?w=660" 
                  alt="Tư duy COCC" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-lg text-amber-200">Tư duy "phe cánh", "con ông cháu cha" (COCC)</h4>
                  </div>
                <div className="space-y-3 text-sm text-amber-200/90">
                  <div>
                    <strong className="text-yellow-400">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Bổ nhiệm, tuyển dụng không dựa trên năng lực</li>
                      <li>Dựa trên quan hệ (Meritocracy)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Nguồn gốc:</strong>
                    <p className="mt-1">Văn hóa "quan hệ", thiếu công bằng, thiếu minh bạch</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Cản trở hội nhập:</strong>
                    <p className="mt-1">Lãng phí nhân tài, bộ máy quản lý (cả nhà nước và doanh nghiệp) yếu kém, ra quyết định sai lầm, không đủ năng lực đối thoại và cạnh tranh với đối tác quốc tế.</p>
                  </div>
                </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/analysis/solutions">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              Xem Đường lối của Đảng
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

