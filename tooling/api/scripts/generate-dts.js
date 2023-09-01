import { createBundle } from 'dts-buddy'

await createBundle({
  project: 'tsconfig.json',
  output: 'types/index.d.ts',
  include: ['src'],
  modules: {
    '@tauri-apps/api': 'src/index.js',
    '@tauri-apps/api/tauri': 'src/tauri.js',
    '@tauri-apps/api/event': 'src/event.js'
  }
})
