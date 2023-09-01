declare module '@tauri-apps/api' {
	import * as e from '@tauri-apps/api/event';
	import * as t from '@tauri-apps/api/tauri';
	/// <reference path="../types/index.d.ts" />

	export const event: typeof e;

	export const tauri: typeof t;
}

declare module '@tauri-apps/api/tauri' {
	export type PluginListenerCallback<T> = (payload: T) => void;
	/**
	 * Command arguments.
	 */
	export type InvokeArgs = Record<string, unknown> | number[] | ArrayBuffer | Uint8Array;
	export type InvokeOptions = {
		headers: Headers | Record<string, string>;
	};
	/**
	 * @module
	 * Invoke your custom commands.
	 *
	 * This package is also accessible with `window.__TAURI__.tauri` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.
	 */

	export class Channel<T extends unknown> {
		
		id: number;
		__TAURI_CHANNEL_MARKER__: boolean;
		
		set onmessage(arg: (response: T) => void);
		
		get onmessage(): (response: T) => void;
		
		toJSON(): string;
		#private;
	}
	export class PluginListener {
		
		constructor(plugin: string, event: string, channelId: number);
		
		plugin: string;
		
		event: string;
		
		channelId: number;
		
		unregister(): Promise<void>;
	}

	/**
	 * Adds a listener to a plugin event.
	 *
	 * @returns The listener object to stop listening to the events.
	 *
	 * @since 2.0.0
	 */
	export function addPluginListener<T>(plugin: string, event: string, cb: PluginListenerCallback<T>): Promise<PluginListener>;
	/**
	 * Command arguments.
	 *
	 * 
	 * @since 1.0.0
	 */
	/**
	 * @since 2.0.0
	 * 
	 */
	/**
	 * Sends a message to the backend.
	 * @example
	 * ```typescript
	 * import { invoke } from '@tauri-apps/api/tauri';
	 * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
	 * ```
	 * @param cmd The command name.
	 * @param args{}] The optional arguments to pass to the command.
	 * @param options The request options.
	 * @return A promise resolving or rejecting to the backend response.
	 *
	 * @since 1.0.0
	 */
	export function invoke<T>(cmd: string, args?: InvokeArgs | undefined, options?: InvokeOptions | undefined): Promise<T>;
}

declare module '@tauri-apps/api/event' {
	export type Event<T> = {
		/**
		 * event id
		 */
		id: number;
		/**
		 * event name
		 */
		name: string;
		/**
		 * The payload of the event
		 */
		payload: T;
	};


	export function listen<T>(callback: (event: Event<T>) => void): void;
	export type TauriEvent = string;
	export namespace TauriEvent {
		const WINDOW_RESIZED: string;
		const WINDOW_MOVED: string;
		const WINDOW_CLOSE_REQUESTED: string;
		const WINDOW_CREATED: string;
		const WINDOW_DESTROYED: string;
		const WINDOW_FOCUS: string;
		const WINDOW_BLUR: string;
		const WINDOW_SCALE_FACTOR_CHANGED: string;
		const WINDOW_THEME_CHANGED: string;
		const WINDOW_FILE_DROP: string;
		const WINDOW_FILE_DROP_HOVER: string;
		const WINDOW_FILE_DROP_CANCELLED: string;
		const MENU: string;
	}
	export type BaseDirectory = number;
	export namespace BaseDirectory {
		const Audio: number;
		const Cache: number;
		const Config: number;
		const Data: number;
		const LocalData: number;
		const Document: number;
		const Download: number;
		const Picture: number;
		const Public: number;
		const Video: number;
		const Resource: number;
		const Temp: number;
		const AppConfig: number;
		const AppData: number;
		const AppLocalData: number;
		const AppCache: number;
		const AppLog: number;
		const Desktop: number;
		const Executable: number;
		const Font: number;
		const Home: number;
		const Runtime: number;
		const Template: number;
	}
}

//# sourceMappingURL=index.d.ts.map