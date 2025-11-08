"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Volume2, VolumeX } from "lucide-react"

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const playerRef = useRef<any>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setIsLoaded(true)
      return
    }

    // Load YouTube IFrame API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Callback when API is ready
    window.onYouTubeIframeAPIReady = () => {
      setIsLoaded(true)
    }

    return () => {
      // Cleanup
      if (playerRef.current) {
        try {
          playerRef.current.destroy()
        } catch (e) {
          // Ignore errors
        }
      }
    }
  }, [])

  // Initialize YouTube player when API is ready
  useEffect(() => {
    if (!isLoaded || playerRef.current) return

    const START_TIME = 15 // Bắt đầu từ giây thứ 15

    playerRef.current = new window.YT.Player("background-music", {
      videoId: "-xI0V7QLYbM",
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: "-xI0V7QLYbM",
        controls: 0,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        playsinline: 1,
        fs: 0,
        disablekb: 1,
        showinfo: 0,
        mute: 0,
        start: START_TIME, 
      },
      events: {
        onReady: (event: any) => {
          event.target.setVolume(50)
          event.target.seekTo(START_TIME, true) // Nhảy đến giây thứ 15
          event.target.playVideo()
        },
        onStateChange: (event: any) => {
          // Khi video kết thúc và loop lại, nhảy về giây thứ 15
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(START_TIME, true)
          }
        },
      },
    })
  }, [isLoaded])

  useEffect(() => {
    if (!playerRef.current) return

    const START_TIME = 15 // Bắt đầu từ giây thứ 15

    try {
      if (isMuted) {
        playerRef.current.setVolume(0)
      } else {
        playerRef.current.setVolume(50)
        // Đảm bảo nhạc bắt đầu từ giây 15 khi bật lại
        const currentTime = playerRef.current.getCurrentTime()
        if (currentTime < START_TIME) {
          playerRef.current.seekTo(START_TIME, true)
        }
        playerRef.current.playVideo()
      }
    } catch (error) {
      console.error("Error controlling YouTube player:", error)
    }
  }, [isMuted])

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      {/* Nút điều khiển nhạc */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleToggleMute}
          variant="outline"
          className="bg-black/50 border-white/20 text-white hover:bg-black/70 rounded-full w-12 h-12 p-0 shadow-lg"
          title={isMuted ? "Bật nhạc" : "Tắt nhạc"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </div>

      {/* Hidden YouTube iframe for background music */}
      <div className="fixed -top-[9999px] opacity-0 pointer-events-none">
        <div id="background-music" ref={iframeRef} />
      </div>
    </>
  )
}

