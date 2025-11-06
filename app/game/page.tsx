"use client"

import InteractiveGame from "../../components/interactive-game"

export default function GamePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <InteractiveGame onBack={() => (window.location.href = "/")} />
      </div>
    </main>
  )
}


