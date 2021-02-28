import { observable, action, makeAutoObservable } from "mobx";
import Modals from "@/components/Modal/Modals";

interface Modal {
  type: keyof typeof Modals;
  props?: unknown;
}

export default class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable type: Modal["type"] | null = null;
  @observable props: Modal["props"] = null;

  @action open(modal: Modal) {
    this.type = modal.type;
    this.props = modal.props;
  }

  @action close() {
    this.type = null;
    this.props = null;
  }
}
