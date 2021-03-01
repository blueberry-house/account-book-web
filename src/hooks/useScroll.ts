import { useEffect } from "react";

/**
 * 윈도우 스크롤 이벤트를 다룰 때 사용한다.
 */
export default function useScroll(onScroll: () => void) {
  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);
}
