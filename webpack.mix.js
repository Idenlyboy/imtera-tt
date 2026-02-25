const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app/app.js', 'public/js')
    .postCss('resources/scss/app.scss', 'public/css')
    .vue({
        version: 3,
    })
    .sass('resources/scss/app.scss', 'public/css')
    .setPublicPath('public')
    .webpackConfig({
        stats: {
            children: true
        },
        resolve: {
            alias: {
                '@app': path.join(__dirname, 'resources/js/app'),
                '@entities': path.join(__dirname, 'resources/js/entities'),
                '@features': path.join(__dirname, 'resources/js/features'),
                '@shared': path.join(__dirname, 'resources/js/shared'),
                '@pages': path.join(__dirname, 'resources/js/pages'),
                '@widgets': path.join(__dirname, 'resources/js/widgets'),
            },
            extensions: ['.ts', '.js', '.vue', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    },
                    exclude: [/node_modules/, /\.d\.ts$/]
                },
                {
                    test: /\.d\.ts$/,
                    loader: 'ignore-loader'
                }
            ]
        }
    })
    .version()
    .copy('resources/images/', 'public/images/');

mix.minify('public/css/app.css');