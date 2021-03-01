import { useMemo, useState, useRef } from "react";
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

  const [currentValue, setCurrentValue] = useState<Value | undefined>(
    initialValue
  );

  function select(value: Value) {
    setCurrentValue(value);
    onSelect(value);
  }

  return (
    <div ref={container}>
      <S.Input ref={input} onClick={toggleExpand}>
        {currentValue || placeholder}
      </S.Input>
      <S.Menu expanded={expanded} {...menuOffsets}>
        {options.map(({ key, text, value }) => (
          <S.Option
            key={key}
            selected={value === currentValue}
            onClick={() => select(value)}
          >
            {text}
          </S.Option>
        ))}
      </S.Menu>
    </div>
  );
}
