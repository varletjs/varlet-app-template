import { defineConfig } from '@configurajs/eslint'
import autoImport from './.eslintrc-auto-import.js'

export default defineConfig({
  ignores: ['typed-router.d.ts'],
  overrides: [
    {
      languageOptions: autoImport,
    },
  ],
})
