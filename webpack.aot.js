const { root } = require('./helpers');
const { AotPlugin } = require('@ngtools/webpack');

const tsconfigs = {
  client: root('./src/tsconfig.browser.json'),
  server: root('./src/tsconfig.server.json')
};

const aotTsconfigs = {
  client: root('./src/tsconfig.browser.json'),
  server: root('./src/tsconfig.server.aot.json')
};

function getAotPlugin(platform, aot) {
  return new AotPlugin({
    tsConfigPath: aot ? aotTsconfigs[platform] : tsconfigs[platform],
    skipCodeGeneration: !aot
  });
}

module.exports = {
  getAotPlugin: getAotPlugin
};
