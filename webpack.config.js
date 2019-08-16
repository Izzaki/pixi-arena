const path = require('path');

module.exports = {
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

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public/'),
    }
};
