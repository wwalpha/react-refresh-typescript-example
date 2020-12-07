import { Configuration, LoaderOptionsPlugin } from 'webpack';

const configs: Configuration = {
  entry: ['./src/index.tsx'],
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // ここから
            options: { plugins: ['react-refresh/babel'] },
            // ここまで
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
    }),
  ],
  bail: true,
};

export default configs;
