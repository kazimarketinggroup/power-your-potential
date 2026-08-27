"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        controls={started}
        playsInline
        className="block h-auto w-full"
      />

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1.5 h-9 w-9 fill-white/90" aria-hidden>
              <path d="M7 4.5v15l13-7.5-13-7.5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
