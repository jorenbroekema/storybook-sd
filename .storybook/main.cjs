const StyleDictionary = require("style-dictionary");
const createDictionary = require("style-dictionary/lib/utils/createDictionary.js");

const sd = StyleDictionary.extend("./config.json");
const enrichedTokens = sd.exportPlatform("css");

/**
 * allTokens is the flattened version of tokens, as a one-dimensional array
 */
const { tokens, allTokens } = createDictionary({
  properties: enrichedTokens,
});

module.exports = {
  stories: ["../packages/*/stories/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/web-components",
  env: (config) => ({ ...config, tokens, allTokens }),
};
