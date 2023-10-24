import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:10086',
    specPattern: 'e2e/**/*.spec.*',
    supportFile: false,
    chromeWebSecurity: false,
    viewportWidth: 375,
    viewportHeight: 812,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    }
  }
})
