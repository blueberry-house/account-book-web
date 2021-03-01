import { useCallback, useEffect, useState } from "react";
import useScroll from "@/hooks/useScroll";

interface Offsets {
  top: number;
  left: number;
  width: number;
  height: number;
}

const initialOffsets: Offsets = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

interface UseClientOffsetsProps {
  ref: React.RefObject<HTMLElement>;
  deps?: unknown[];
}

/**
 * 요소의 client offset(top, left, width, height)을 이용할 때 사용한다.
 * scroll이 될 때마다 새롭게 계산한 값을 return한다.
 */
export default function useClientOffsets({
  ref,
  deps = [],
}: UseClientOffsetsProps) {
  const [offsets, setOffsets] = useState<Offsets>(initialOffsets);

  const getClientOffsets = useCallback(() => {
    if (!ref.current) return;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    setOffsets({ top, left, width, height });
  }, [ref.current]);

  useEffect(getClientOffsets, [getClientOffsets, ...deps]);

  useScroll(getClientOffsets);

  return offsets;
}
