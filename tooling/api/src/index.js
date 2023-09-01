// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

/**
 * The Tauri API allows you to interface with the backend layer.
 *
 * This module exposes all other modules as an object where the key is the module name, and the value is the module exports.
 * @example
 * ```typescript
 * import { event, tauri } from '@tauri-apps/api'
 * ```
 * @module
 */

import * as e from '@tauri-apps/api/event'
import * as t from '@tauri-apps/api/tauri'

/** @type {typeof e} */
const event = e
/** @type {typeof t} */
const tauri = t

export { event, tauri }
