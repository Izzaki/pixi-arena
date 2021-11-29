const path = require('path');

module.exports = {
    mode: "development",

    target: 'web',

    entry: './src/index.ts',
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
        ],
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    devtool: false,

    devServer: {
        static: {
            directory: path.join(__dirname, 'public/')
        }
    }
};
