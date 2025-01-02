import { IBaseModel } from "./BaseModel";

export interface IBoardMembership extends IBaseModel {
  role: string;
  canComment: boolean;
  boardId: string;
  userId: string;
}
