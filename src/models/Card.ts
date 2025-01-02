import { IBaseModel } from "./BaseModel";
import { IUser } from "./User";
import { ILabel } from "./Label";
import { IAttachment } from "./Attachment";

export interface ICard extends IBaseModel {
  position: number;
  name: string;
  description: string;
  creatorUserId: string;
  dueDate: string | null;
  isDueDateCompleted: boolean | null;
  stopwatch: string | null;
  isSubscribed: boolean;
  isActivitiesFetching: boolean;
  isAllActivitiesFetched: boolean;
  isActivitiesDetailsVisible: boolean;
  isActivitiesDetailsFetching: boolean;
  boardId: string;
  listId: string;
  coverAttachmentId: string | null;
  users: IUser[];
  labels: ILabel[];
  attachments: IAttachment[];
}
