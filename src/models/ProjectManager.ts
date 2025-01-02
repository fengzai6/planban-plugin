import { IBaseModel } from "./BaseModel";

export interface IProjectManager extends IBaseModel {
  createdAt: Date;
  projectId: string;
  userId: string;
}
