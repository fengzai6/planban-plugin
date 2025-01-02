import { IAttachment } from "../models";
import { ThrusterUtils } from "./utils";

// 组件数据方法
export type ThrusterApi = {
  cardAttachments: () => IAttachment[];
} & ThrusterUtils;
