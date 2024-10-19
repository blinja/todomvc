module.exports = {
    src_folders: ['testing'], 
    webdriver: {
      start_process: true,
      server_path: require('chromedriver').path,
      port: 9515,
    },
    test_settings: {
      default: {
        desiredCapabilities: {
          browserName: 'chrome',
        },
      },
    },
  };
  