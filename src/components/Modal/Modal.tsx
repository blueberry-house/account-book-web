import Modals from "./Modals";
import * as S from "./Modal.style";
import useStores from "@/stores/useStores";
import { useEffect } from "react";

interface ModalProps {
  type: keyof typeof Modals;
  props?: unknown;
}

export default function Modal({ type }: ModalProps) {
  const { store } = useStores();
  const { modal } = store;

  useEffect(() => {
    function handleEscapeKeydown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      modal.close();
    }
    window.addEventListener("keydown", handleEscapeKeydown);
    return () => window.removeEventListener("keydown", handleEscapeKeydown);
  }, []);

  const TypedModal = Modals[type];
  return (
    <S.Container>
      <S.Modal>
        <TypedModal />
      </S.Modal>
    </S.Container>
  );
}
