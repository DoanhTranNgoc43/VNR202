"use client"

import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import SiteHeader from "../../../components/site-header"
import { FileText, Award, Target, CheckCircle2, ArrowLeft, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src="https://www.tapchicongsan.org.vn/documents/20182/162162736/NPT+-+BN.jpg/812328bf-19f5-48f4-9326-42efdd332b74?t=1644311477363" 
            alt="Đường lối của Đảng" 
            className="w-full h-[50vh] md:h-[60vh] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[50vh] md:h-[60vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30">
                <Target className="w-5 h-5 text-red-400" />
                </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                Đường Lối Của Đảng
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Các chủ trương, nghị quyết và hành động cụ thể nhằm khắc phục các hạn chế văn hóa trong hội nhập
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 2: ĐƯỜNG LỐI CỦA ĐẢNG */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        {/* 2.1. Nền tảng tư tưởng: Đại hội VI (1986) */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/20 border-2 border-blue-500/50 p-6 mb-8 shadow-xl shadow-blue-900/20">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-sm font-black text-blue-800">1</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 text-sm">Nền tảng tư tưởng</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Đại hội VI (1986) - "Cách mạng" về tư duy
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  Bắt đầu từ "Đổi mới tư duy", đặc biệt là tư duy kinh tế. Tinh thần cốt lõi: "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật" (Trích Văn kiện ĐH VI).
                </p>
                <p className="text-white/70 text-xs mt-2 italic">
                  Đây chính là một cuộc cách mạng văn hóa đầu tiên: Dùng "sự thật" (thực chất) để chống lại "bệnh thành tích, hình thức chủ nghĩa" đã tồn tại suốt thời bao cấp.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Nghị quyết TW5 */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://imgv2-1-f.scribdassets.com/img/document/721170922/original/7f8e50dfc0/1?v=1" 
                  alt="Nghị quyết TW5" 
                  className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-white" />
                  <h4 className="font-semibold text-lg text-white">Nghị quyết Trung ương 5 (Khóa VIII - 1998)</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Bối cảnh (LSD):</strong>
                  <p className="mt-1">10 năm Đổi mới, kinh tế phát triển nhưng đạo đức xã hội xuống cấp, "mặt trái của kinh tế thị trường" (chủ nghĩa cá nhân, thực dụng) xuất hiện.</p>
                </div>
                <div>
                  <strong className="text-white">Nội dung cốt lõi (5 quan điểm chỉ đạo):</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Văn hóa là nền tảng tinh thần, vừa là mục tiêu, vừa là động lực phát triển KT-XH</li>
                    <li>Nền văn hóa ta xây dựng là tiên tiến (khoa học, hiện đại) và đậm đà bản sắc dân tộc</li>
                    <li>Văn hóa Việt Nam là thống nhất mà đa dạng</li>
                    <li>Xây dựng văn hóa là sự nghiệp của toàn dân do Đảng lãnh đạo</li>
                    <li>Phải chủ động giao lưu quốc tế, tiếp thu tinh hoa văn hóa nhân loại</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Nhiệm vụ:</strong>
                  <p className="mt-1">Nhiệm vụ số 1 là Xây dựng con người Việt Nam (về tư tưởng, đạo đức, lối sống, trí tuệ...). Các nhiệm vụ khác: Xây dựng môi trường văn hóa; Phát triển văn học, nghệ thuật; Mở rộng giao lưu văn hóa quốc tế...</p>
                </div>
                <div>
                  <strong className="text-white">Ý nghĩa:</strong>
                  <p className="mt-1">Đây là Cương lĩnh về văn hóa thời kỳ Đổi Mới, trực tiếp định hướng cho việc "gạn đục khơi trong", đặt nền móng lý luận cho việc khắc phục các tàn dư.</p>
                </div>
              </div>
              </div>
            </Card>

            {/* Nghị quyết TW9 */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://bcp.cdnchinhphu.vn/zoom/600_315/Uploaded/buithuhuong/2014_06_11/HNTW.jpg" 
                  alt="Nghị quyết TW9" 
                  className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-white" />
                  <h4 className="font-semibold text-lg text-white">Nghị quyết Trung ương 9 (Khóa XI - 2014)</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Bối cảnh (LSD):</strong>
                  <p className="mt-1">Tổng kết 15 năm thực hiện NQTW 5. Bối cảnh hội nhập quốc tế sâu rộng hơn (đã gia nhập WTO), các vấn đề "xâm lăng văn hóa", suy thoái đạo đức, và "văn hóa trong kinh tế" nổi lên cấp bách.</p>
                </div>
                <div>
                  <strong className="text-white">Nội dung cốt lõi (6 nhiệm vụ, trọng tâm 4):</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Xây dựng con người Việt Nam phát triển toàn diện (yêu nước, nhân ái, nghĩa tình, trung thực, đoàn kết, cần cù, sáng tạo)</li>
                    <li>Xây dựng môi trường văn hóa lành mạnh</li>
                    <li><strong className="text-white">XÂY DỰNG VĂN HÓA TRONG CHÍNH TRỊ VÀ KINH TẾ</strong> (Điểm mới then chốt, đánh thẳng vào các hạn chế 1.3)</li>
                    <li>Chủ động hội nhập quốc tế về văn hóa</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Phân tích sâu "Văn hóa trong kinh tế":</strong>
                  <p className="mt-1">Nghị quyết yêu cầu phải xây dựng "đạo đức kinh doanh", "văn hóa doanh nghiệp", "văn hóa doanh nhân". Mục tiêu là làm cho văn hóa (nội lực mềm) và pháp luật (công cụ cứng) cùng lúc điều tiết hành vi kinh doanh. Đây là giải pháp trực tiếp cho "thiếu chữ tín", "làm ăn chộp giật".</p>
                </div>
              </div>
              </div>
            </Card>

            {/* Đại hội XIII */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://bvhttdl.mediacdn.vn/291773308735864832/2021/11/24/ghi-van-hoa-toan-quoc-trien-khai-thuc-hien-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-dang15-16377185976821760747235-1637720949775-16377209498951435389405.jpg" 
                  alt="Đại hội XIII" 
                  className="w-full h-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-white" />
                  <h4 className="font-semibold text-lg text-white">Đại hội XIII (2021) & Hội nghị Văn hóa toàn quốc 2021</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <p className="mt-1">Văn kiện Đại hội XIII (Phần cập nhật mới nhất).</p>
                </div>
                <div>
                  <strong className="text-white">Nội dung mới:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Khơi dậy "Khát vọng phát triển đất nước phồn vinh, hạnh phúc"</li>
                    <li>Xây dựng <strong className="text-white">Hệ giá trị quốc gia:</strong> (Hòa bình, Thống nhất, Độc lập, Dân giàu, Nước mạnh, Dân chủ, Công bằng, Văn minh, Hạnh phúc)</li>
                    <li>Xây dựng <strong className="text-white">Hệ giá trị con người:</strong> (Yêu nước, Đoàn kết, Tự cường, Nghĩa tình, Trung thực, Trách nhiệm, Kỷ luật, Sáng tạo)</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Ý nghĩa (Phân tích sâu):</strong>
                  <p className="mt-1">Đây là sự tổng hợp và nâng cao toàn bộ các Nghị quyết trước. Đưa "Khát vọng" (một giá trị văn hóa tinh thần) lên làm động lực phát triển cao nhất, để thay thế cho các tư duy vụ lợi, ngắn hạn, cục bộ. Đặc biệt, việc nhấn mạnh "Kỷ luật" và "Sáng tạo" trong hệ giá trị con người Việt Nam mới là sự đối trọng trực tiếp và là giải pháp căn cơ để khắc phục "Kỷ luật lỏng lẻo" và "Tư duy ngại rủi ro, kinh nghiệm chủ nghĩa".</p>
                </div>
              </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 2.3. Các chủ trương song hành (Mang tính quyết định - "Xây" đi đôi với "Chống") */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/20 border-2 border-blue-500/50 p-6 mb-8 shadow-xl shadow-blue-900/20">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-sm font-black text-blue-800">2</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 text-sm">Chủ trương song hành</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  "Xây" đi đôi với "Chống"
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  Các chủ trương mang tính quyết định, kết hợp giữa xây dựng và đấu tranh để khắc phục các hạn chế văn hóa
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* a. "Chống": Xây dựng, chỉnh đốn Đảng */}
            <Card className="bg-black/30 border border-red-500/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://file3.qdnd.vn/data/images/0/2023/09/07/kimoanh/02.jpg" 
                  alt="Chống tham nhũng" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h4 className="font-semibold text-lg text-white">"Chống": Xây dựng, chỉnh đốn Đảng</h4>
                </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Nghị quyết Trung ương 4 (Khóa XI) và Nghị quyết Trung ương 4 (Khóa XII) về "Tăng cường xây dựng, chỉnh đốn Đảng".</p>
                  </div>
                  <div>
                    <strong className="text-white">Nội dung (Chi tiết):</strong>
                    <p className="mt-1">Thẳng thắn chỉ ra 27 biểu hiện "tự diễn biến", "tự chuyển hóa". (Ví dụ cụ thể: "Nói nhiều làm ít", "Phát ngôn vô nguyên tắc", "Tham vọng chức quyền", "Tư duy nhiệm kỳ", "Lợi ích nhóm", "Quan liêu, xa dân"...).</p>
                  </div>
                  <div>
                    <strong className="text-white">Hành động:</strong>
                    <p className="mt-1">Công cuộc "đốt lò" do TBT Nguyễn Phú Trọng khởi xướng. Thành lập Ban Chỉ đạo Trung ương về phòng, chống tham nhũng, tiêu cực (thể hiện sự thể chế hóa, quyết tâm chính trị cao nhất).</p>
                  </div>
                  <div>
                    <strong className="text-white">Ý nghĩa:</strong>
                    <p className="mt-1">Đây là hành động trực tiếp nhất, quyết liệt nhất dùng kỷ luật Đảng và pháp luật của Nhà nước để "chặt bỏ" những ung nhọt văn hóa (tham nhũng, phe cánh, quan liêu) đang cản trở hội nhập.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* b. "Xây": Xây dựng Nhà nước pháp quyền XHCN */}
            <Card className="bg-black/30 border border-green-500/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/26/1027656/2603-Thu-Tuong-Tham-.jpeg" 
                  alt="Nhà nước pháp quyền" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">"Xây": Nhà nước pháp quyền XHCN</h4>
                </div>
                <div className="space-y-3 text-sm text-white/90">
                  <div>
                    <p className="mt-1">Được nhấn mạnh qua tất cả các kỳ Đại hội thời kỳ Đổi Mới.</p>
                  </div>
                  <div>
                    <strong className="text-white">Nội dung:</strong>
                    <p className="mt-1">Chuyển từ "Nhà nước quản lý" sang "Nhà nước kiến tạo, phục vụ".</p>
                  </div>
                  <div>
                    <strong className="text-white">Hành động (Chi tiết):</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Đẩy mạnh cải cách hành chính, "cắt giảm điều kiện kinh doanh" (chống "giấy phép con")</li>
                      <li>Xây dựng Chính phủ điện tử, Chính phủ số (như Cổng Dịch vụ công Quốc gia) → mục tiêu là giảm tối đa tiếp xúc trực tiếp giữa người dân/doanh nghiệp và cán bộ, từ đó triệt tiêu môi trường của "văn hóa phong bì"</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Ý nghĩa:</strong>
                    <p className="mt-1">Dùng thể chế (pháp luật, quy trình điện tử minh bạch) để thay thế cho thói quen (quan liêu, xin-cho, phong bì).</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 2.2. Các hành động, chủ trương cụ thể */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/20 border-2 border-blue-500/50 p-6 mb-8 shadow-xl shadow-blue-900/20">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-sm font-black text-blue-800">3</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white/70 text-sm">Hành động cụ thể</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Các hành động, chủ trương cụ thể
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  Những biện pháp và chính sách cụ thể được triển khai để khắc phục từng nhóm hạn chế văn hóa
                </p>
              </div>
            </div>
          </Card>

          {/* Tư duy & Nếp nghĩ */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-yellow-900/20 border-2 border-amber-500/50 p-4 mb-6 shadow-xl shadow-amber-900/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-white">Tư duy & Nếp nghĩ</h4>
                  <p className="text-white/80 text-sm mt-1">Hạn chế trong Tư duy & Nếp nghĩ</p>
                  <p className="text-white/70 text-xs mt-1">Các tư duy cũ, lạc hậu từ thời kỳ tiểu nông và bao cấp vẫn còn ảnh hưởng đến tư duy hiện đại</p>
                </div>
              </div>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
            {/* a. Khắc phục tư duy tiểu nông, bao cấp */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/26/1027656/2603-Thu-Tuong-Tham-.jpeg" 
                  alt="Khắc phục tư duy tiểu nông" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục tư duy tiểu nông, bao cấp </h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Đường lối:</strong>
                  <p className="mt-1">Nhất quán thực hiện kinh tế thị trường định hướng XHCN, đa dạng hóa sở hữu.</p>
                </div>
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Khuyến khích khởi nghiệp, đổi mới sáng tạo (Startup)</li>
                    <li>Hỗ trợ doanh nghiệp tư nhân, coi kinh tế tư nhân là động lực quan trọng</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* b. Khắc phục bệnh thành tích, hình thức chủ nghĩa */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://file3.qdnd.vn/data/images/0/2023/09/07/kimoanh/02.jpg" 
                  alt="Khắc phục bệnh thành tích" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục bệnh thành tích, hình thức chủ nghĩa</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Đường lối:</strong>
                  <p className="mt-1">Đại hội VI (1986) - "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật". Dùng "sự thật" (thực chất) để chống lại "bệnh thành tích, hình thức chủ nghĩa".</p>
                </div>
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Đổi mới cách đánh giá cán bộ, chuyển từ "báo cáo đẹp" sang "kết quả thực tế"</li>
                    <li>Yêu cầu minh bạch, truy xuất nguồn gốc trong sản xuất, xuất khẩu</li>
                    <li>Chống làm giả chứng nhận (VietGAP, ISO...), "greenwashing"</li>
                    <li>Xây dựng hệ thống kiểm tra, giám sát chất lượng thực tế</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Ý nghĩa:</strong>
                  <p className="mt-1">Đảm bảo tính minh bạch và truy xuất nguồn gốc - yêu cầu cốt lõi của đối tác quốc tế. Tránh tẩy chay cả ngành hàng, quốc gia do một lô hàng gian dối.</p>
                </div>
              </div>
              </div>
            </Card>
            </div>
          </div>

          {/* Tác phong & Kỷ luật */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-green-900/40 via-green-800/30 to-emerald-900/20 border-2 border-green-500/50 p-4 mb-6 shadow-xl shadow-green-900/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-white">Tác phong & Kỷ luật</h4>
                  <p className="text-white/80 text-sm mt-1">Hạn chế trong Tác phong & Kỷ luật</p>
                  <p className="text-white/70 text-xs mt-1">Tác phong làm việc thiếu chuyên nghiệp, kỷ luật lao động lỏng lẻo ảnh hưởng đến hiệu quả và uy tín</p>
                </div>
              </div>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
            {/* c. Khắc phục bệnh thành tích, kỷ luật kém */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://moha.gov.vn/Media_Share/BoNoiVu/DATA/2022/04/18-00_40_02_563.jpg" 
                  alt="Khắc phục bệnh thành tích" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục bệnh thành tích, kỷ luật kém</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Đường lối:</strong>
                  <p className="mt-1">Đổi mới căn bản, toàn diện giáo dục và đào tạo.</p>
                </div>
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Chấn chỉnh kỷ luật, kỷ cương công vụ</li>
                    <li>Đẩy mạnh "thực học, thực nghiệp"</li>
                    <li>Yêu cầu cao hơn về chất lượng nguồn nhân lực</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* d. Khắc phục thiếu chữ tín, xây dựng văn hóa doanh nghiệp */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/528147011_1177861001026252_2269891275596632700_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ITry2s8vBYUQ7kNvwG_H9zS&_nc_oc=AdmCo-dG8fi8P0zXnQ_9Wg3rUh54opEBzVcPRnAQoua9y0rtPjfHgXEn703v5Ij91FY&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=nv6YfhUY27sM7SB5MVpJhg&oh=00_Afg2q7ir2kWjrVoFR2SMtgR_QG6jUMLPI3vzzTAZhW0m3A&oe=69155CAD" 
                  alt="Xây dựng văn hóa doanh nghiệp" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục thiếu chữ tín, xây dựng văn hóa doanh nghiệp</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Đường lối:</strong>
                  <p className="mt-1">Nghị quyết Trung ương 9 (Khóa XI) yêu cầu xây dựng "Văn hóa trong kinh tế": đạo đức kinh doanh, văn hóa doanh nghiệp, văn hóa doanh nhân.</p>
                </div>
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Xây dựng đạo đức kinh doanh, tuân thủ pháp luật</li>
                    <li>Phát triển văn hóa doanh nghiệp, thương hiệu quốc gia</li>
                    <li>Chống hàng giả, hàng nhái, vi phạm sở hữu trí tuệ</li>
                    <li>Đảm bảo chất lượng đồng đều, giữ chữ tín với đối tác quốc tế</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Ý nghĩa:</strong>
                  <p className="mt-1">Làm cho văn hóa (nội lực mềm) và pháp luật (công cụ cứng) cùng lúc điều tiết hành vi kinh doanh. Đây là giải pháp trực tiếp cho "thiếu chữ tín", "làm ăn chộp giật".</p>
                </div>
              </div>
              </div>
            </Card>
            </div>
          </div>

          {/* Thể chế & Quản lý */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-violet-900/20 border-2 border-purple-500/50 p-4 mb-6 shadow-xl shadow-purple-900/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-serif font-bold text-white">Thể chế & Quản lý</h4>
                  <p className="text-white/80 text-sm mt-1">Hạn chế trong Thể chế & Quản lý</p>
                  <p className="text-white/70 text-xs mt-1">Quan liêu, tham nhũng và tư duy phe cánh làm giảm hiệu quả quản lý và môi trường đầu tư</p>
                </div>
              </div>
            </Card>
            <div className="grid md:grid-cols-2 gap-6">
            {/* b. Khắc phục quan liêu, tham nhũng */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://lacduong.lamdong.dcs.vn/Portals/13/media/newsimage/1/7/a/17a-09.jpg" 
                  alt="Khắc phục quan liêu tham nhũng" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục quan liêu, tham nhũng </h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Đường lối:</strong>
                  <p className="mt-1">Xây dựng Nhà nước pháp quyền XHCN.</p>
                </div>
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><strong>Chống:</strong> Công cuộc "đốt lò" - phòng chống tham nhũng, tiêu cực quyết liệt, không có vùng cấm (do TBT Nguyễn Phú Trọng chỉ đạo)</li>
                    <li><strong>Xây:</strong> Đẩy mạnh cải cách hành chính, xây dựng Chính phủ điện tử, Chính phủ số (giảm tiếp xúc trực tiếp, tăng minh bạch)</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* d. Khắc phục tư duy COCC, phe cánh */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/proxy/Rvc7Uz1H-1zczrryIJ5wULr377df4QnwCVK9XU3QMOQ0is671-7gNFY7nVPHmal2mqS61yDuNbvS474E67QijwtLO8KJTtOBXKObqBcu4j7iGejCxPlsnbWgPorulRklLfvDy9Rvqf5dGkuJKleOP7L9VTNi22uz51lI0I8tkb8wMBWHu-zz5V8" 
                  alt="Khắc phục tư duy COCC" 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-white">Khắc phục tư duy COCC, phe cánh</h4>
                </div>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <strong className="text-white">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Siết chặt công tác cán bộ, quy định về nêu gương</li>
                    <li>Chống chạy chức, chạy quyền</li>
                    <li>Từng bước minh bạch hóa quy trình tuyển dụng, bổ nhiệm</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* KẾT LUẬN */}
      <section className="bg-gradient-to-b from-[#2a1a0c] to-[#120c06] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">KẾT LUẬN</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* 1. Khẳng định lại vấn đề */}
            <Card className="bg-black/30 border border-amber-800/40 p-6 md:p-8 hover:border-amber-600/60 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600/80 to-red-800/80 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">Khẳng định lại vấn đề</h3>
                  <p className="text-white/90 leading-relaxed">
                    Văn hóa Việt Nam trong quá trình hội nhập vẫn còn tồn tại những hạn chế cốt lõi:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <p className="text-white/90"><strong className="text-white">Tư duy & Nếp nghĩ:</strong> tư duy tiểu nông, bao cấp, bệnh thành tích</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <p className="text-white/90"><strong className="text-white">Tác phong & Kỷ luật:</strong> kỷ luật lao động lỏng lẻo, thiếu chữ tín</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <p className="text-white/90"><strong className="text-white">Thể chế & Quản lý:</strong> quan liêu, tham nhũng, tư duy COCC</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-r">
                    <p className="text-white/90 italic">
                      Nếu không khắc phục kịp thời, những hạn chế này sẽ tiếp tục cản trở quá trình hội nhập, làm giảm năng lực cạnh tranh quốc gia và mất cơ hội phát triển.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 2. Đánh giá chung về đường lối của Đảng */}
            <Card className="bg-black/30 border border-amber-800/40 p-6 md:p-8 hover:border-amber-600/60 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/80 to-amber-600/80 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">Đánh giá chung về đường lối của Đảng</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r">
                      <p className="text-white/90 leading-relaxed">
                        Các chủ trương, đường lối của Đảng là <strong className="text-white">đúng đắn, toàn diện, thể hiện tầm nhìn chiến lược</strong>. 
                        Từ Nghị quyết Trung ương 5 (1998) đến Đại hội XIII (2021), Đảng đã xác định rõ vai trò của văn hóa và đưa ra các giải pháp cụ thể để khắc phục từng hạn chế.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-900/20 border-l-4 border-amber-400 rounded-r">
                      <p className="text-white/90 leading-relaxed">
                        Tuy nhiên, việc thực thi các đường lối này là một <strong className="text-white">quá trình lâu dài, kiên trì</strong>, đòi hỏi sự vào cuộc của cả hệ thống chính trị và toàn xã hội. 
                        Cần có sự phối hợp chặt chẽ giữa <strong className="text-white">Nhà nước, doanh nghiệp, và người dân</strong> để tạo nên sự chuyển biến thực sự trong văn hóa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 3. Liên hệ bản thân và đề xuất */}
            <Card className="bg-black/30 border border-amber-800/40 p-6 md:p-8 hover:border-amber-600/60 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">Liên hệ bản thân và đề xuất</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Mỗi cá nhân, đặc biệt là <strong className="text-white">thế hệ trẻ</strong>, cần nhận thức rõ trách nhiệm của mình trong việc rèn luyện, thay đổi tư duy và hành động để góp phần xây dựng một nền văn hóa mới, đáp ứng yêu cầu của thời đại.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <strong className="text-white">Phẩm chất cần phát huy:</strong>
                      </div>
                      <ul className="text-white/90 text-sm space-y-1 ml-7">
                        <li>• Sáng tạo</li>
                        <li>• Chủ động</li>
                        <li>• Trách nhiệm</li>
                        <li>• Tuân thủ pháp luật</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-white" />
                        <strong className="text-white">Mục tiêu hội nhập:</strong>
                      </div>
                      <p className="text-white/90 text-sm">
                        Việt Nam có thể hội nhập một cách <strong className="text-white">chủ động, hiệu quả và bền vững</strong> trong mọi hoạt động, từ học tập đến lao động.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Đường lối của Đảng với những chủ trương và hành động thiết thực đã thể hiện quyết tâm xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc trong quá trình hội nhập quốc tế.</h3>
        <div className="flex gap-3 justify-center">
          <a href="https://tapchicongsan.org.vn/web/guest/van_hoa_xa_hoi/-/2018/1041102/xay-dung-nen-van-hoa-viet-nam-ngay-cang-ben-vung%2C-tien-bo%2C-ban-sac%2C-tuong-xung-voi-trinh-do-phat-trien-kinh-te---xa-hoi-hien-nay-theo-tinh-than-dai-hoi-xiii-cua-dang.aspx"><Button className="bg-red-600 hover:bg-red-700 text-white">Tin tức</Button></a>
        </div>
      </section>
    </main>
  )
}

