const config = {
    devtool: "source-map",
    module: {
        rules: [
                {
                    test: /\.jsx?$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                    loader: 'url-loader'                
                }
        ]
    }
}

module.exports = config;