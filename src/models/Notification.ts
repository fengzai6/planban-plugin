import { IBaseModel } from "./BaseModel";

export interface INotification extends IBaseModel {
  type: string;
  data: any;
  isRead: boolean;
  userId: string;
  cardId: string;
  activityId: string;
}
