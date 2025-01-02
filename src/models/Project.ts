import { IBaseModel } from "./BaseModel";

export interface IProject extends IBaseModel {
  name: string;
  background: string;
  backgroundImage: string;
  isBackgroundImageUpdating: boolean;
  managerUsers: string[];
}
