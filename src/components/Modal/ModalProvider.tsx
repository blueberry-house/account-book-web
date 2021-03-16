import useStores from "@/stores/useStores";
import { observer } from "mobx-react";
import { default as Modals } from "@/modals/modalRegister";
import { ComponentProps } from "react";

function ModalProvider() {
  const { store } = useStores();
  const { modal } = store;

  if (!modal.type) return null;
  const TypedModal = Modals[modal.type];
  const typedModalProps = modal.props as UnionToIntersection<
    ComponentProps<typeof TypedModal>
  >;
  return <TypedModal {...typedModalProps} onClose={modal.close.bind(modal)} />;
}

export default observer(ModalProvider);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
