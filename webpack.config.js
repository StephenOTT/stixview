const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'stixview.bundle.js',
	},
	module: {
		rules:[
			{
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
		]
    },
    watch: true,
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'demos/story.html',
            template: 'src/demos/story.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'demos/misc.html',
            template: 'src/demos/misc.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'demos/drag-n-drop.html',
            template: 'src/demos/drag-n-drop.html'
        }),
    ],
//    optimization: {
//        minimizer: [
//            new TerserPlugin({
//                cache: true,
//                parallel: true,
//                sourceMap: true, // Must be set to true if using source-maps in production
//                terserOptions: {
//                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
//                }
//            }),
//        ],
//    }
};
