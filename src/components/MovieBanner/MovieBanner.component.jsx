"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ReactPlayer from "react-player"

const MovieBanner = ({ videoUrl }) => {
  const [settings, setSettings] = useState({
    isClient: false,
    isMuted: true,
    isShowVideo: false,
  })

  const toggleMute = () => {
    setSettings((prevState) => ({ ...prevState, isMuted: !prevState.isMuted }))
  }

  const handleEndVideo = () => {
    setSettings((prevState) => ({ ...prevState, isShowVideo: false }))
  }

  useEffect(() => {
    setSettings((prevState) => ({ ...prevState, isClient: true }))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSettings((prevState) => ({ ...prevState, isShowVideo: true }))
    }, 5000)
  }, [])

  if (!settings.isClient) {
    return null
  }

  return (
    <div className="relative w-full" style={{ aspectRatio: "16/6.8" }} onClick={toggleMute}>
      <div className="absolute inset-0">
        {!settings.isShowVideo ? (
          <Image src="/images/sonicRed.webp" alt="Cover" layout="fill" objectFit="cover" />
        ) : (
          <ReactPlayer
            url={videoUrl}
            playing
            loop={false}
            muted={settings.isMuted}
            controls={false}
            onEnded={handleEndVideo}
            width="100%"
            height="100%"
            config={{
              youtube: { playerVars: { modestbranding: 1, showinfo: 0 } },
            }}
          />
        )}
      </div>
      <div className="absolute top-1/2 left-4 flex flex-col gap-4 transform -translate-y-1/2">
        <button className="px-4 py-2 rounded">▶️ Trailer</button>
        <button className="px-4 py-2 rounded">Altre info pagina film</button>
      </div>
      <p className="absolute bottom-8 right-8 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
        {settings.isMuted ? "Click to unmute" : "Click to mute"}
      </p>
    </div>
  )
}

export default MovieBanner;