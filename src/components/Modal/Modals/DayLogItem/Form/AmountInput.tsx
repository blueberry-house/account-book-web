import { useMemo, useState } from "react";
import Input from "@/components/Input";

interface AmountInputProps {
  onChange(amount: number): void;
}

export default function AmountInput({ onChange }: AmountInputProps) {
  const [amount, setAmount] = useState(0);
  const amountWithComma = useMemo(
    () => (amount ? amount.toLocaleString() : ""),
    [amount]
  );

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const value = target.value.replaceAll(",", "");
    const isDigit = /^[0-9]+$/.test(value);
    if (!isDigit && !!value) return;
    setAmount(+value);
    onChange(+value);
  }

  return <Input value={amountWithComma} onChange={handleChange} />;
}
