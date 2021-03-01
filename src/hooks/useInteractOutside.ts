import { RefObject, useEffect } from "react";

interface UseInteractOutside {
  ref: RefObject<HTMLElement>;
  excludedRefs?: RefObject<HTMLElement>[];
  onInteractOutside: (e?: MouseEvent) => void;
}

/**
 * 요소 바깥을 클릭했을 때를 감지한다.
 */
export default function useInteractOutside({
  ref,
  excludedRefs = [],
  onInteractOutside,
}: UseInteractOutside) {
  useEffect(() => {
    function handleWindowClick(e: MouseEvent) {
      if (!ref.current) return;
      const target = e.target as Node;
      if (excludedRefs.some((ref) => ref.current?.contains(target))) return;
      if (!ref.current.contains(target)) {
        onInteractOutside(e);
      }
    }

    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [ref.current, excludedRefs, onInteractOutside]);
}
