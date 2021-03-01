import { useState } from "react";
import * as S from "./Radio.style";

interface Option<Value> {
  key: string | number;
  text: string;
  value: Value;
}

interface RadioProps<Value> {
  options: Option<Value>[];
  initialValue?: Value;
  onSelect(value: Value): void;
}

export default function Radio<Value>({
  options,
  initialValue,
  onSelect,
}: RadioProps<Value>) {
  const [currentValue, setCurrentValue] = useState<Value>(
    initialValue || options[0].value
  );

  function select(value: Value) {
    setCurrentValue(value);
    onSelect(value);
  }

  return (
    <S.Group>
      {options.map(({ key, value, text }) => (
        <S.Option
          key={key}
          selected={value === currentValue}
          onClick={() => select(value)}
        >
          {text}
        </S.Option>
      ))}
    </S.Group>
  );
}
