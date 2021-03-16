import AmountInput from "./fields/AmountInput";
import BankAccountSelect from "./fields/BankAccountSelect";
import TypeSelect from "./fields/TypeSelect";
import * as S from "./DayLogItemForm.style";
import { Values } from "./DayLogItemForm.types";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { DAY_LOG_ITEM_TYPE } from "@/types/DayLog";

export interface DayLogItemFormRef {
  values: Partial<Values>;
  valid: boolean;
}

const DayLogItemForm = forwardRef<DayLogItemFormRef>((_, ref) => {
  const [values, setValues] = useState<Partial<Values>>({});

  const valid = useMemo(() => {
    if (!values.amount) return false;
    if (values.type === DAY_LOG_ITEM_TYPE.TRANSFER) {
      if (!values.bankAccountId1 || !values.bankAccountId2) return false;
    }
    if (
      values.type === DAY_LOG_ITEM_TYPE.INCOME ||
      values.type === DAY_LOG_ITEM_TYPE.OUTGO
    ) {
      if (!values.bankAccountId) return false;
    }
    return true;
  }, [values]);

  function changeValue<T>(name: string) {
    return (value: T) => {
      setValues({ ...values, [name]: value });
    };
  }

  useImperativeHandle(ref, () => ({ values, valid }));

  return (
    <S.Form>
      <S.Field>
        <TypeSelect onSelect={changeValue("type")} />
      </S.Field>
      <S.Field>
        <AmountInput onChange={changeValue("amount")} />
      </S.Field>
      <S.Field>
        {values.type === DAY_LOG_ITEM_TYPE.TRANSFER ? (
          <>
            <BankAccountSelect onSelect={changeValue("bankAccountId1")} />
            <BankAccountSelect onSelect={changeValue("bankAccountId2")} />
          </>
        ) : (
          <>
            <BankAccountSelect onSelect={changeValue("bankAccountId")} />
          </>
        )}
      </S.Field>
    </S.Form>
  );
});

export default DayLogItemForm;
