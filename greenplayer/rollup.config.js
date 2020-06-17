import babel from 'rollup-plugin-babel';
import {
  uglify
} from 'rollup-plugin-uglify';
export default {
  input: './src/index.js',
  output: [{
      file: './dist/greenplayer-h265.cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/greenplayer-h265.esm.js',
      format: 'esm'
    }
  ],
  // sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: true,
      presets: [
        ["@babel/env", {
          modules: false
        }]
      ],
      runtimeHelpers: true,
      plugins: ["@babel/transform-runtime"]
    }),
    // uglify({
    //   output: {
    //     comments: "all"
    //   }
    // })
  ]
}