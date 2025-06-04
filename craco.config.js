// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const million = require('million/compiler');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
const postcss = require('./postcss.config');

// const DynamicCdnWebpackPlugin = require('@talend/dynamic-cdn-webpack-plugin');

const { whenProd, whenDev } = require('@craco/craco');

module.exports = {
  webpack: {
    ...whenProd(
      () => ({
        webpackConfig: webpackConfig => ({
          ...webpackConfig,
          mode: 'production',
          optimization: {
            ...webpackConfig.optimization,
            minimize: true,
            minimizer: [
              ...whenProd(
                () => [
                  new TerserPlugin({
                    parallel: true,
                    extractComments: false,
                    terserOptions: {
                      compress: {
                        warnings: false,
                        comparisons: true,
                        drop_console: true,
                      },
                      output: {
                        comments: false,
                        ascii_only: true,
                      },
                      format: {
                        comments: false,
                      },
                    },
                  }),
                ],
                [],
              ),
            ],
          },
        }),
      }),
      [],
    ),
    resolve: {
      extensions: ['.ts', '.js'],
      fallback: {
        buffer: require.resolve('buffer'),
      },
    },
    plugins: [
      // million.webpack({
      //   auto: {
      //     threshold: 0.05,
      //   },
      // }),
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
      ...whenDev(() => [new WebpackBar({ profile: true })], []),
      ...whenProd(
        () => [
          new WebpackBar({ profile: true }),
          new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.jsx$|\.js$|\.xml$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
          }),
          // new DynamicCdnWebpackPlugin(),
          // new BundleAnalyzerPlugin({
          //   analyzerMode: 'disabled',
          //   generateStatsFile: true,
          //   statsOptions: { source: false },
          // }),
        ],
        [],
      ),
    ],
  },
  style: {
    postcss,
  },
};
