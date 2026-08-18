import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  /** Se true, retoma o vídeo ao reentrar na viewport (útil para autoPlay). */
  resumeOnVisible?: boolean;
}

export function useVideoVisibility({ threshold = 0.5, resumeOnVisible = false }: Options = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!video.paused) {
            wasPlayingRef.current = true;
            video.pause();
          } else {
            wasPlayingRef.current = false;
          }
        } else if (resumeOnVisible && wasPlayingRef.current) {
          wasPlayingRef.current = false;
          video.play().catch(() => {});
        }
      },
      { threshold },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold, resumeOnVisible]);

  return videoRef;
}
