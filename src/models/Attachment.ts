import { IBaseModel } from "./BaseModel";

export interface IAttachment extends IBaseModel {
  cardId: string;
  creatorUserId: string;
  url: string;
  name: string;
  type: string;
  coverUrl?: string;
  image?: {
    width: number;
    height: number;
  };
}
