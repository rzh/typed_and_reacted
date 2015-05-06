module.exports = {
  entry: __dirname + "/src/index.ts",

  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  output: {
    path: 'build',
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: 'build/'
  },

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'typescript-loader?typescriptCompiler=jsx-typescript'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};

