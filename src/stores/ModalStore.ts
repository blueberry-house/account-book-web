import { observable, action, makeAutoObservable } from "mobx";
import { default as modalTypes } from "@/modals/modalRegister";

interface ModalButton {
  text: string;
  onClick?: () => void;
}

interface BaseModalProps {
  title?: string;
  buttons?: ModalButton[];
}

export interface Modal {
  type: keyof typeof modalTypes;
  props?: unknown & BaseModalProps;
}

export default class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable type: Modal["type"] | null = null;
  @observable props: Modal["props"] = {};

  @action open(modal: Modal) {
    this.type = modal.type;
    this.props = modal.props;
  }

  @action close() {
    this.type = null;
    this.props = {};
  }
}
