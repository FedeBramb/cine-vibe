"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ReactPlayer from "react-player"

const bannerData = {
    title: "Sonic 3",
    overview: `Sonic, Knuckles e Tails si ritrovano a dover fronteggiare 
    un nuovo e formidabile nemico: Shadow, un misterioso villain con 
    poteri incredibili mai visti prima.`
};
  

const MovieBanner = ({ videoUrl }) => {
  const [settings, setSettings] = useState({
    isClient: false,
    isMuted: true,
    isShowVideo: false,
  })

  const { title, overview } = bannerData;

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
    }, 3000)
  }, [])

  if (!settings.isClient) {
    return null
  }

  // Stile
  const overlay = `absolute top-1/2 left-[70px] w-1/3 flex flex-col gap-10 transform -translate-y-1/2`;
  const toggleSound = `absolute bottom-56 right-8 bg-black bg-opacity-50 px-2 py-1 rounded cursor-pointer`;


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
        <div className={`${overlay}`}>
            <h3 className="text-8xl">{title}</h3>
            <p>{overview}</p>
            <div className="flex gap-5">
                <Link   
                    href='/movie/939243' 
                    className="overlay-buttons bg-white  text-black"
                >
                    <Image src='/play_32.png' alt="play" width={30} height={30} />
                    Riproduci
                </Link>
                <Link 
                    href='/movie/939243' className="overlay-buttons bg-gray-500 bg-opacity-60"
                >
                    <Image src='/icon-info.svg' alt="info" width={30} height={30} />
                    Altre info
                </Link>
            </div>
        </div>
        <p className={`${toggleSound}`}>
            {settings.isMuted ? 
              <Image width={50} height={50} alt="mute" src='/svgs/icons8-mute-50.png' /> 
              : 
              <Image width={50} height={50} alt="audio" src='/svgs/icons8-audio-50.png'/>}
        </p>
    </div>
  )
}

export default MovieBanner;