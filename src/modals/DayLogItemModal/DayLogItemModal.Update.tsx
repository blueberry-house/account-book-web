import Modal, { ModalProps } from "@/components/Modal";
import DayLogItemForm from "./components/DayLogItemForm";

export default function UpdateDayLogItemModal({ onClose }: ModalProps) {
  return <Modal onClose={onClose}>{/* <DayLogItemForm /> */}</Modal>;
}
