module.exports = {
    entry: './app.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015']
              }
            }
        ]
    }
};