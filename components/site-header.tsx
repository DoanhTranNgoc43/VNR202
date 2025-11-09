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
    <div className="relative z-50 pt-10 md:pt-12 w-full">
      <div className="w-full px-2 md:px-4 lg:px-6 py-4 md:py-6">
        <div className="flex items-center text-white/90 gap-1.5 md:gap-2 w-full">
          <Link 
            href="/" 
            className="relative font-semibold tracking-wider text-lg md:text-xl lg:text-2xl transition-all duration-300 hover:scale-110 group cursor-pointer px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
          >
            <span className="relative z-10 text-white inline-block">
              Việt Nam
            </span>
          </Link>
         <nav className="flex gap-1.5 md:gap-2 text-xs md:text-sm items-center flex-1 flex-nowrap">
            <Link 
              href="/culture" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Văn Hoá
              </span>
            </Link>
            <Link 
              href="/economy" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Kinh Tế
              </span>
            </Link>
            
            <Link 
              href="/exchange" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Giao Thoa
              </span>
            </Link>
            <Link 
              href="/analysis/challenges" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Trầm tích văn hoá
              </span>
            </Link>
            <Link 
              href="/analysis/solutions" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Đường lối của đảng
              </span>
            </Link>
       
            <a  
              href="https://tapchicongsan.org.vn/web/guest/van_hoa_xa_hoi/-/2018/1041102/xay-dung-nen-van-hoa-viet-nam-ngay-cang-ben-vung%2C-tien-bo%2C-ban-sac%2C-tuong-xung-voi-trinh-do-phat-trien-kinh-te---xa-hoi-hien-nay-theo-tinh-than-dai-hoi-xiii-cua-dang.aspx" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Tin tức
              </span>
            </a>
            <Link 
              href="/experience" 
              className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
            >
              <span className="relative z-10 text-white inline-block whitespace-nowrap">
                Trải nghiệm của nhóm
              </span>
            </Link>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link 
                  href="/team"
                  className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer text-xs md:text-sm whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0"
                >
      <span className="relative z-10 text-white inline-block whitespace-nowrap">
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
                <button className="relative font-semibold transition-all duration-300 hover:scale-105 group cursor-pointer text-xs md:text-sm whitespace-nowrap px-2 md:px-2.5 py-1.5 md:py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm flex-shrink-0">
      <span className="relative z-10 text-white inline-block whitespace-nowrap">
        Trò chơi Văn Hoá
      </span>
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
          </nav>
        </div>
      </div>
    </div>
  )
}

