
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'lib');
const APP_DIR = path.resolve(__dirname, './');

const config = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: APP_DIR + '/src/core.js',
    output: {
        path: BUILD_DIR,
        filename: "RTJS.js",
        globalObject: 'window',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            // handle sass
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
                sideEffects: true
            },
            {
                test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        "alias": { 
            "react": "preact/compat",
            // "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
           // Must be below test-utils
          },
    },
    devtool: 'source-map',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};

module.exports = config;