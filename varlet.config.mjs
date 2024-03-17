import { defineConfig } from '@varlet/cli'

export default defineConfig({
  icons: {
    name: 'i-icons',
    namespace: 'i',
    fontFamilyClassName: 'i--set',
    entry: './src/svg-icons',
    output: './src/assets/icons',
    genPng: false
  }
})
