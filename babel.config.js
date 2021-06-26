module.exports = function (api) {
    const env = api.env();

    switch (env) {
        case 'test':
            return testConfig;
        case 'esm':
            return getConfig({ modules: false });
        case 'cjs':
            return getConfig({ modules: 'cjs' });
        default:
            return getConfig({ modules: 'auto' });
    }
};

function getConfig({ modules }) {
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: modules,
                    targets: '> 0.5%, not dead',
                },
            ],
            '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
    };
}

const testConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: { node: 'current' },
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
};
