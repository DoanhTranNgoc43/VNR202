"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <div className="relative z-50 pt-10 md:pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-8">
        <div className="flex items-center justify-between text-white/90">
          <Link 
            href="/" 
            className="relative font-bold tracking-wider text-2xl md:text-3xl transition-all duration-300 hover:scale-110 group cursor-pointer"
          >
            {/* Gradient text với animation */}
            <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
              Việt Nam
            </span>
            {/* Glow effect khi hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-0">
            Việt Nam
            </span>
            {/* Text shadow effect khi hover */}
            <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_12px_rgba(220,38,38,1),0_0_24px_rgba(234,179,8,0.5)] -z-0">
            Việt Nam
            </span>
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse bg-gradient-to-r from-red-600/20 via-yellow-400/20 to-red-600/20 blur-sm -z-10 scale-110"></span>
          </Link>
         <nav className="hidden md:flex gap-6 text-base md:text-lg">
            <Link 
              href="/culture" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {pathname === "/culture" ? (
                <span className="relative z-10 text-white inline-block">
                  Văn Hoá
                </span>
              ) : (
                <>
                  <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
                    Văn Hoá
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0">
                    Văn Hoá
                  </span>
                  <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0">
                    Văn Hoá
                  </span>
                </>
              )}
            </Link>
            <Link 
              href="/economy" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {pathname === "/economy" ? (
                <span className="relative z-10 text-white inline-block">
                  Kinh Tế
                </span>
              ) : (
                <>
                  <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
                    Kinh Tế
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0">
                    Kinh Tế
                  </span>
                  <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0">
                    Kinh Tế
                  </span>
                </>
              )}
            </Link>
            
            <Link 
              href="/exchange" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {pathname === "/exchange" ? (
                <span className="relative z-10 text-white inline-block">
                  Giao Thoa
                </span>
              ) : (
                <>
                  <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
                    Giao Thoa
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0">
                    Giao Thoa
                  </span>
                  <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0">
                    Giao Thoa
                  </span>
                </>
              )}
            </Link>
            <a  
              href="https://tapchicongsan.org.vn/web/guest/van_hoa_xa_hoi/-/2018/1041102/xay-dung-nen-van-hoa-viet-nam-ngay-cang-ben-vung%2C-tien-bo%2C-ban-sac%2C-tuong-xung-voi-trinh-do-phat-trien-kinh-te---xa-hoi-hien-nay-theo-tinh-than-dai-hoi-xiii-cua-dang.aspx" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
                Tin tức
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0">
                Tin tức
              </span>
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0">
                Tin tức
              </span>
            </a>
          </nav>
          <HoverCard>
  <HoverCardTrigger asChild>
    <Link 
      href="/team"
      className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer text-base md:text-lg"
    >
      <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
        Nhóm thực hiện dự án
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0">
        Nhóm thực hiện dự án
      </span>
      <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0">
        Nhóm thực hiện dự án
      </span>
    </Link>
  </HoverCardTrigger>

  <HoverCardContent className="w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-2 border-red-500/30 shadow-xl">
    <div className="space-y-3">
      <div>
        <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
          SE1802 - VNR202 - G8
        </h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 italic">
          Dự án: <span className="font-medium not-italic">“Trầm tích Văn hoá Việt Nam trong Hội nhập Kinh tế Quốc tế”</span>
        </p>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
          Thành viên thực hiện:
        </p>
        <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Trần Đại Dương</span> – HE172344
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Nguyễn Văn Dũng</span> – HE171465
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Đỗ Trí Trọng</span> – HE170108
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Nguyễn Thị Diệu Linh</span> – HE172208
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Nguyễn Ngọc Quang</span> – HE171231
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"></span>
            <span className="font-medium">Trần Ngọc Doanh</span> – HE172637
          </li>
        </ul>
      </div>

      <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 italic">
        <span>“Lan toả tinh hoa văn hoá Việt qua góc nhìn số.”</span>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

  


<HoverCard>
  <HoverCardTrigger asChild>
    <button className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer text-base md:text-lg bg-transparent border-none">
      <span className="relative z-10 bg-gradient-to-r from-red-600 via-yellow-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
        Trò chơi Văn Hoá
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-0"></span>
      <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] -z-0"></span>
    </button>
  </HoverCardTrigger>

  <HoverCardContent className="w-72 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-2 border-red-500/30 shadow-xl">
    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <Link href="/game" className="hover:text-red-600 font-medium flex items-center gap-1">
        ⚡ Cuộc thi nhanh như chớp
        </Link>
      </li>
      <li>
        <Link href="/puzzle" className="hover:text-red-600 font-medium flex items-center gap-1">
          🧩 Ghép Tranh Văn Hoá Việt Nam
        </Link>
      </li>
    </ul>
  </HoverCardContent>
</HoverCard>



        </div>
      </div>
    </div>
  )
}

