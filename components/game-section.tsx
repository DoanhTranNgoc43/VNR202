"use client"
import InteractiveGame from "./interactive-game"

interface GameSectionProps {
  onBack: () => void
}

export default function GameSection({ onBack }: GameSectionProps) {
  return <InteractiveGame onBack={onBack} />
}
