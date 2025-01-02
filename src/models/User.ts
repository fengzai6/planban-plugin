import { IBaseModel } from "./BaseModel";

export interface IUser extends IBaseModel {
  email: string;
  username: string;
  name: string;
  avatarUrl: string;
  phone: string;
  organization: string;
  language: string;
  subscribeToOwnCards: boolean;
  isAdmin: boolean;
  isLocked: boolean;
  isRoleLocked: boolean;
  isUsernameLocked: boolean;
  isDeletionLocked: boolean;
  deletedAt: string | null;
  isAvatarUpdating: boolean;
  emailUpdateForm: {
    data: {
      email: string;
      currentPassword: string;
    };
    isSubmitting: boolean;
    error: string | null;
  };
  passwordUpdateForm: {
    data: {
      password: string;
      currentPassword: string;
    };
    isSubmitting: boolean;
    error: string | null;
  };
  usernameUpdateForm: {
    data: {
      username: string;
      currentPassword: string;
    };
    isSubmitting: boolean;
    error: string | null;
  };
}
