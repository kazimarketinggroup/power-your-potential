"use client";

import { useRef, useState } from "react";

// Deterministic bar heights (same on server and client) shaped like a voice waveform.
const BARS = Array.from({ length: 64 }, (_, i) => {
  const wave = Math.abs(Math.sin(i * 0.55)) * 12;
  const jitter = ((i * 7919) % 11) - 5;
  return Math.round(Math.min(24, Math.max(4, 8 + wave + jitter)));
});

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      // No audio source available yet — keep the UI inert.
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-full items-center gap-4 rounded-full bg-surface/90 py-2.5 pl-3 pr-6 backdrop-blur-md sm:w-fit sm:pr-9">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause introduction" : "Play introduction"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-gold-light to-gold-deep transition-transform hover:scale-105"
      >
        {playing ? (
          <svg viewBox="0 0 16 16" className="h-4 w-4 fill-[#2b2007]" aria-hidden>
            <path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="ml-0.5 h-4 w-4 fill-[#2b2007]" aria-hidden>
            <path d="M4 2.5v11l9-5.5-9-5.5Z" />
          </svg>
        )}
      </button>

      <div className="flex h-8 min-w-0 flex-1 items-center gap-[3px] overflow-hidden" aria-hidden>
        {BARS.map((height, i) => (
          <span
            key={i}
            style={{ height, animationDelay: `${i * 45}ms` }}
            className={`w-[2px] shrink-0 rounded-full ${
              playing
                ? "animate-pulse bg-gold-light/80"
                : i % 4 === 0
                  ? "bg-[#a09a91]"
                  : "bg-[#6f6a62]"
            }`}
          />
        ))}
      </div>

      <audio ref={audioRef} src="/audio/pyp-intro.mp3" preload="none" onEnded={() => setPlaying(false)} />
    </div>
  );
}
