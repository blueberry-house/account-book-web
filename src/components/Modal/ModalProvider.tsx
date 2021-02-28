import useStores from "@/stores/useStores";
import { observer } from "mobx-react";
import Modal from "./Modal";

function ModalProvider() {
  const { store } = useStores();
  const { modal } = store;

  if (!modal.type) return null;

  return <Modal type={modal.type} props={modal.props} />;
}

export default observer(ModalProvider);
