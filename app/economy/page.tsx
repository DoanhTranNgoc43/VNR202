"use client"

import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import SiteHeader from "../../components/site-header"

export default function EconomyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://bcp.cdnchinhphu.vn/334894974524682240/2023/9/29/top-10-mat-hang-viet-nam-xuat-khau-nhieu-nhat-4-1695966833313386976560-1695967740244-16959677410741058621863.jpg" alt="Kinh tế Việt Nam" className="w-full h-[60vh] md:h-[70vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[60vh] md:h-[70vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold">Kinh Tế Việt Nam</h1>
              <h2 className="text-xl md:text-2xl text-white/95">Từ Đổi Mới đến Hội Nhập Toàn Cầu</h2>
              <p className="max-w-2xl text-white/85">Từ một nền kinh tế bao cấp, Việt Nam đã trở thành một trong những quốc gia tăng trưởng nhanh, tham gia sâu vào chuỗi giá trị toàn cầu.</p>
              <a href="#timeline"><Button className="bg-red-600 hover:bg-red-700 text-white">Xem hành trình hội nhập</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Trụ cột phát triển kinh tế</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Công Nghiệp", desc: "Điện tử, dệt may, chế biến", image: "https://hdll.vn/FileUpload/Images/vinfast.jpg" },
            { title: "Nông Nghiệp", desc: "Lúa gạo, cà phê, thuỷ sản", image: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3efb81edcdb3b6dece12b8c3f5dd475625f419c800c694a5e808cb4e2910ff4be6a916c59155e9d2a01be61f6ea02b8af51/a13-9757.jpg" },
            { title: "Thương Mại", desc: "Xuất khẩu > 400 tỷ USD", image: "https://ktmt.vnmediacdn.com/images/2021/06/17/13-1623923237-anhh-thuong-mai.jpg" },
            { title: "Đầu Tư Quốc Tế", desc: "FDI từ 143 quốc gia", image: "https://cdn.vietnambiz.vn/2019/8/8/tao-dieu-kien-thuan-loi-cho-nha-dau-tu-nuoc-ngoaigrande-1565258935581935755316.jpg"},
          ].map((p) => (
            <Card key={p.title} className="p-0 bg-black/30 border border-amber-800/40 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-32 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="font-semibold text-white">{p.title}</div>
                <div className="text-sm text-white/80">{p.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-gradient-to-b from-[#1a1009] to-[#2a1a0c] py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h3 className="text-3xl font-serif font-bold mb-8">Timeline hội nhập kinh tế</h3>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-amber-800/40" />
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { year: 1986, title: "Đổi Mới", image: "https://images.hcmcpv.org.vn//Uploads/Image/310120221547376E/anh%2033.jpg" },
                { year: 1995, title: "ASEAN & bình thường hoá với Mỹ", image: "https://www.shutterstock.com/shutterstock/videos/1111092433/thumb/12.jpg?ip=x480" },
                { year: 2007, title: "Gia nhập WTO", image: "https://www.shutterstock.com/shutterstock/videos/1066412641/thumb/1.jpg?ip=x480" },
                { year: 2015, title: "AEC", image: "https://kinhtevadubao.vn/stores/news_dataimages/kinhtevadubaovn/122015/31/16/canh-cua-aec-da-chinh-thuc-mo-ra-05-.9007.jpg" },
                { year: 2020, title: "EVFTA, RCEP", image: "https://phaply.net.vn/zoom-share/1200x630/uploads/wp-content/uploads/2021/04/1-8.jpg" },
                { year: 2023, title: "Top 20 thương mại", image: "https://cdn-images.vtv.vn/562122370168008704/2023/10/27/vn271023-1698376963948617395645.jpg" },
              ].map((m) => (
                <div key={m.year} className="relative">
                  <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400" />
                  <Card className="bg-black/30 border border-amber-800/40 overflow-hidden text-center group">
                    <div className="relative overflow-hidden">
                      <img src={m.image} alt={`${m.year} ${m.title}`} className="w-full h-24 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <div className="text-xl font-semibold">{m.year}</div>
                      <div className="text-white/80 text-sm">{m.title}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global value chain */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Việt Nam trong chuỗi giá trị toàn cầu</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Samsung", desc: "~50% smartphone toàn cầu sản xuất tại Việt Nam", image: "https://images.samsung.com/vn/smartphones/galaxy-z-fold7/images/galaxy-z-fold7-features-kv.jpg?imbypass=true" },
            { title: "Nike, Adidas", desc: "~40% hàng xuất khẩu đến từ Việt Nam", image: "https://dnsg.1cdn.vn/2024/11/29/nike-va-adidas-1.jpg" },
            { title: "Thương hiệu mới", desc: "VinFast, FPT, VNG… biểu tượng kinh tế số", image: "https://mangfpt.vn/wp-content/uploads/2021/06/gioi-thieu-ve-nha-mang-FPT.jpg" },
            { title: "Nông sản chủ lực", desc: "Top 3 xuất khẩu cà phê, điều, hồ tiêu", image: "https://file.hstatic.net/1000383842/article/an_c787758d12eb44f0a13c637e298c72eb.png" },
          ].map((i) => (
            <Card key={i.title} className="p-0 bg-black/30 border border-amber-800/40 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src={i.image} alt={i.title} className="w-full h-32 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              </div>
              <div className="p-4">
                <div className="font-semibold text-white">{i.title}</div>
                <div className="text-white/80 text-sm">{i.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits & challenges */}
      <section className="bg-gradient-to-b from-[#2a1a0c] to-[#120c06] py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Lợi ích của hội nhập</h3>
            <ul className="space-y-2 text-white/90 list-disc pl-5">
              <li>Thương mại: xuất khẩu tăng hàng trăm lần so với 1986</li>
              <li>Lao động: hàng chục triệu việc làm mới</li>
              <li>Công nghệ: bứt phá chuyển đổi số, AI, Fintech</li>
              <li>Đời sống: GDP đầu người tăng mạnh</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Thách thức</h3>
            <ul className="space-y-2 text-white/90 list-disc pl-5">
              <li>Cạnh tranh quốc tế khốc liệt</li>
              <li>Nguy cơ phụ thuộc FDI</li>
              <li>Bài toán môi trường – phát triển bền vững</li>
              <li>Khoảng cách lao động – công nghệ – tri thức</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future strategy */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Tương lai & chiến lược</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-white/90 list-disc pl-5">
          <li>Mục tiêu 2045: quốc gia phát triển, thu nhập cao</li>
          <li>Kinh tế số ~ 30% GDP</li>
          <li>Công nghiệp xanh, năng lượng tái tạo</li>
          <li>Nâng cao thương hiệu quốc gia “Made in Vietnam”</li>
          <li>Đổi mới sáng tạo – AI – công nghệ lõi</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Việt Nam không chỉ hội nhập để tồn tại, mà để khẳng định vị thế trong nền kinh tế thế giới.</h3>
        <a href="/exchange"><Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">Giao Thoa Văn Hoá</Button></a>
      </section>
    </main>
  )
}


