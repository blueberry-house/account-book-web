import { useMemo, useState, useRef, useEffect } from "react";
import * as S from "./Select.style";
import useClientOffsets from "@/hooks/useClientOffsets";
import useInteractOutside from "@/hooks/useInteractOutside";

interface Option<Value> {
  key: string | number;
  text: string;
  value: Value;
}

interface SelectProps<Value> {
  options: Option<Value>[];
  initialValue?: Value;
  placeholder?: string;
  onSelect(value: Value): void;
}

export default function Select<Value>({
  options,
  initialValue,
  placeholder,
  onSelect,
}: SelectProps<Value>) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded((e) => !e);
  }

  const container = useRef<HTMLDivElement>(null);
  useInteractOutside({
    ref: container,
    onInteractOutside: () => setExpanded(false),
  });

  const input = useRef<HTMLButtonElement>(null);
  const inputOffsets = useClientOffsets({ ref: input, deps: [expanded] });
  const menuOffsets = useMemo(
    () => ({
      top: inputOffsets.top + inputOffsets.height + 5,
      left: inputOffsets.left,
      width: inputOffsets.width,
    }),
    [inputOffsets]
  );

  const [value, setValue] = useState<Value | undefined>(initialValue);
  const text = useMemo(
    () => options.find((option) => option.value === value)?.text || placeholder,
    [value]
  );

  useEffect(() => {
    if (!value) return;
    onSelect(value);
    setExpanded(false);
  }, [value]);

  return (
    <div ref={container}>
      <S.Input ref={input} onClick={toggleExpand}>
        {text}
      </S.Input>
      <S.Menu expanded={expanded} {...menuOffsets}>
        {options.map((option) => (
          <S.Option
            key={option.key}
            selected={option.value === value}
            onClick={() => setValue(option.value)}
          >
            {option.text}
          </S.Option>
        ))}
      </S.Menu>
    </div>
  );
}
