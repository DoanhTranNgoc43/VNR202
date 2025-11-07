"use client"

import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import SiteHeader from "../../components/site-header"

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-amber-100">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://tapchicongsan.org.vn/documents/20182/408068301/Tac+pham+Lop+hoc+hat+quan+ho+-+Tac+gia+Nguyen+Manh+Linh+%28Tuyen+Quang%29.jpg/2169726b-29dd-46e1-9103-26e311de11a2?t=1725955321000" alt="Văn hoá Việt Nam" className="w-full h-[60vh] md:h-[70vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[60vh] md:h-[70vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="text-white space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold">Văn Hoá Việt Nam</h1>
              <h2 className="text-xl md:text-2xl text-white/90">Bản sắc ngàn năm – Lan tỏa toàn cầu</h2>
              <p className="max-w-2xl text-white/85">Văn hoá là nền tảng tinh thần của dân tộc. Trong thời kỳ hội nhập, bản sắc càng trở thành sức mạnh cạnh tranh mềm của Việt Nam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Các trụ cột văn hoá Việt Nam</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {title: "Di sản", desc: "Di sản vật thể & phi vật thể UNESCO", image: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a39805f374379f7857a0f99accf283d00f33843a42a2f8092de8320de2a1462b33557d72b5f1feaa821cf56fc1792750bc6cc16c8877b7786236b6ada0347396aec6e4ffbf2a89e0e2b57e8a4dadf8d58b48c195c5fe6d520984eb09ce86f9b1c1fbb/z6694153730445-6d1c355c6824382452e78ed187cf7750-5813-5729.jpg" },
            { title: "Trang phục", desc: "Áo dài, thổ cẩm, sắc phục dân tộc", image: "https://bvhttdl.mediacdn.vn/291773308735864832/2022/11/18/la-hu-16687504593971950567539-1668757766339-1668757766418130402471.jpg" },
            {title: "Nghệ thuật", desc: "Nhạc cụ, sân khấu, lễ hội", image: "https://bvhttdl.mediacdn.vn/zoom/600_315/2021/1/28/dan-trung-1611826501304704364989-crop-16118265123241222963276.png" },
            {title: "Ẩm thực", desc: "3 miền – ẩm thực thành thương hiệu", image: "https://paoquan.vn/wp-content/uploads/2023/07/mam-co-nguoi-thai.jpg" },
          ].map((p) => (
            <Card key={p.title} className="p-0 bg-black/30 border border-amber-800/40 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
              <div className="p-5">
                <div className="mt-2 font-semibold text-amber-100">{p.title}</div>
                <div className="text-sm text-amber-200/80">{p.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* UNESCO Grid */}
      <section className="bg-gradient-to-b from-[#1a1009] to-[#2a1a0c] py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <h3 className="text-3xl font-serif font-bold mb-6">Di sản UNESCO</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { type: "Phi vật thể", name: "Nhã nhạc cung đình Huế", year: 2003, image: "https://static.vinwonders.com/production/optimize_nha-nhac-cung-dinh-hue-topbanner_optimized.jpg" },
              { type: "Phi vật thể", name: "Không gian văn hoá Cồng chiêng", year: 2005, image: "https://images.vietnamtourism.gov.vn/vn/images/2023/thang12/663-dak_lak-tonninh70%40gmail.jpg" },
              { type: "Vật thể", name: "Hoàng thành Thăng Long", year: 2010, image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/7/1189286/Anh-Hoang-Thanh-Than-11.jpg" },
              { type: "Tư liệu", name: "Mộc bản triều Nguyễn", year: 2009, image: "https://toquoc.mediacdn.vn/2019/1/31/moc-ban-2-15489278013501706746235-crop-15489290579141800893559.jpg" },
            ].map((i) => (
              <Card key={i.name} className="p-0 border border-amber-800/40 bg-black/30 overflow-hidden">
                <img src={i.image} alt={i.name} className="w-full h-28 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-amber-300">{i.type}</div>
                  <div className="font-semibold text-amber-100">{i.name}</div>
                  <div className="text-sm text-amber-200/80">Năm công nhận: {i.year}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img src="https://cdn.24h.com.vn/upload/1-2021/images/2021-02-17/anh-7-1613533743-364-width650height975.jpg" alt="Integration" className="w-full h-72 md:h-96 object-cover rounded-xl border border-amber-800/40" />
          <div className="space-y-3">
            <h3 className="text-3xl font-serif font-bold">Từ bản sắc địa phương → sức mạnh mềm toàn cầu</h3>
            <ul className="list-disc pl-5 space-y-1 text-amber-200/90">
              <li>Ẩm thực Việt Nam góp mặt Michelin Guide</li>
              <li>Áo dài xuất hiện tại sự kiện quốc tế</li>
              <li>Phim – âm nhạc – KOLs Việt Nam vươn ra thị trường nước ngoài</li>
              <li>Lễ hội truyền thống thành sản phẩm du lịch văn hoá</li>
            </ul>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Bảo tồn & phát triển</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Số hoá di sản", image: "https://phapluatxahoi.kinhtedothi.vn/stores/news_dataimages/2023/102023/16/20/in_article/1fc8712c15cb4d83f99f8b7a0dedf981.jpg?rt=20231016202830" },
            { title: "Du lịch văn hoá – live tour 360°", image: "https://techvr360.com/wp-content/uploads/2020/12/nhahang.png" },
            { title: "Giáo dục – đưa văn hoá vào sách mới", image: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef1734e246fd575e1c937d359d6862d061e8851bad657d8b02afd452565eaa7230c2381094306107c33e4c998a37d06158/121-8377.jpg" },
            { title: "Startup dùng chất liệu truyền thống", image: "https://daihoc.fpt.edu.vn/wp-content/uploads/2025/09/PEACH-48-scaled.jpg" },
          ].map((item) => (
            <Card key={item.title} className="p-0 border border-amber-800/40 bg-black/30 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-28 object-cover" />
              <div className="p-4 text-sm text-amber-200/90">{item.title}</div>
            </Card>
          ))}
        </div>
      </section>


      <section className="bg-[#0b0a09] text-amber-100">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Gìn giữ, phát huy bản sắc văn hóa trong quá trình hội nhập quốc tế</h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border border-amber-800/40 bg-black/30">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/b72vS1yMeds"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Giữ gìn bản sắc không phải là đứng yên, mà là đưa văn hoá Việt đến với thế giới.</h3>
        <a href="/economy"><Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">Khám phá Kinh Tế Hội Nhập</Button></a>
      </section>
    </main>
  )
}


