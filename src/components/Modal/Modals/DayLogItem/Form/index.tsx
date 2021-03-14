import AmountInput from "./AmountInput";
import BankAccountSelect from "./BankAccountSelect";
import TypeSelect from "./TypeSelect";
import * as S from "./Form.style";
import { useState } from "react";
import { DAY_LOG_ITEM_TYPE } from "@/models/DayLog";

interface Values {
  type: DAY_LOG_ITEM_TYPE;
  amount: number;
  bankAccountIds?: [from?: number, to?: number];
}

interface DayLogItemFormProps {
  initialValues?: Values;
}

export default function DayLogItemForm({
  initialValues = {
    type: DAY_LOG_ITEM_TYPE.INCOME,
    amount: 0,
  },
}: DayLogItemFormProps) {
  const [currentValues, setCurrentValues] = useState(initialValues);

  return (
    <S.Form>
      <S.Field>
        <TypeSelect
          onSelect={(type: DAY_LOG_ITEM_TYPE) =>
            setCurrentValues({ ...currentValues, type })
          }
        />
      </S.Field>
      <S.Field>
        <AmountInput
          onChange={(amount: number) =>
            setCurrentValues({ ...currentValues, amount })
          }
        />
      </S.Field>
      {(currentValues.type === DAY_LOG_ITEM_TYPE.INCOME ||
        currentValues.type === DAY_LOG_ITEM_TYPE.OUTGO) && (
        <S.Field>
          <BankAccountSelect
            onSelect={(accountId: number) =>
              setCurrentValues({
                ...currentValues,
                bankAccountIds: [accountId],
              })
            }
          />
        </S.Field>
      )}
      {currentValues.type === DAY_LOG_ITEM_TYPE.TRANSFER && (
        <S.Field>
          <BankAccountSelect
            onSelect={(accountId: number) =>
              setCurrentValues({
                ...currentValues,
                bankAccountIds: [accountId, currentValues.bankAccountIds?.[1]],
              })
            }
          />
          <BankAccountSelect
            onSelect={(accountId: number) =>
              setCurrentValues({
                ...currentValues,
                bankAccountIds: [currentValues.bankAccountIds?.[0], accountId],
              })
            }
          />
        </S.Field>
      )}
    </S.Form>
  );
}
