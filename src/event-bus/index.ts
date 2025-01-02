import { IAttachment, ITask } from "../models";

export enum EventType {
  ATTACHMENTS_UPDATE = "attachmentsUpdate",
  TASKS_UPDATE = "tasksUpdate",
}

export interface EventPayloadMap {
  [EventType.ATTACHMENTS_UPDATE]: IAttachment[];
  [EventType.TASKS_UPDATE]: ITask[];
}

declare module "wujie/esm/event" {
  interface EventBus {
    $on<K extends EventType>(
      event: K,
      handler: (payload: EventPayloadMap[K]) => void
    ): this;
    // $onAll(fn: (event: string, ...args: Array<any>) => any): EventBus
    $onAll(fn: (event: EventType, ...args: any[]) => any): this;
    $once<K extends EventType>(
      event: K,
      handler: (payload: EventPayloadMap[K]) => void
    ): void;
    $off<K extends EventType>(
      event: K,
      handler: (payload: EventPayloadMap[K]) => void
    ): this;
    $offAll(fn: (event: EventType, ...args: any[]) => any): this;
    $emit<K extends EventType>(event: K, payload: EventPayloadMap[K]): this;
  }
}
