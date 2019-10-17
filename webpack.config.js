const path = require("path")
const BundleTracker = require('webpack-bundle-tracker')


const config = {
    context: __dirname,
    entry: {
        home: './assets/js/index',
        login: './assets/js/login/index',
    },
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js",
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
            }, 
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    }
}



module.exports = config