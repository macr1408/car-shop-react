const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.module\.s[ac]ss$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        },
                    }
                }, 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, 'src/images'),
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};