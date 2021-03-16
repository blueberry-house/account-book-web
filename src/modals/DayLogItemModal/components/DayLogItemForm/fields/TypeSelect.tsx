import Radio from "@/components/Radio";
import { DAY_LOG_ITEM_TYPE } from "@/types/DayLog";

const options = [
  {
    key: DAY_LOG_ITEM_TYPE.INCOME,
    text: "수입",
    value: DAY_LOG_ITEM_TYPE.INCOME,
  },
  {
    key: DAY_LOG_ITEM_TYPE.OUTGO,
    text: "지출",
    value: DAY_LOG_ITEM_TYPE.OUTGO,
  },
  {
    key: DAY_LOG_ITEM_TYPE.TRANSFER,
    text: "이체",
    value: DAY_LOG_ITEM_TYPE.TRANSFER,
  },
];

interface TypeSelectProps {
  onSelect(value: DAY_LOG_ITEM_TYPE): void;
}

export default function TypeSelect({ onSelect }: TypeSelectProps) {
  return <Radio options={options} onSelect={onSelect} />;
}
