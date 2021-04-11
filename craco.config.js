const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FBA657',
                            '@highlight-color': '#F86E6E',
                            '@text-color': '#666666',
                            '@input-bg': '#E4E2F2',
                            '@border-radius-base': '12px',
                            '@border-color-base': 'transparent',
                            '@box-shadow-base': 'unset',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
