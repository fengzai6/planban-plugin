import { IBaseModel } from "./BaseModel";
import { IUser } from "./User";
import { ILabel } from "./Label";
import { IList } from "./List";

export interface IBoard extends IBaseModel {
  position: number;
  name: string;
  isFetching: boolean | null;
  projectId: string;
  memberUsers: IUser[];
  filterUsers: IUser[];
  filterLabels: ILabel[];
  filterText: string;
  labels: ILabel[];
  lists: IList[];
}
