module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      "name": "@storybook/preset-create-react-app",
      "options": {
        "craOverrides": {
          "fileLoaderExcludes": ["less"]
        },
        'lessLoaderOptions': {
          'lessOptions': {
            'modifyVars': { 
              '@primary-color': '#86B341',
              '@border-radius-base' : '4px'
            },
            'javascriptEnabled': 'true',
          },
        },
      }
    }
  ],
  "framework": "@storybook/react"
}