import { ReactNode } from 'react';
import Wujie from 'wujie/esm/sandbox';

export interface IButtonComponent {
	text: string;
	icon?: string;
	callback?: () => void;
}
export interface IframeComponent {
	title: string;
	url: string;
}
export interface IBaseModel {
	id: string;
	createdAt: Date;
	updatedAt?: string;
}
export interface IAttachment extends IBaseModel {
	cardId: string;
	creatorUserId: string;
	url: string;
	name: string;
	type: string;
	coverUrl?: string;
	image?: {
		width: number;
		height: number;
	};
}
export interface ITask extends IBaseModel {
	position: number;
	name: string;
	isCompleted: boolean;
	cardId: string;
}
export interface InitComponentsProps {
	cardButtons?: () => IButtonComponent[];
	cardAttachments?: (data: IAttachment[]) => ReactNode | IframeComponent;
}
export interface ThrusterUtils {
	popup: (title: string, content?: string, url?: string) => void;
	modal: (title: string, content?: string, url?: string) => void;
	resize: (id?: string, element?: HTMLElement, height?: number) => void;
}
export type ThrusterApi = {
	cardAttachments: () => IAttachment[];
} & ThrusterUtils;
export declare enum EventType {
	ATTACHMENTS_UPDATE = "attachmentsUpdate",
	TASKS_UPDATE = "tasksUpdate"
}
export interface EventPayloadMap {
	[EventType.ATTACHMENTS_UPDATE]: IAttachment[];
	[EventType.TASKS_UPDATE]: ITask[];
}
export interface EventBus {
	$on<K extends EventType>(event: K, handler: (payload: EventPayloadMap[K]) => void): this;
	$onAll(fn: (event: EventType, ...args: any[]) => any): this;
	$once<K extends EventType>(event: K, handler: (payload: EventPayloadMap[K]) => void): void;
	$off<K extends EventType>(event: K, handler: (payload: EventPayloadMap[K]) => void): this;
	$offAll(fn: (event: EventType, ...args: any[]) => any): this;
	$emit<K extends EventType>(event: K, payload: EventPayloadMap[K]): this;
	$clear(): this;
}
export interface PlanbanThruster {
	locale: string;
	thrusterData: {
		token: string;
		data: any;
	};
	initialize: (props: InitComponentsProps) => void;
	thrusterApi: ThrusterApi;
}
export interface WujieWithThruster {
	__POWERED_BY_WUJIE__?: boolean;
	__WUJIE_PUBLIC_PATH__: string;
	__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
	__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
	__WUJIE_RAW_WINDOW__: Window;
	__WUJIE: typeof Wujie;
	__WUJIE_MOUNT: () => void;
	__WUJIE_UNMOUNT: () => void;
	$wujie: {
		bus: EventBus;
		shadowRoot?: ShadowRoot;
		props?: {
			[key: string]: any;
		} & PlanbanThruster;
		location?: object;
	};
}

export {};
