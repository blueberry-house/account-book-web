import { observable } from "mobx";
import DailyRecord from "./DailyRecord";
import ModalStore from "./ModalStore";

export default class Store {
  @observable dailyRecord: DailyRecord = new DailyRecord();
  @observable modal: ModalStore = new ModalStore();
}
