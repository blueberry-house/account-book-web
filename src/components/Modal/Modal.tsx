import Modals from "./Modals";
import * as S from "./Modal.style";
import { useEffect, useRef } from "react";
import { Modal as StoreModal } from "@/stores/ModalStore";
import useInteractOutside from "@/hooks/useInteractOutside";

interface ModalProps extends StoreModal {
  onClose?: () => void;
}

export default function Modal({ type, props, onClose }: ModalProps) {
  const modal = useRef<HTMLDivElement>(null);

  function close() {
    onClose?.();
  }

  useInteractOutside({ ref: modal, onInteractOutside: close });

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const TypedModal = Modals[type];
  const title = props?.title;
  const buttons = props?.buttons;
  return (
    <S.Container>
      <S.Modal ref={modal}>
        {title && <S.ModalHeader>{title}</S.ModalHeader>}
        <S.ModalBody>
          <TypedModal />
        </S.ModalBody>
        {buttons && (
          <S.ModalButtons>
            {buttons.map((button, i) => (
              <S.ModalButton key={i} onClick={button.onClick}>
                {button.text}
              </S.ModalButton>
            ))}
          </S.ModalButtons>
        )}
      </S.Modal>
    </S.Container>
  );
}
