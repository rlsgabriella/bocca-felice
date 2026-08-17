import { useRef, useState, useCallback } from "react";

interface SwipeResult {
  handlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
  };
  isDragging: boolean;
  deltaX: number;
}

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
): SwipeResult {
  const startX = useRef(0);
  const deltaRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [deltaX, setDeltaX] = useState(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0]!.clientX;
    deltaRef.current = 0;
    setIsDragging(true);
    setDeltaX(0);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const d = e.touches[0]!.clientX - startX.current;
    deltaRef.current = d;
    setDeltaX(d);
  }, []);

  const onTouchEnd = useCallback(() => {
    const d = deltaRef.current;
    setIsDragging(false);
    setDeltaX(0);
    if (Math.abs(d) >= threshold) {
      if (d < 0) onSwipeLeft();
      else onSwipeRight();
    }
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return { handlers: { onTouchStart, onTouchMove, onTouchEnd }, isDragging, deltaX };
}
