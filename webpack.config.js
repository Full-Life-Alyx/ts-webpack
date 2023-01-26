const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                //include: [path.resolve(__dirname, 'public')],
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    }
}