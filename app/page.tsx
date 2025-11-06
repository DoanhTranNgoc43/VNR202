"use client"

import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
        <img src="https://special.nhandan.vn/vanhoavietnamthongnhattrongdadang/assets/rldpmd4uQr/8ef9fb6c3d81e7dfbe90-1875x1250.jpg " alt="Explore Vietnam" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.15),rgba(0,0,0,0.65)_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8 h-full flex flex-col">
        <div className="flex items-center justify-between text-white/90">
          <div className="font-bold tracking-wider">VIETNAM</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/culture" className="hover:text-white">Văn Hoá</a>
            <a href="/economy" className="hover:text-white">Kinh Tế</a>
            <a href="/exchange" className="hover:text-white">Giao Thoa</a>
            <a href="https://tapchicongsan.org.vn/web/guest/van_hoa_xa_hoi/-/2018/1041102/xay-dung-nen-van-hoa-viet-nam-ngay-cang-ben-vung%2C-tien-bo%2C-ban-sac%2C-tuong-xung-voi-trinh-do-phat-trien-kinh-te---xa-hoi-hien-nay-theo-tinh-than-dai-hoi-xiii-cua-dang.aspx" className="hover:text-white">Tin tức</a>
          </nav>
          <a href="/game"> <Button className="bg-red-600 hover:bg-red-700 text-white">Chơi game trải nghiệm văn hoá Việt Nam</Button></a>
        </div>

        <div className="flex-1 grid md:grid-cols-[1.1fr_.9fr] items-center">
          <div className="text-white">
            <div className="text-lg uppercase tracking-widest text-white/80">Văn Hóa</div>
            <h1 className="mt-2 text-6xl md:text-8xl font-black leading-[0.9]">Trong Hội Nhập Kinh Tế Quốc Tế</h1>
            <p className="mt-4 max-w-xl text-white/85"></p>
            <div className="mt-6 flex gap-3">
              <a href="/game"><Button className="bg-white text-black hover:bg-white/90">Chơi game trải nghiệm văn hoá Việt Nam</Button></a>
              <span className="relative group">
                <Button variant="outline" className="bg-white text-black hover:bg-white/90">Xem bản đồ</Button>
                <img
                  src="https://i.pinimg.com/736x/f1/3b/89/f13b89db31022c24f9144595c3bbb8c9.jpg"
                  alt="Vietnam map preview"
                  className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 mt-2 w-64 h-40 object-cover rounded-lg border border-white/30 shadow-xl"
                />
              </span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.pexels.com/photos/34469052/pexels-photo-34469052/free-photo-of-ph-n-vi-t-nam-truy-n-th-ng-trong-trang-ph-c-b-n-d-a-ngoai-tr-i.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Trang phục truyền thống Việt Nam"
              className="absolute right-4 top-6 w-60 h-96 object-cover border-2 border-white/80 rounded-[40px] shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {[
            { id: "intl", title: "Giao lưu quốc tế", desc: "Những hoạt động, sự kiện văn hóa Việt Nam lan ra thế giới", icon: "🌏" },
            { id: "heritage", title: "Di sản & Bản sắc", desc: "Tìm hiểu các giá trị văn hóa truyền thống được gìn giữ qua thời kỳ hội nhập", icon: "🏛️" },
            { id: "coop", title: "Hợp tác kinh tế – văn hóa", desc: "Các mô hình kết hợp văn hóa & kinh tế trong thời kỳ mở cửa", icon: "🤝" },
          ].map((c) => (
            <Card key={c.id} className="bg-black/50 border-white/10 text-white p-5">
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-2 font-semibold text-lg">{c.title}</h3>
              <p className="text-white/80 text-sm">{c.desc}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Scroll panels section */}
      <section className="bg-gradient-to-b from-[#120c06] to-[#2a1a0c] text-amber-100">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-12">
          {/* Intro summary */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Việt Nam – Bản sắc trong dòng chảy hội nhập</h2>
            <p className="text-amber-200/80 max-w-3xl mx-auto">Từ truyền thống ngàn đời đến hiện đại hoá, Việt Nam đang kết nối mạnh mẽ với thế giới bằng văn hoá, con người và kinh tế số. Hành trình hội nhập là sự giao thoa giữa di sản và đổi mới.</p>
          </div>
          {[
            {
              id: 1,
              title: "Văn hoá là gì?",
              subtitle: "Giới thiệu",
              text: "Văn hóa là tổng thể sống động các hoạt động và sáng tạo trong quá khứ và trong hiện tại. Qua các thế kỷ, hoạt động sáng tạo ấy đã hình thành nên một hệ thống các giá trị, các truyền thống và thị hiếu - những yếu tố xác định đặc tính riêng của mỗi dân tộc.",
      image: "https://www.pace.edu.vn/uploads/news/2024/02/tong-quan-ve-van-hoa.jpg",
              reverse: false,
            },
            {
              id: 2,
              title: "Văn hoá Việt Nam",
              subtitle: "Câu chuyện",
              text: "văn hoá Việt Nam là văn hoá của riêng Việt Nam, trong đó bao gồm toàn bộ các giá trị vật chất và tinh thần được tạo ra trong quá trình lao động, sinh sống… theo bề dài lịch sử dân tộc của Việt Nam.",
              image: "https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/trong-dong-dong-son.jpg",
              reverse: true,
            },
            {
              id: 3,
              title: "Đặc điểm của văn hoá",
              subtitle: "Đặc điểm",
              text: "- Tính lịch sử: Văn hoá được hình thành theo chiều dài lịch sử của nhân loại, phản ánh quá trình sáng tạo của con người trong một khoảng thời gian dài thậm chí gắn với bề dày lịch sử của một dân tộc. - Tính hệ thống: Tương tự như tính lịch sử, văn hoá cũng được đúc kết theo chuỗi các sự kiện, kết nối trong suốt chiều dài lịch sử gắn với quá trình phát triển của dân tộc, quốc gia.",
              image: "https://luathungson.vn/wp-content/uploads/2022/11/van-hoa-la-gi-3.jpg",
              reverse: false,
            },
          ].map((b) => (
            <div key={b.id} className={`grid md:grid-cols-2 gap-6 items-stretch`}> 
              <div className={`${b.reverse ? 'md:order-2' : ''} overflow-hidden rounded-xl border border-amber-800/40`}> 
                <img src={b.image} alt={b.title} className="w-full h-80 md:h-[420px] object-cover" />
              </div>
              <div className={`${b.reverse ? 'md:order-1' : ''} bg-black/30 border border-amber-800/40 rounded-xl p-8 flex flex-col justify-center`}> 
                <div className="text-sm uppercase tracking-widest text-amber-300">{b.subtitle}</div>
                <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-amber-200">{b.title}</h3>
                <p className="mt-4 text-amber-200/80 leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      <section className="bg-[#0e0a07] text-amber-100">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">Truyền thống & Hiện đại</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-black/30 border border-amber-800/40 rounded-xl overflow-hidden">
              <img src="https://www.quanlynhanuoc.vn/wp-content/uploads/2022/10/thuong-hieu-lang-nghe-truyen-thong-ha-noi.jpg" alt="Truyền thống" className="w-full h-72 md:h-96 object-cover" />
              <div className="p-4"><div className="font-semibold">Truyền thống</div><p className="text-sm text-amber-200/80">Áo dài, chợ quê, làng nghề – di sản bản sắc.</p></div>
            </div>
            <div className="bg-black/30 border border-amber-800/40 rounded-xl overflow-hidden">
              <img src="https://images2.thanhnien.vn/528068263637045248/2025/7/26/aodai1-1753535915713343848658.jpg" alt="Hiện đại" className="w-full h-72 md:h-96 object-cover" />
              <div className="p-4"><div className="font-semibold">Hiện đại</div><p className="text-sm text-amber-200/80">Thời trang hoá, công nghệ, ẩm thực Michelin.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/slider section */}
      <section className="bg-[#0b0a09] text-amber-100">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Sắc màu văn hóa Việt Nam qua góc nhìn của những nữ nghệ sĩ nhiếp ảnh </h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border border-amber-800/40 bg-black/30">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/IyDT3OJaBaM"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
      </div>
      </section>
    </main>
  )
}
