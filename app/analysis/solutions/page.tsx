"use client"

import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import SiteHeader from "../../../components/site-header"
import { FileText, Award, Target, CheckCircle2, ArrowLeft, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-amber-100">
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
                <span className="text-red-400 font-semibold text-sm">PHẦN 2</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
                Đường Lối Của Đảng
              </h1>
              <p className="text-lg md:text-xl text-amber-200/90 max-w-3xl">
                Các chủ trương, nghị quyết và hành động cụ thể nhằm khắc phục các hạn chế văn hóa trong hội nhập
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 2: ĐƯỜNG LỐI CỦA ĐẢNG */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        {/* 2.1. Nền tảng tư tưởng */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-amber-900/20 border-2 border-red-500/50 p-6 mb-8 shadow-xl shadow-red-900/20">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-sm font-black text-red-800">1</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">PHẦN 2.1</span>
                  <span className="text-amber-300/70 text-sm">Nền tảng tư tưởng</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Coi Văn hóa là động lực phát triển
                </h3>
                <p className="text-amber-200/80 text-sm mt-2">
                  Các nghị quyết và văn kiện quan trọng của Đảng xác định vai trò nền tảng của văn hóa trong phát triển đất nước
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Nghị quyết TW5 */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://imgv2-1-f.scribdassets.com/img/document/721170922/original/7f8e50dfc0/1?v=1" 
                alt="Nghị quyết TW5" 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Nghị quyết Trung ương 5 (Khóa VIII - 1998)</h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Nội dung cốt lõi:</strong>
                  <p className="mt-1">"Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc"</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Ý nghĩa:</strong>
                  <p className="mt-1">Đặt nền móng tư duy: Văn hóa là nền tảng tinh thần xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội. Khẳng định văn hóa phải "soi đường cho quốc dân đi".</p>
                </div>
              </div>
              </div>
            </Card>

            {/* Nghị quyết TW9 */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://bcp.cdnchinhphu.vn/zoom/600_315/Uploaded/buithuhuong/2014_06_11/HNTW.jpg" 
                alt="Nghị quyết TW9" 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Nghị quyết Trung ương 9 (Khóa XI - 2014)</h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Nội dung cốt lõi:</strong>
                  <p className="mt-1">"Xây dựng và phát triển văn hóa, con người Việt Nam đáp ứng yêu cầu phát triển bền vững đất nước"</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Ý nghĩa:</strong>
                  <p className="mt-1">Đặt trọng tâm vào xây dựng CON NGƯỜI (chủ thể của hội nhập) với các phẩm chất: nhân cách, lối sống tốt đẹp, có tinh thần yêu nước, đoàn kết, sáng tạo.</p>
                </div>
              </div>
              </div>
            </Card>

            {/* Đại hội XIII */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://bvhttdl.mediacdn.vn/291773308735864832/2021/11/24/ghi-van-hoa-toan-quoc-trien-khai-thuc-hien-nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-cua-dang15-16377185976821760747235-1637720949775-16377209498951435389405.jpg" 
                alt="Đại hội XIII" 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Đại hội XIII (2021) & Hội nghị Văn hóa toàn quốc 2021</h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Nội dung cốt lõi:</strong>
                  <p className="mt-1">Khơi dậy "khát vọng phát triển đất nước phồn vinh, hạnh phúc". Xây dựng "Hệ giá trị quốc gia", "Hệ giá trị văn hóa", "Hệ giá trị con người".</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Ý nghĩa:</strong>
                  <p className="mt-1">Tạo động lực tinh thần mới, lấy khát vọng làm sức mạnh để vượt qua các tư duy cũ, trì trệ.</p>
                </div>
              </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 2.2. Các hành động, chủ trương cụ thể */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-amber-900/20 border-2 border-red-500/50 p-6 mb-8 shadow-xl shadow-red-900/20">
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-sm font-black text-red-800">2</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">PHẦN 2.2</span>
                  <span className="text-amber-300/70 text-sm">Hành động cụ thể</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Các hành động, chủ trương cụ thể
                </h3>
                <p className="text-amber-200/80 text-sm mt-2">
                  Những biện pháp và chính sách cụ thể được triển khai để khắc phục từng nhóm hạn chế văn hóa
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* a. Khắc phục tư duy tiểu nông, bao cấp */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/26/1027656/2603-Thu-Tuong-Tham-.jpeg" 
                alt="Khắc phục tư duy tiểu nông" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Khắc phục tư duy tiểu nông, bao cấp </h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Đường lối:</strong>
                  <p className="mt-1">Nhất quán thực hiện kinh tế thị trường định hướng XHCN, đa dạng hóa sở hữu.</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Khuyến khích khởi nghiệp, đổi mới sáng tạo (Startup)</li>
                    <li>Hỗ trợ doanh nghiệp tư nhân, coi kinh tế tư nhân là động lực quan trọng</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* b. Khắc phục quan liêu, tham nhũng */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://lacduong.lamdong.dcs.vn/Portals/13/media/newsimage/1/7/a/17a-09.jpg" 
                alt="Khắc phục quan liêu tham nhũng" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Khắc phục quan liêu, tham nhũng </h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Đường lối:</strong>
                  <p className="mt-1">Xây dựng Nhà nước pháp quyền XHCN.</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><strong>Chống:</strong> Công cuộc "đốt lò" - phòng chống tham nhũng, tiêu cực quyết liệt, không có vùng cấm (do TBT Nguyễn Phú Trọng chỉ đạo)</li>
                    <li><strong>Xây:</strong> Đẩy mạnh cải cách hành chính, xây dựng Chính phủ điện tử, Chính phủ số (giảm tiếp xúc trực tiếp, tăng minh bạch)</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* c. Khắc phục bệnh thành tích, kỷ luật kém */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://moha.gov.vn/Media_Share/BoNoiVu/DATA/2022/04/18-00_40_02_563.jpg" 
                alt="Khắc phục bệnh thành tích" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Khắc phục bệnh thành tích, kỷ luật kém</h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Đường lối:</strong>
                  <p className="mt-1">Đổi mới căn bản, toàn diện giáo dục và đào tạo.</p>
                </div>
                <div>
                  <strong className="text-yellow-400">Hành động:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Chấn chỉnh kỷ luật, kỷ cương công vụ</li>
                    <li>Đẩy mạnh "thực học, thực nghiệp"</li>
                    <li>Yêu cầu cao hơn về chất lượng nguồn nhân lực</li>
                  </ul>
                </div>
              </div>
              </div>
            </Card>

            {/* d. Khắc phục tư duy COCC, phe cánh */}
            <Card className="bg-black/30 border border-amber-800/40 p-0 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/proxy/Rvc7Uz1H-1zczrryIJ5wULr377df4QnwCVK9XU3QMOQ0is671-7gNFY7nVPHmal2mqS61yDuNbvS474E67QijwtLO8KJTtOBXKObqBcu4j7iGejCxPlsnbWgPorulRklLfvDy9Rvqf5dGkuJKleOP7L9VTNi22uz51lI0I8tkb8wMBWHu-zz5V8" 
                alt="Khắc phục tư duy COCC" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-lg text-amber-200">Khắc phục tư duy COCC, phe cánh</h4>
                </div>
              <div className="space-y-3 text-sm text-amber-200/90">
                <div>
                  <strong className="text-yellow-400">Hành động:</strong>
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
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-200 mb-3">Khẳng định lại vấn đề</h3>
                  <p className="text-amber-200/90 leading-relaxed">
                    Văn hóa Việt Nam trong quá trình hội nhập vẫn còn tồn tại những hạn chế cốt lõi:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <p className="text-amber-200/90"><strong className="text-yellow-400">Tư duy & Nếp nghĩ:</strong> tư duy tiểu nông, bao cấp, bệnh thành tích</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <p className="text-amber-200/90"><strong className="text-yellow-400">Tác phong & Kỷ luật:</strong> kỷ luật lao động lỏng lẻo, thiếu chữ tín</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      <p className="text-amber-200/90"><strong className="text-yellow-400">Thể chế & Quản lý:</strong> quan liêu, tham nhũng, tư duy COCC</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-r">
                    <p className="text-amber-200/90 italic">
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
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-200 mb-3">Đánh giá chung về đường lối của Đảng</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r">
                      <p className="text-amber-200/90 leading-relaxed">
                        Các chủ trương, đường lối của Đảng là <strong className="text-yellow-400">đúng đắn, toàn diện, thể hiện tầm nhìn chiến lược</strong>. 
                        Từ Nghị quyết Trung ương 5 (1998) đến Đại hội XIII (2021), Đảng đã xác định rõ vai trò của văn hóa và đưa ra các giải pháp cụ thể để khắc phục từng hạn chế.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-900/20 border-l-4 border-amber-400 rounded-r">
                      <p className="text-amber-200/90 leading-relaxed">
                        Tuy nhiên, việc thực thi các đường lối này là một <strong className="text-yellow-400">quá trình lâu dài, kiên trì</strong>, đòi hỏi sự vào cuộc của cả hệ thống chính trị và toàn xã hội. 
                        Cần có sự phối hợp chặt chẽ giữa <strong className="text-yellow-400">Nhà nước, doanh nghiệp, và người dân</strong> để tạo nên sự chuyển biến thực sự trong văn hóa.
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
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-200 mb-3">Liên hệ bản thân và đề xuất</h3>
                  <p className="text-amber-200/90 leading-relaxed mb-4">
                    Mỗi cá nhân, đặc biệt là <strong className="text-yellow-400">thế hệ trẻ</strong>, cần nhận thức rõ trách nhiệm của mình trong việc rèn luyện, thay đổi tư duy và hành động để góp phần xây dựng một nền văn hóa mới, đáp ứng yêu cầu của thời đại.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                        <strong className="text-yellow-400">Phẩm chất cần phát huy:</strong>
                      </div>
                      <ul className="text-amber-200/90 text-sm space-y-1 ml-7">
                        <li>• Sáng tạo</li>
                        <li>• Chủ động</li>
                        <li>• Trách nhiệm</li>
                        <li>• Tuân thủ pháp luật</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-yellow-400" />
                        <strong className="text-yellow-400">Mục tiêu hội nhập:</strong>
                      </div>
                      <p className="text-amber-200/90 text-sm">
                        Việt Nam có thể hội nhập một cách <strong className="text-yellow-400">chủ động, hiệu quả và bền vững</strong> trong mọi hoạt động, từ học tập đến lao động.
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
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/analysis/challenges">
            <Button variant="outline" className="border-white/60 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
              Xem Trầm tích, Yếu kém
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

