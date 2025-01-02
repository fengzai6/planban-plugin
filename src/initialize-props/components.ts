// 组件
export interface IButtonComponent {
  text: string;
  icon?: string;
  callback?: () => void;
}

export interface IframeComponent {
  title: string;
  url: string;
}
