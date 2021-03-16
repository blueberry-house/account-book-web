import Modal from "@/components/Modal";
import { ModalProps } from "@/components/Modal/Modal";

export default function TestModal({ onClose }: ModalProps) {
  return <Modal onClose={onClose}>test</Modal>;
}
