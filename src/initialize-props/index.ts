import { ReactNode } from "react";
import { IAttachment } from "../models";
import { IButtonComponent, IframeComponent } from "./components";

// 初始化组件
export interface InitComponents {
  cardButtons?: () => IButtonComponent[];
  cardAttachments?: (data: IAttachment[]) => ReactNode | IframeComponent;
}
