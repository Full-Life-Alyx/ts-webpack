const path = require("path")


console.log("Webpack config start!")
module.exports = {
    
    entry: "./src/index.ts",
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }, 
    plugins: [
        /*
        new FaviconsWebpackPlugin({
            logo: "./src/assets/icon.png",
            cache: true,
            
        })
        */
    ],
    module: {
        rules: [
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.([cm]?ts|tsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "projectReferences": true
                    }
                }
            },
            { 
                test: /\.json$/, 
                type: 'json' 
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
}