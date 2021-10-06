module.exports = {
    mode: 'none',
    // list of entry points
    entry: [
        __dirname + '/index.js'
    ],

    // where to save transformed files
    output: {
        filename: "bundle.js",
        path: __dirname + '/dist'
    },
}