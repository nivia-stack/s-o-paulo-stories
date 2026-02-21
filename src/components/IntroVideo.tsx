import { useRef, useState } from "react";

interface IntroVideoProps {
  onFinished: () => void;
}

const IntroVideo = ({ onFinished }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">

      <video
        ref={videoRef}
        className="h-full w-full object-contain bg-background"
        playsInline
        onEnded={onFinished}
        src="/videos/intro.mp4"
      />


      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute z-50 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors w-24 h-24"
        >
          {/* Ícone de play */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-12 h-12 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
        {playing && (
        <button
          onClick={onFinished}
          className="absolute bottom-8 right-8 rounded-lg border border-primary/40 bg-background/80 px-6 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground z-50"
          style={{ fontFamily: "var(--font-body)" }}
        >
        Pular Introdução
        </button>
      )}
      
    </div>
  );
};

export default IntroVideo;
