"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Globe } from "lucide-react";

interface AudioFiles {
  english?: string;
  polish?: string;
  spanish?: string;
  german?: string;
}

const languageLabels: Record<string, string> = {
  english: "EN",
  polish: "PL",
  spanish: "ES",
  german: "DE",
};

interface AudioPlayerProps {
  audioFiles: AudioFiles;
  title?: string;
}

export default function AudioPlayer({ audioFiles, title }: AudioPlayerProps) {
  const safeAudioFiles = audioFiles ?? {};
  const availableLangs = Object.entries(safeAudioFiles)
    ?.filter?.(([, url]) => !!url)
    ?.map?.(([lang]) => lang) ?? [];

  const [currentLang, setCurrentLang] = useState(availableLangs?.[0] ?? "english");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentUrl = safeAudioFiles?.[currentLang as keyof AudioFiles] ?? "";

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [currentLang]);

  const togglePlay = () => {
    if (!audioRef?.current || !currentUrl) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef?.current) return;
    const curr = audioRef.current.currentTime ?? 0;
    const dur = audioRef.current.duration ?? 0;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress(dur > 0 ? (curr / dur) * 100 : 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef?.current) return;
    const val = parseFloat(e?.target?.value ?? "0");
    const dur = audioRef.current.duration ?? 0;
    audioRef.current.currentTime = (val / 100) * dur;
    setProgress(val);
  };

  const formatTime = (t: number): string => {
    const safeT = t ?? 0;
    const mins = Math.floor(safeT / 60);
    const secs = Math.floor(safeT % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (availableLangs?.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border border-gray-100">
      <audio
        ref={audioRef}
        src={currentUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
      />

      {title && (
        <p className="text-xs font-medium text-text-light mb-3 flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" /> {title}
        </p>
      )}

      {/* Language Selector */}
      <div className="flex items-center gap-2 mb-3">
        <Globe className="w-4 h-4 text-text-light" />
        <div className="flex gap-1">
          {availableLangs?.map?.((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                currentLang === lang
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {languageLabels?.[lang] ?? lang?.toUpperCase?.() ?? ''}
            </button>
          )) ?? []}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-sm"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="flex-1 flex flex-col gap-1">
          <input
            type="range"
            min="0"
            max="100"
            value={progress ?? 0}
            onChange={handleSeek}
            className="audio-progress w-full h-1.5 rounded-full bg-gray-200 appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[10px] text-text-light">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-text-light hover:text-primary transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
