import Modal, { ModalProps } from "@/components/Modal";
import { useRef } from "react";
import DayLogItemForm, { DayLogItemFormRef } from "./components/DayLogItemForm";
import { Values } from "./components/DayLogItemForm/DayLogItemForm.types";

interface CreateDayLogItemModalProps extends ModalProps {
  onConfirm(values: Values): void;
}

export default function CreateDayLogItemModal({
  onConfirm,
  onClose,
}: CreateDayLogItemModalProps) {
  const form = useRef<DayLogItemFormRef>({} as DayLogItemFormRef);

  function submit() {
    if (!form.current) return;
    if (!form.current.valid) return;
    onConfirm(form.current.values as Values);
  }

  return (
    <Modal onConfirm={submit} onClose={onClose}>
      <DayLogItemForm ref={form} />
    </Modal>
  );
}
