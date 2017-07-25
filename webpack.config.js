const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = (env) => {
    return {
        entry: "./src/index.js",
        output: {
            filename: "assest/bundle.js",
            path: path.join(__dirname,"dist")
        },    
        devtool: "source-map",
        plugins:[HtmlWebpackPluginConfig],
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
    };
};
