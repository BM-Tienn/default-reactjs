import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import macrosPlugin from 'vite-plugin-babel-macros';
import EnvironmentPlugin from 'vite-plugin-environment';
import MinifyCssModule from 'vite-minify-css-module/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import cdn from 'vite-plugin-cdn-import';

export default defineConfig({
  base: '/',
  plugins: [
    react({}),
    svgr({
      svgrOptions: {
        exportType: 'named',
      },
    }),
    viteTsconfigPaths(),
    macrosPlugin(),
    EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
      overlay: true,
    }),
    ViteMinifyPlugin({}),
    compression(),
    MinifyCssModule(),
    visualizer(),
    nodePolyfills({
      include: ['path', 'stream', 'util'],
      exclude: ['http'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      overrides: {
        fs: 'memfs',
      },
      protocolImports: true,
    }),
    cdn({
      modules: [
        'react',
        'react-dom',
        'dayjs',
        'antd',
        'axios',
        {
          name: 'suneditor',
          var: 'SUNEDITOR',
          path: [`dist/suneditor.min.js`, `src/lang/en.js`],
          css: `dist/css/suneditor.min.css`,
        },
      ],
      enableInDevMode: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  optimizeDeps: {
    include: ['react', 'aws-sdk', 'html2canvas'],
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
  define: {
    global: 'window',
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      strictRequires: true,
      include: [/node_modules/],
    },
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'dayjs',
        'antd',
        'axios',
        // 'recharts',
        'suneditor',
        'three',
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const _id = id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
            return _id;
          }
        },
        // manualChunks: {
        //   // antd: ['antd'],
        //   'aws-sdk': ['aws-sdk'],
        //   // suneditor: ['suneditor'],
        // },
      },
    },
  },
  resolve: {
    alias: [
      // { './runtimeConfig': './runtimeConfig.browser' },
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  esbuild: {
    sourcemap: false,
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 5555,
    // warmup: {
    //   clientFiles: ['./src/**/*.{js,jsx,ts,tsx}'],
    // },
  },
  preview: {
    port: 5555,
  },
});
