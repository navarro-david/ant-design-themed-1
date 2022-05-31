const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#86B341',
              '@border-radius-base' : '4px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};