import { observable, action, makeAutoObservable } from "mobx";
import { default as modals } from "@/modals/modalRegister";
import { ComponentProps } from "react";

type ModalType = keyof typeof modals;
type ModalProps = Omit<Distribute<ModalType>, "type">;

export default class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable type: ModalType | null = null;
  props: ModalProps = {} as ModalProps;
  test = {
    test: () => console.log("a"),
  };

  @action open({ type, ...props }: Distribute<ModalType>) {
    this.type = type;
    this.props = props;
    action("confirm", this.props.onConfirm);
  }

  @action close() {
    this.type = null;
    this.props = {} as ModalProps;
  }
}

type Distribute<K> = K extends keyof typeof modals
  ? { type: K } & ComponentProps<typeof modals[K]>
  : never;
