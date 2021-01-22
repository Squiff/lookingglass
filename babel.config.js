module.exports = function (api) {
    const env = api.env();
    let modules;

    switch (env) {
        case 'esm':
            modules = false;
            break;
        case 'cjs':
            modules = 'cjs';
            break;
        default:
            modules = 'auto';
    }

    return {
        presets: [
            [
                '@babel/preset-env',
                { modules: modules, targets: '> 0.5%, not dead' },
            ],
            '@babel/preset-react',
        ],
    };
};
