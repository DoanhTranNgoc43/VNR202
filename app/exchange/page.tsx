"use client"

import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import SiteHeader from "../../components/site-header"

export default function ExchangePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c06] via-[#1a1009] to-[#2a1a0c] text-white">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://dsa.ueh.edu.vn/wp-content/uploads/2025/04/anh-1.jpg " alt="Giao thoa văn hoá" className="w-full h-[60vh] md:h-[70vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 h-[60vh] md:h-[70vh] flex flex-col">
          <SiteHeader />
          <div className="flex-1 flex items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold">Giao Thoa Văn Hoá</h1>
              <h2 className="text-xl md:text-2xl text-white/95">Khi Việt Nam gặp thế giới – và thế giới gặp Việt Nam</h2>
              <p className="max-w-2xl text-white/85">Hội nhập không xoá đi bản sắc. Nó tạo nên bản sắc mới – đa chiều hơn, hiện đại hơn, toàn cầu hơn.</p>
              <a href="#examples"><Button className="bg-red-600 hover:bg-red-700 text-white">Xem ví dụ giao thoa</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Văn hoá Việt trong đời sống hiện đại</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Truyền Thống Biến Hình", desc: "Áo dài → streetwear, fashion show", image: "https://i.ytimg.com/vi/SdxbgUXMd4M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Q_-1y0YGk_VXc4PH4Bo1IYBs_A" },
            { title: "Bản Sắc Thành Thương Hiệu", desc: "Cà phê phin → chuỗi toàn cầu", image: "https://bvhttdl.mediacdn.vn/291773308735864832/2022/3/22/duc4394-1647874701826226529343-1647918567879-1647918568017404649273.jpg" },
            {title: "Toàn Cầu Hoá", desc: "Nhạc trẻ Việt Nam vươn ra quốc tế - Flop quá thì ghi tên anh vào !", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Son_Tung_M-TP_%282014%29.jpg/250px-Son_Tung_M-TP_%282014%29.jpg"},
          ].map((c) => (
            <Card key={c.title} className="p-0 bg-black/30 border border-amber-800/40 overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-36 object-cover" />
              <div className="p-5">
                <div className="mt-1 font-semibold text-white">{c.title}</div>
                <div className="text-sm text-white/80">{c.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#1a1009] to-[#2a1a0c] py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-6 items-center">
          <img src="https://aegvietnam.edu.vn/wp-content/uploads/2021/03/lam-quen-voi-mo-hinh-steam-truoc-khi-du-hoc-my.jpg.webp" alt="Ảnh hưởng quốc tế" className="w-full h-80 object-cover rounded-xl border border-amber-800/40" />
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4">Ảnh hưởng quốc tế tại Việt Nam</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/90">
              <div className="font-semibold">Ẩm thực</div><div>Pizza vị phở bò, burger chả cá</div>
              <div className="font-semibold">Giáo dục</div><div>Mô hình STEAM, song ngữ, du học</div>
              <div className="font-semibold">Lifestyle</div><div>Black Friday, Halloween, Valentine</div>
              <div className="font-semibold">Công nghệ</div><div>TikTok, Shopee, fintech, AI</div>
              <div className="font-semibold">Ngôn ngữ</div><div>Gen Z trộn Anh–Việt (okela, deadline, flex)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6">Từ Văn Hoá → Kinh Tế</h3>
        <p className="text-white/85 mb-4">Hội nhập giúp văn hoá trở thành sản phẩm kinh tế.</p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { left: "Ẩm thực", right: "Phở, cà phê, bún chả tại 60+ quốc gia", image: "https://media.istockphoto.com/id/503129686/vi/anh/ph%E1%BB%9F-vi%E1%BB%87t-nam-v%E1%BB%9Bi-s%E1%BB%91t-sriracha-cay-b%E1%BA%AFn-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng.jpg?s=612x612&w=0&k=20&c=38zY6Qo2UiC0wjvVkCdCQCClYpS7PUvLgvf4zCzX1U8=" },
            { left: "Trang phục", right: "Áo dài, runway Paris, NFT thời trang", image: "https://c4.wallpaperflare.com/wallpaper/199/308/972/hat-flowers-asian-women-wallpaper-preview.jpg" },
            { left: "Nghệ thuật", right: "Múa rối nước, cải lương lưu diễn", image: "https://haycafe.vn/wp-content/uploads/2022/01/anh-dep-ve-nghe-thuat-mua-roi-nuoc.jpeg" },
            { left: "Thủ công", right: "Gốm Bát Tràng, mây tre đan Amazon", image: "https://ktmt.vnmediacdn.com/thumb_x600x400/images/2022/03/15/30-1647333443-lang-gom-bat-trang-3.jpg" },
          ].map((r, i) => (
            <Card key={i} className="p-0 bg-black/30 border border-amber-800/40 overflow-hidden">
              <img src={r.image} alt={r.left} className="w-full h-28 object-cover" />
              <div className="p-4">
                <div className="font-semibold text-white">{r.left}</div>
                <div className="text-sm text-white/80">{r.right}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#2a1a0c] to-[#120c06] py-14">
        <div className="max-w-5xl mx-auto px-4 md:px-10 text-center space-y-4">
          <blockquote className="text-xl md:text-2xl font-serif">“Gen Z Việt Nam: Giữ truyền thống, sống toàn cầu.”</blockquote>
          <div className="grid md:grid-cols-3 gap-4 text-white/90">
            <Card className="bg-white/30 border border-amber-800/40 p-4">70% dùng mạng xã hội quốc tế</Card>
            <Card className="bg-white/30 border border-amber-800/40 p-4">60% theo dõi K-pop/K-drama nhưng vẫn mặc áo dài</Card>
            <Card className="bg-white/30 border border-amber-800/40 p-4">Startup Việt xuất khẩu sản phẩm văn hoá</Card>
          </div>
        </div>
      </section>

      {/* Pros vs Cons */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-14">
        <h3 className="text-3xl font-serif font-bold mb-6 text-center">Cơ hội & Thách thức</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-5 bg-black/30 border border-amber-800/40 text-center">
            <h4 className="font-semibold mb-3 text-white">Cơ hội</h4>
            <ul className="list-disc pl-5 space-y-1 text-white/90">
              <li>Văn hoá lan tỏa ra thế giới</li>
              <li>Tạo sản phẩm sáng tạo mới</li>
              <li>Kinh tế sáng tạo bùng nổ</li>
            </ul>
          </Card>
          <Card className="p-5 bg-black/30 border border-amber-800/40 text-center">
            <h4 className="font-semibold mb-3 text-white">Thách thức</h4>
            <ul className="list-disc pl-5 space-y-1 text-white/90">
              <li>Nguy cơ “Tây hoá” mất gốc</li>
              <li>Bản sắc bị thương mại hoá</li>
              <li>Lệch chuẩn văn hoá ở giới trẻ</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Giao thoa là cầu nối để Việt Nam bước ra thế giới.</h3>
        <div className="flex gap-3 justify-center">
          <a href="/culture"><Button variant="outline" className="border-white/60 text-white hover:bg-white/10">Quay lại Văn Hoá</Button></a>
          <a href="/economy"><Button className="bg-red-600 hover:bg-red-700 text-white">Khám phá Kinh Tế</Button></a>
        </div>
      </section>
    </main>
  )
}


