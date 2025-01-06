// 工具
export interface ThrusterUtils {
  // 使用弹窗来展示内容/iframe。待具体设计和组件的直接插入
  popup: (title: string, content?: string, url?: string) => void;
  modal: (title: string, content?: string, url?: string) => void;
  // 重置高度, waiting
  resize: (id?: string, element?: HTMLElement, height?: number) => void;
}
