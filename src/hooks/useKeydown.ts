import { useEffect } from "react";

interface UseKeydown {
  key: string;
  onDown(): void;
}

export default function useKeydown({ key, onDown }: UseKeydown) {
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === key) onDown();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
}
