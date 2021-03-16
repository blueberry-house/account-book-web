import useStores from "@/stores/useStores";
import { observer } from "mobx-react";
import { default as Modal } from "@/modals/modalRegister";

function ModalProvider() {
  const { store } = useStores();
  const { modal } = store;

  if (!modal.type) return null;
  const TypedModal = Modal[modal.type];
  return <TypedModal onClose={modal.close.bind(modal)} />;
}

export default observer(ModalProvider);
