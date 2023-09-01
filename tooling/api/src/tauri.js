// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

/**
 * Invoke your custom commands.
 *
 * This package is also accessible with `window.__TAURI__.tauri` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */

/**
 * @template {unknown} T
 */
class Channel {
  /** @type {number} */
  id

  __TAURI_CHANNEL_MARKER__ = true

  /**
   * @type {(response: T) => void}
   */
  #onmessage = () => {
    // no-op
  }

  constructor() {
    this.id = 0
  }

  /**
   * @param {(response: T) => void} handler
   */
  set onmessage(handler) {
    this.#onmessage = handler
  }

  /**
   * @returns {(response: T) => void}
   */
  get onmessage() {
    return this.#onmessage
  }

  /**
   * @returns {string}
   */
  toJSON() {
    return `__CHANNEL__:${this.id}`
  }
}

class PluginListener {
  /** @type {string} */
  plugin
  /** @type {string} */
  event
  /** @type {number} */
  channelId

  /**
   * @param {string} plugin
   * @param {string} event
   * @param {number} channelId
   */
  constructor(plugin, event, channelId) {
    this.plugin = plugin
    this.event = event
    this.channelId = channelId
  }

  /** @returns {Promise<void>} */
  async unregister() {
    return invoke(`plugin:${this.plugin}|remove_listener`, {
      event: this.event,
      channelId: this.channelId
    })
  }
}

/**
 * Adds a listener to a plugin event.
 *
 * @template T
 * @param {string} plugin
 * @param {string} event
 * @param {(payload: T) => void} cb
 * @returns The listener object to stop listening to the events.
 *
 * @since 2.0.0
 */
async function addPluginListener(plugin, event, cb) {
  /** @type {Channel<T>} */
  const handler = new Channel()
  handler.onmessage = cb
  return invoke(`plugin:${plugin}|register_listener`, { event, handler }).then(
    () => new PluginListener(plugin, event, handler.id)
  )
}

/**
 * Command arguments.
 *
 * @typedef {Record<string, unknown> | number[] | ArrayBuffer | Uint8Array} InvokeArgs
 * @since 1.0.0
 */

/**
 * @typedef {{headers: Headers | Record<string, string>}} InvokeOptions
 * @since 2.0.0
 */

/**
 * Sends a message to the backend.
 * @example
 * ```typescript
 * import { invoke } from '@tauri-apps/api/tauri';
 * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
 * ```
 * @template T
 * @param {string} cmd The command name.
 * @param {InvokeArgs} [args={}] The optional arguments to pass to the command.
 * @param {InvokeOptions} [options] The request options.
 * @return {Promise<T>} A promise resolving or rejecting to the backend response.
 *
 * @since 1.0.0
 */
async function invoke(cmd, args = {}, options) {
  return new Promise((resolve, reject) => {})
}

export { Channel, PluginListener, addPluginListener, invoke }
