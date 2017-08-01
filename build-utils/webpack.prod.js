const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
       
    devtool: "source-map",
    module: {
            rules: [
                 {
                    test: /\.jsx?$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',                    
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: "css-loader",
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {                                
                                name: './fonts/[name].[ext]'
                            }
                        }

                    ]             
                }              
            ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css')    
  ]
}