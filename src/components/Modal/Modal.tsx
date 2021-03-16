import useInteractOutside from "@/hooks/useInteractOutside";
import useKeydown from "@/hooks/useKeydown";
import { PropsWithChildren, useRef } from "react";
import * as S from "./Modal.style";

export interface ModalProps {
  title?: string;
  closeText?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function Modal({
  title,
  closeText = "취소",
  confirmText,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) {
  const modal = useRef<HTMLDivElement>(null);

  function close() {
    onClose();
  }

  useInteractOutside({ ref: modal, onInteractOutside: close });
  useKeydown({ key: "Escape", onDown: close });

  return (
    <S.Container>
      <S.Modal ref={modal}>
        {title && <S.ModalHeader>{title}</S.ModalHeader>}
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalButtons>
          <S.ModalButton onClick={close}>{closeText}</S.ModalButton>
          {confirmText && <S.ModalButton>{confirmText}</S.ModalButton>}
        </S.ModalButtons>
      </S.Modal>
    </S.Container>
  );
}
