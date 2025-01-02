import { IBaseModel } from "./BaseModel";

export interface IActivityCreateCardData {
  list: {
    id: string;
    name: string;
  };
}

export interface IActivityMoveCardData {
  fromList: {
    id: string;
    name: string;
  };
  toList: {
    id: string;
    name: string;
  };
}

export interface IActivityCommentCardData {
  text: string;
  plainText: string;
  atUserIds?: string[];
  hasCurrentUser?: boolean;
}

export interface IActivity extends IBaseModel {
  type: string;
  data:
    | IActivityCreateCardData
    | IActivityMoveCardData
    | IActivityCommentCardData;
  isInCard: boolean;
  cardId: string;
  userId: string;
}
