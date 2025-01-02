import { IBaseModel } from "./BaseModel";

export interface ILabel extends IBaseModel {
  position: number;
  name: string;
  color: string;
  boardId: string;
}
