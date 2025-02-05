"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const MovieBanner = ({ videoUrl }) => {
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Stato per controllare se è muto
  const [isShowVideo, setIsShowVideo] = useState(false);

  // Cambia lo stato tra muto e audio attivato
  const toggleMute = () => {
    setIsMuted((prev) => !prev); 
  };

  // Assicura che ReactPlayer venga caricato solo nel client
  useEffect(() => {
    setIsClient(true); 
  }, []);

  // Mostra per 5 secondi un anteprima dopo il video
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowVideo(!isShowVideo);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Evita che ReactPlayer venga renderizzato lato server
  if (!isClient) {
    return null; 
  }

  return (
    <div className="relative w-full" style={{ aspectRatio: '16/9' }} onClick={toggleMute}>
      {!isShowVideo ? (
        <>
          <Image 
            src='/images/sonic_red.webp'
            alt="Cover"
            layout="fill"
            
            style={{ objectFit: "cover" }} 
          />
          <div style={{backgroundColor: 'black', width: '100%', height:'114px', position: 'absolute', bottom: '0' }}></div>
        </>
        ) : (
        <>
          <ReactPlayer
            url={videoUrl}
            playing
            loop={false}
            muted={isMuted}
            controls={false}
            width="100%"
            height="100%"
            // Impedisce interazioni con il video
            config={{
              youtube: { playerVars: { modestbranding: 1, showinfo: 0 } }, // Nasconde il logo
            }}
          />
          <div style={{position: 'absolute', top: '50%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <button>▶️ Trailer</button>
            <button>Altre info pagina film</button>
          </div>
          
          <p style={{position: 'absolute', bottom: '200px', right: '10%'}}>
            {isMuted ? "Click to unmute" : "Click to mute"} {/* Testo per indicare lo stato */}
          </p>
          
        </>
        )}
    </div>
  );
};

export default MovieBanner;

