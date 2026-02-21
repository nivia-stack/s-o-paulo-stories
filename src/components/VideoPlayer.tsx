import { useRef } from "react";
import { Square, ArrowLeft } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title: string;
  onFinished: () => void;
  onStop: () => void;
}

const VideoPlayer = ({ src, title, onFinished, onStop }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Top bar */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-background/90 to-transparent px-4 py-4 sm:px-8">
        <h2
          className="text-gradient-gold text-lg font-semibold sm:text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <button
          onClick={onStop}
          className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-background/70 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-destructive/10"
        >
          <Square className="h-4 w-4" />
          <span className="hidden sm:inline">Parar</span>
        </button>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        autoPlay
        playsInline
        onEnded={onFinished}
        src={src}
      />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-gradient-to-t from-background/90 to-transparent px-4 py-4">
        <button
          onClick={onStop}
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Início
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
