"use client"

import SiteHeader from "../../components/site-header"
import PuzzleGame from "../../components/puzzle-game"

export default function PuzzlePage() {
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
          
          <div className="mt-10 md:mt-20">
            <PuzzleGame />
          </div>
        </div>
      </section>
    </main>
  )
}

