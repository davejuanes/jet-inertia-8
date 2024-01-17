const mix = require("laravel-mix");

/* mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
 */
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    plugins: ["@babel/plugin-syntax-import-meta"],
                },
            },
        ],
    },
});
