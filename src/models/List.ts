import { IBaseModel } from "./BaseModel";
import { ICard } from "./Card";

export interface IList extends IBaseModel {
  position: number;
  name: string;
  boardId: string;
  cards: ICard[];
}
