"use client"

import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import SiteHeader from "../../../components/site-header"
import { AlertCircle, TrendingDown, Users, Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ChallengesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
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
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                Trầm Tích, Yếu Kém Văn Hóa
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
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
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                  Phương pháp phân tích
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Để làm rõ các hạn chế văn hóa cản trở hội nhập, mỗi vấn đề được phân tích theo 3 khía cạnh:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-2">1</div>
                    <div className="font-semibold text-white mb-1">Biểu hiện</div>
                    <p className="text-sm text-white/80">Thể hiện cụ thể như thế nào trong thực tế?</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-2">2</div>
                    <div className="font-semibold text-white mb-1">Nguồn gốc</div>
                    <p className="text-sm text-white/80">Xuất phát từ đâu trong lịch sử, văn hóa?</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-2">3</div>
                    <div className="font-semibold text-white mb-1">Tác động</div>
                    <p className="text-sm text-white/80">Cản trở hội nhập như thế nào?</p>
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
                    <span className="text-white/70 text-sm">Tư duy & Nếp nghĩ</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Tư duy & Nếp nghĩ
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Các tư duy cũ, lạc hậu từ thời kỳ tiểu nông và bao cấp vẫn còn ảnh hưởng đến tư duy hiện đại
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* a. Tư duy tiểu nông */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://lh5.googleusercontent.com/proxy/W1VX9kLxbMe8j1jwOXyBqfr7J2H71_I7qbQdPhD-XMjkBI1xDtXqsnScgvFtW_Q_hrUjvRI4eo-Uw2DvL_vs6EiW2kP5ziRGINo07JRnU94" 
                    alt="Tư duy tiểu nông" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Tư duy tiểu nông</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Đặc điểm lớn nhất của Việt Nam khi tiến lên CNXH là một nước nông nghiệp lạc hậu, sản xuất nhỏ, phân tán.</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện chi tiết:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Cục bộ, bản vị:</strong> "Lũy tre làng", "Ruộng ai nấy làm", "Phép vua thua lệ làng"</li>
                      <li><strong>Ngắn hạn, "ăn xổi ở thì":</strong> Chỉ thấy lợi ích trước mắt (ví dụ: Trồng cây gì, nuôi con gì thấy lợi là đổ xô làm, không cần quy hoạch)</li>
                      <li><strong>Tư duy kinh nghiệm, cảm tính:</strong> Coi thường lý luận, khoa học. Quyết định dựa trên "tôi thấy", "kinh nghiệm của tôi là..."</li>
                      <li><strong>Bình quân chủ nghĩa (đố kỵ):</strong> "Không muốn ai hơn mình", "Trâu buộc ghét trâu ăn"</li>
                      <li><strong>Gia trưởng, "phe nhóm":</strong> Tư duy dựa trên quan hệ huyết thống, thân quen</li>
                      <li><strong>Ngại rủi ro, "an phận thủ thường":</strong> Đi ngược lại tinh thần khởi nghiệp, đổi mới sáng tạo</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở hội nhập (Phân tích sâu):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Tư duy cục bộ</strong> → Thất bại trong việc xây dựng chuỗi cung ứng nội địa. Các doanh nghiệp không liên kết được với nhau, tự "dìm giá" nhau để tranh đơn hàng gia công</li>
                      <li><strong>Tư duy ngắn hạn + kinh nghiệm</strong> → Thất bại trong R&D. Doanh nghiệp chỉ muốn "chộp giật", làm hàng nhái, vi phạm sở hữu trí tuệ</li>
                      <li><strong>Tư duy bình quân, đố kỵ</strong> → Thất bại trong quản trị nhân tài. Khó áp dụng chế độ đãi ngộ theo hiệu suất (KPIs)</li>
                      <li><strong>Tư duy gia trưởng, phe nhóm</strong> → Thất bại trong quản trị doanh nghiệp minh bạch. Dẫn đến "doanh nghiệp gia đình trị"</li>
                    </ul>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Tàn dư tư duy bao cấp */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://i1-vnexpress.vnecdn.net/2018/08/22/HUY-0859-1534903453.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=d35c-1NxvTX63xqBgeKcVw
" 
                    alt="Tư duy bao cấp" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Tàn dư tư duy bao cấp</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Chương IV, V Giáo trình (Giai đoạn 1975-1986). Cơ chế này thủ tiêu cạnh tranh, thủ tiêu động lực.</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện chi tiết:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Tâm lý ỷ lại, "cha chung không ai khóc":</strong> Lãng phí tài sản công</li>
                      <li><strong>Tư duy "xin-cho":</strong> Doanh nghiệp không chủ động tìm thị trường mà ngồi chờ Nhà nước "giải cứu", "hỗ trợ", "cho cơ chế"</li>
                      <li><strong>Thói quen "phải có chỉ đạo":</strong> Cán bộ, công chức thụ động, không dám làm nếu "văn bản chưa nói rõ"</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở hội nhập:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Hội nhập là cạnh tranh sòng phẳng (level playing field). Tư duy "xin-cho" làm méo mó môi trường kinh doanh, tạo ra sự bất bình đẳng</li>
                      <li>Hội nhập đòi hỏi tốc độ và sự chủ động (Proactive). Thói quen chờ chỉ đạo khiến Việt Nam lỡ mất các cơ hội thị trường trong một thế giới biến động nhanh</li>
                    </ul>
                  </div>
                </div>
                </div>
              </Card>

              {/* c. Bệnh thành tích & Hình thức chủ nghĩa */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://file3.qdnd.vn/data/images/0/2023/09/07/kimoanh/02.jpg?dpi=150&quality=100&w=870" 
                    alt="Bệnh thành tích" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Bệnh thành tích & Hình thức chủ nghĩa</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Đây là một biểu hiện của sự suy thoái được NQTW 4 (Khóa XI, XII) chỉ ra: "Nói không đi đôi với làm", "Nói hay làm dở". Nó xuất phát từ cách đánh giá cán bộ còn nặng về "báo cáo", "chỉ tiêu".</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện chi tiết:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Báo cáo số liệu đẹp, che giấu yếu kém</li>
                      <li>Tổ chức lễ lạt rườm rà</li>
                      <li>Ví dụ: Làm giả chứng nhận VietGAP, ISO... để xuất khẩu; "greenwashing" - quảng cáo xanh nhưng quy trình bẩn</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở hội nhập:</strong>
                    <p className="mt-1">Đối tác quốc tế cần <strong className="text-white">MINH BẠCH (Transparency)</strong> và <strong className="text-white">TRUY XUẤT NGUỒN GỐC (Traceability)</strong>. Khi một lô hàng bị phát hiện gian dối, họ không chỉ tẩy chay 1 doanh nghiệp, mà là tẩy chay cả một ngành hàng, một quốc gia.</p>
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
                    <span className="text-white/70 text-sm">Tác phong & Kỷ luật</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Tác phong & Kỷ luật
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Tác phong làm việc thiếu chuyên nghiệp, kỷ luật lao động lỏng lẻo ảnh hưởng đến hiệu quả và uy tín
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* a. Kỷ luật lao động lỏng lẻo */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://bachkhoaluat.vn/Files/CamNangDoanhNghiep/14598/680_CNDN6669_Ky%20luat%20lao%20dong%20la%20gi%20Co%20bao%20nhieu%20hinh%20thuc%20ky%20luat%20lao%20dong_VN_BKL_files/image001.jpg
" 
                    alt="Kỷ luật lao động" 
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Kỷ luật lao động lỏng lẻo</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <strong className="text-white">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>"Giờ cao su"</li>
                      <li>Tùy tiện trong quy trình (không mặc đồ bảo hộ, bỏ qua bước kiểm tra kỹ thuật...)</li>
                      <li>Nhầm lẫn giữa "linh hoạt" (flexibility) và "vô kỷ luật" (indiscipline)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở:</strong>
                    <p className="mt-1">Không thể tham gia chuỗi cung ứng toàn cầu đòi hỏi chính xác tuyệt đối (Just-in-Time, 5S của Nhật Bản, 6 Sigma của Mỹ). Một mắt xích yếu làm hỏng cả hệ thống.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Thói quen "đi tắt đón đầu" & Thiếu chữ tín */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/528147011_1177861001026252_2269891275596632700_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ITry2s8vBYUQ7kNvwG_H9zS&_nc_oc=AdmCo-dG8fi8P0zXnQ_9Wg3rUh54opEBzVcPRnAQoua9y0rtPjfHgXEn703v5Ij91FY&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=nv6YfhUY27sM7SB5MVpJhg&oh=00_Afg2q7ir2kWjrVoFR2SMtgR_QG6jUMLPI3vzzTAZhW0m3A&oe=69155CAD
" 
                    alt="Thiếu chữ tín" 
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Thói quen "đi tắt đón đầu" & Thiếu chữ tín</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <strong className="text-white">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Làm hàng giả, hàng nhái</li>
                      <li>Vi phạm cam kết hợp đồng</li>
                      <li>Chất lượng không đồng đều (lô hàng mẫu rất tốt, lô hàng chính thức chất lượng kém)</li>
                      <li>Trễ hẹn thanh toán cho đối tác</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở:</strong>
                    <p className="mt-1"><strong className="text-white">CHỮ TÍN  </strong> là "tiền tệ" trong kinh doanh quốc tế. Mất tín là mất tất cả. Gây ra các vụ kiện thương mại quốc tế, bị đưa vào "danh sách đen" của các hiệp hội ngành hàng.</p>
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
                    <span className="text-white/70 text-sm">Thể chế & Quản lý</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Hạn chế trong Thể chế & Quản lý
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Quan liêu, tham nhũng và tư duy phe cánh làm giảm hiệu quả quản lý và môi trường đầu tư
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {/* a. Tệ quan liêu, hành chính hóa */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://i1-giaitri.vnecdn.net/2008/04/02/DSC09340aa-1345570045.jpg?w=480&h=0&q=100&dpr=1&fit=crop&s=nP4tCPQwx8zHN1uQ8sDrag
" 
                    alt="Quan liêu hành chính" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Tệ quan liêu, hành chính hóa</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Tàn dư của mô hình Xô Viết cũ, bộ máy cồng kềnh thời bao cấp.</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Thủ tục rườm rà, "một cửa" nhưng nhiều "ngách"</li>
                      <li>"Giấy phép con"</li>
                      <li>"Thủ tục chồng chéo" (ví dụ: PCCC, Môi trường, Xây dựng...)</li>
                      <li>Cán bộ "sợ trách nhiệm", không dám quyết, "đẩy" hồ sơ lòng vòng</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở:</strong>
                    <p className="mt-1">Tăng "chi phí tuân thủ", "chi phí thời gian" và "chi phí cơ hội" cho doanh nghiệp, làm nản lòng nhà đầu tư FDI, giảm năng lực cạnh tranh quốc gia.</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* b. Tham nhũng vặt & "Văn hóa phong bì" */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://vnn-imgs-f.vgcloud.vn/2018/11/22/16/chong-tham-nhung-duoi-goc-nhin-biem-hoa.jpg?width=0&s=3Fgb8Don8p66O2XtHnJL5w
" 
                    alt="Tham nhũng" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Tham nhũng vặt & "Văn hóa phong bì"</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <strong className="text-white">Nguồn gốc:</strong>
                    <p className="mt-1">Tư duy "xin-cho" + Lương cán bộ thấp + Thiếu minh bạch + Tư duy tiểu nông "biết ơn" (muốn việc nhanh thì phải "lót tay").</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Phải có "lót tay" ở mọi khâu (hải quan, thuế, xây dựng...)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở:</strong>
                    <p className="mt-1">Vi phạm các quy tắc Tuân thủ (Compliance) toàn cầu của các tập đoàn đa quốc gia. Họ thà chọn quốc gia khác có chi phí cao hơn một chút, nhưng môi trường minh bạch, chứ không mạo hiểm vi phạm luật Chống tham nhũng quốc tế (như FCPA của Mỹ).</p>
                  </div>
                </div>
                </div>
              </Card>

              {/* c. Tư duy "phe cánh", "con ông cháu cha" (COCC) */}
              <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2018/1/16/586615/Luat-Hoi-Ty2.jpg?w=660" 
                    alt="Tư duy COCC" 
                    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-lg text-white">Tư duy "phe cánh", "con ông cháu cha" (COCC)</h4>
                  </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Đây chính là biểu hiện nghiêm trọng nhất của sự suy thoái mà Nghị quyết Trung ương 4 (Khóa XI và XII) đã chỉ rõ: "Thao túng chính sách", "ban hành chính sách để trục lợi cho 'sân sau'".</p>
                  </div>
                  <div>
                    <strong className="text-white">Biểu hiện:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Bổ nhiệm người nhà (COCC)</li>
                      <li>Ban hành chính sách có lợi cho "sân sau"</li>
                      <li>"Tư duy nhiệm kỳ" (chỉ làm việc cầm chừng, hoặc "vơ vét" cuối nhiệm kỳ)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Cản trở:</strong>
                    <p className="mt-1">Gây bất ổn chính sách vĩ mô. Các nhà đầu tư dài hạn (10-20 năm) sợ nhất là chính sách thay đổi khi lãnh đạo địa phương/bộ ngành thay đổi, khiến toàn bộ kế hoạch đầu tư của họ phá sản.</p>
                  </div>
                </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Trầm tích và yếu kém văn hóa là những trở ngại cần được nhận diện và khắc phục để xã hội phát triển bền vững.</h3>
        <div className="flex gap-3 justify-center">
          <a href="/analysis/solutions"><Button className="bg-red-600 hover:bg-red-700 text-white">Đường lối của Đảng</Button></a>
        </div>
      </section>
    </main>
  )
}

