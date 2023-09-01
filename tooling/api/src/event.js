// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

/**
 * The event system allows you to emit events to the backend and listen to events from it.
 *
 * This package is also accessible with `window.__TAURI__.event` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */

/**
 * @since 1.1.0
 * @enum {string}
 */
const TauriEvent = {
  WINDOW_RESIZED: 'tauri://resize',
  WINDOW_MOVED: 'tauri://move',
  WINDOW_CLOSE_REQUESTED: 'tauri://close-requested',
  WINDOW_CREATED: 'tauri://window-created',
  WINDOW_DESTROYED: 'tauri://destroyed',
  WINDOW_FOCUS: 'tauri://focus',
  WINDOW_BLUR: 'tauri://blur',
  WINDOW_SCALE_FACTOR_CHANGED: 'tauri://scale-change',
  WINDOW_THEME_CHANGED: 'tauri://theme-changed',
  WINDOW_FILE_DROP: 'tauri://file-drop',
  WINDOW_FILE_DROP_HOVER: 'tauri://file-drop-hover',
  WINDOW_FILE_DROP_CANCELLED: 'tauri://file-drop-cancelled',
  MENU: 'tauri://menu'
}

/**
 * @since 2.0.0
 *
 * @enum {number}
 */
const BaseDirectory = {
  Audio: 1,
  Cache: 2,
  Config: 3,
  Data: 4,
  LocalData: 5,
  Document: 6,
  Download: 7,
  Picture: 8,
  Public: 9,
  Video: 10,
  Resource: 11,
  Temp: 12,
  AppConfig: 13,
  AppData: 14,
  AppLocalData: 15,
  AppCache: 16,
  AppLog: 17,
  Desktop: 18,
  Executable: 19,
  Font: 20,
  Home: 21,
  Runtime: 22,
  Template: 23
}

/**
 * @template T
 * @typedef {Object} Event
 * @property {number} id event id
 * @property {string} name event name
 * @property {T} payload The payload of the event
 */

/**
 * @template T
 * @param {(event: Event<T>) => void} callback
 */
function listen(callback) {}

export { listen, TauriEvent, BaseDirectory }
