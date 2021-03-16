import { DAY_LOG_ITEM_TYPE } from "@/types/DayLog";

interface TransferValues {
  type: DAY_LOG_ITEM_TYPE.TRANSFER;
  amount: number;
  bankAccountId1: number;
  bankAccountId2: number;
}

interface NonTransferValues {
  type: Exclude<DAY_LOG_ITEM_TYPE, DAY_LOG_ITEM_TYPE.TRANSFER>;
  amount: number;
  bankAccountId: number;
}

export type Values = TransferValues | NonTransferValues;
