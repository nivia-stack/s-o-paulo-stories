import { useRef } from "react";

interface IntroVideoProps {
  onFinished: () => void;
}

const IntroVideo = ({ onFinished }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <video
        ref={videoRef}
        className="h-full w-full object-contain bg-background"
        autoPlay
        playsInline
        onEnded={onFinished}
        src="/videos/intro.mp4"
      />
      <button
        onClick={onFinished}
        className="absolute bottom-8 right-8 rounded-lg border border-primary/40 bg-background/80 px-6 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Pular Introdução
      </button>
    </div>
  );
};

export default IntroVideo;
