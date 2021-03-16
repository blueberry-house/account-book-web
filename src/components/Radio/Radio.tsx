import { useEffect, useState } from "react";
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
  const [value, setValue] = useState<Value>(initialValue || options[0].value);

  useEffect(() => {
    onSelect(value);
  }, [value]);

  return (
    <S.Group>
      {options.map((option) => (
        <S.Option
          key={option.key}
          selected={option.value === value}
          onClick={() => setValue(option.value)}
        >
          {option.text}
        </S.Option>
      ))}
    </S.Group>
  );
}
