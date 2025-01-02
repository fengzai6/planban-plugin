import { IBaseModel } from "./BaseModel";

export interface ITask extends IBaseModel {
  position: number;
  name: string;
  isCompleted: boolean;
  cardId: string;
}
