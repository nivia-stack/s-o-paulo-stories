import { useState, useCallback } from "react";
import IntroVideo from "@/components/IntroVideo";
import HomeScreen from "@/components/HomeScreen";
import VideoPlayer from "@/components/VideoPlayer";

const VIDEO_MAP: Record<string, { src: string; title: string }> = {
  patio: { src: "/videos/patio-do-colegio.mp4", title: "Pátio do Colégio" },
  praca: { src: "/videos/praca-da-republica.mp4", title: "Praça da República" },
  banco: { src: "/videos/banco-do-estado.mp4", title: "Banco do Estado" },
};

const PLAY_ORDER = ["patio", "praca", "banco"];

type Screen = "intro" | "home" | "playing";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const [queue, setQueue] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState<string>("");

  const goHome = useCallback(() => {
    setScreen("home");
    setQueue([]);
    setCurrentId("");
  }, []);

  const playVideo = useCallback((ids: string[]) => {
    if (ids.length === 0) return;
    setCurrentId(ids[0]);
    setQueue(ids.slice(1));
    setScreen("playing");
  }, []);

  const handleSelect = useCallback(
    (id: string) => {
      if (id === "all") {
        playVideo([...PLAY_ORDER]);
      } else {
        playVideo([id]);
      }
    },
    [playVideo]
  );

  const handleVideoFinished = useCallback(() => {
    if (queue.length > 0) {
      setCurrentId(queue[0]);
      setQueue((q) => q.slice(1));
    } else {
      goHome();
    }
  }, [queue, goHome]);

  if (screen === "intro") {
    return <IntroVideo onFinished={goHome} />;
  }

  if (screen === "playing" && currentId && VIDEO_MAP[currentId]) {
    const video = VIDEO_MAP[currentId];
    return (
      <VideoPlayer
        key={currentId}
        src={video.src}
        title={video.title}
        onFinished={handleVideoFinished}
        onStop={goHome}
      />
    );
  }

  return <HomeScreen onSelect={handleSelect} />;
};

export default Index;
