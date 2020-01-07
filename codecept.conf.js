exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.facebook.com/messages/t/EsikaCyzoneLbelBot',  
      // url: 'https://www.toolsqa.com/iframe-practice-page/',
      windowSize: "1280x960",
      show: false,
      waitForNavigation: "networkidle0",
      chrome: {
        args: [
              '--use-fake-ui-for-media-stream',
              '--disable-web-security --user-data-dir="./"',
              '--disable-notifications',
              '--use-fake-device-for-media-stream',
              '--allow-file-access-from-files',
              '--allow-running-insecure-content',
              '--window-size=1280,960'
              ]
      }
    }
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/globalFlow_steps.js','./step_definitions/chatFlow_steps.js','./step_definitions/encuesta_steps.js','./step_definitions/pedidos_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'AutoTestChatbot'
}