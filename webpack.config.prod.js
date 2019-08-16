const path = require('path');

module.exports = {
    mode: 'production',

    entry: './src/index.ts',

    target: 'web',

    output: {
        filename: 'index.js',
        path: path.resolve('public/')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },

    devtool: false,

    resolve: {
        extensions: [".ts", ".js"]
    }
};
