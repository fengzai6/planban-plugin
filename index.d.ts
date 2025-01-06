import { EventBus } from "wujie/esm/event";
import Wujie from "wujie/esm/sandbox";
import { InitComponents } from "./src/initialize-props";
import { ThrusterApi } from "./src/thruster-api";

export * from "./src/event-bus";

export interface PlanbanThruster {
  // 将多语言的设置传入，让插件决定相关处理适配, 可增加枚举？
  locale: string;
  // 数据：token、面板设置、用户信息等
  thrusterData: {
    token: string;
  };

  initialize: (thrusterName: string, props: InitComponents) => void;
  thrusterApi: ThrusterApi;
}

export interface WujieWithThruster {
  // 是否存在无界
  __POWERED_BY_WUJIE__?: boolean;
  // 子应用公共加载路径
  __WUJIE_PUBLIC_PATH__: string;
  // 原生的querySelector
  __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
  // 原生的querySelectorAll
  __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
  // 原生的window对象
  __WUJIE_RAW_WINDOW__: Window;
  // 子应用沙盒实例
  __WUJIE: typeof Wujie;
  // 子应用mount函数
  __WUJIE_MOUNT: () => void;
  // 子应用unmount函数
  __WUJIE_UNMOUNT: () => void;
  // 注入对象
  // 需要考虑是怎么样将方法传入的
  $wujie: {
    bus: EventBus;
    shadowRoot?: ShadowRoot;
    props?: { [key: string]: any } & PlanbanThruster;
    location?: object;
  };
}
