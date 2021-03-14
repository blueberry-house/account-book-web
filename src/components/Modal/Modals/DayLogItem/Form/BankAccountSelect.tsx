import Select from "@/components/Select";

const options = [
  {
    key: "WR",
    text: "우리은행",
    value: 1,
  },
  {
    key: "KB",
    text: "국민은행",
    value: 1,
  },
  {
    key: "SH",
    text: "신한은행",
    value: 2,
  },
];

interface BankAccountSelectProps {
  onSelect(accountId: number): void;
}

export default function BankAccountSelect({
  onSelect,
}: BankAccountSelectProps) {
  return (
    <Select options={options} placeholder="계좌번호" onSelect={onSelect} />
  );
}
