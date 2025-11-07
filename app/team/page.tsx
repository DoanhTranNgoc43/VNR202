"use client"

import SiteHeader from "../../components/site-header"
import { Card } from "../../components/ui/card"
import { Users, Award, BookOpen, Heart } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  { name: "Trần Đại Dương", id: "HE172344", image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/453867949_1005379307792022_8122642187277337272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=J_6O-NDSRBgQ7kNvwEIUwjq&_nc_oc=Adky557NzNA_rM66DxqprkYuLk56lGQ11BlCplh3Jvnm8eVVVuZVDfeWTGcFI0zHsyc&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=p-F3ldg81uIV5UDX3K1lvA&oh=00_Afiu4JUurUo755KuUwJeXadBhOxXC7Sj9rASmEzF02PyxQ&oe=69134F93" },
  { name: "Nguyễn Văn Dũng", id: "HE171465", image: "https://fap.fpt.edu.vn/temp/ImageRollNumber/APHL/801b85e6-60a0-49a9-9fac-6d4a47ace2d0.jpg" },
  { name: "Đỗ Trí Trọng", id: "HE170108", image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/574401405_4380348522197647_4943015295380260974_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=5qXcpahKREkQ7kNvwHR1Byn&_nc_oc=AdmFlRIVD7-pG0VHSnWf3zyqbdxscaMVLGay6mUQ1H2xfsfI3Ncfig-QCIqgygSbIyg&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=0raTjcOdmDYCx0UREh7PTA&oh=00_AfhxPJjdLfK8DlTLlrQkYOtw3M1JSH3_7ZzCFfiDyIN3aw&oe=69135840" },
  { name: "Nguyễn Thị Diệu Linh", id: "HE172208", image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/542591466_1471070790595668_6213044976994606642_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FArlY8qXOkYQ7kNvwFagVOj&_nc_oc=Adnh5aXu_q5TjgR0dCvMLFcmdHLO4AglPpywDQTOEqsNiAmeJ-3oLJbJY-A_rnlD-rE&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8eVPqHyRXR0Mv6XqQQSs6A&oh=00_AfhCbzdDwUAkX2DWJg8ff9KyCwanPBihPU5iGcgsFmF75g&oe=69136E01" },
  { name: "Nguyễn Ngọc Quang", id: "HE171231", image: "https://fap.fpt.edu.vn/temp/ImageRollNumber/APHL/eed76110-0a64-4650-8f4f-33285c19eaf1.jpg" },
  { name: "Trần Ngọc Doanh", id: "HE172637", image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/486046992_2140946146347747_630169256832685060_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=KuA1BA8sDUsQ7kNvwFTweys&_nc_oc=AdmAIhu8GJXT8pRGm5b7YlMDxprclzyeLuaoNICB38emlL8SIpni6R2pBJIXvG4hIfw&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=u39WSKvgs2_IC9sZuTjDcQ&oh=00_Afjo86HoafN62--qDa44U74M5EzbOSmgGS1HzohEKlr60Q&oe=69134D9B" },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://www.pace.edu.vn/uploads/news/2024/02/3-cac-loai-hinh-van-hoa.jpg"
            alt="Vietnam Culture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.15),rgba(0,0,0,0.65)_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8">
          <SiteHeader />

          <div className="mt-20 md:mt-32">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 mb-6">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">SE1802 - VNR202 - G8</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Nhóm Thực Hiện Dự Án
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6">
                "Trầm tích Văn hoá Việt Nam trong Hội nhập Kinh tế Quốc tế"
              </p>
              <p className="text-lg text-yellow-300/90 italic max-w-2xl mx-auto">
                "Lan toả tinh hoa văn hoá Việt qua góc nhìn số."
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {teamMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border-2 border-red-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar với ảnh + phóng to khi hover */}
                      <div className="relative mb-4 group">
                        <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 shadow-xl">
                          <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = "/placeholder-user.jpg"
                              }}
                            />
                          </div>
                        </div>
                        {/* Badge với gradient border */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-lg">
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        </div>

                        {/* Overlay phóng to avatar */}
                        <div className="pointer-events-none fixed inset-0 z-[70] hidden group-hover:flex items-center justify-center">
                          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                          <div className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl w-[80vw] max-w-[520px] aspect-square">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="520px"
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = "/placeholder-user.jpg"
                              }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-center text-lg font-semibold">
                              {member.name} – {member.id}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Thông tin */}
                      <div className="w-full">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-yellow-300/80 text-sm font-mono mb-3">
                          {member.id}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-400 animate-pulse"></span>
                          <span className="text-white/70 text-xs">Thành viên nhóm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Project Info Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border-2 border-red-500/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Dự Án</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nghiên cứu và phân tích các trầm tích văn hoá Việt Nam trong bối cảnh hội nhập kinh tế quốc tế, tìm ra giải pháp để phát huy bản sắc dân tộc.
                </p>
              </Card>

              <Card className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border-2 border-red-500/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thành Viên</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nhóm gồm 6 thành viên đến từ lớp SE1802, cùng nhau xây dựng website trải nghiệm văn hoá Việt Nam với tinh thần đoàn kết và sáng tạo.
                </p>
              </Card>

              <Card className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border-2 border-red-500/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Sứ Mệnh</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Lan toả những giá trị tốt đẹp của văn hoá Việt Nam, góp phần bảo tồn và phát huy bản sắc dân tộc trong thời đại số.
                </p>
              </Card>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <Card className="bg-white/5 dark:bg-slate-800/5 backdrop-blur-md border border-red-500/20 inline-block px-8 py-4">
                <p className="text-white/70 text-sm">
                  Trang web được xây dựng nhằm mục đích học tập và tìm hiểu về văn hoá Việt Nam
                </p>
                <p className="text-white/60 text-xs mt-2">
                  Hoạt động phi lợi nhuận, không phục vụ mục đích thương mại
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

