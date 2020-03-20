/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import typescriptPlugin from 'rollup-plugin-typescript2';
import pkg from './package.json';
import replace from 'rollup-plugin-replace';
import copy from 'rollup-plugin-copy-assets';
import typescript from 'typescript';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  typescriptPlugin({
    typescript
  }),
  terser({ // remove comments only, so size presubmit can do code size diff correctly.
    output: {
      comments: false
    },
    compress: false,
    mangle: false
  })
];

const deps = Object.keys(
  Object.assign({}, pkg.peerDependencies, pkg.dependencies)
);

export default {
  input: 'index.ts',
  output: [{ file: pkg.main, format: 'cjs', sourcemap: true }],
  plugins: [
    ...plugins,
    // Needed as we also use the *.proto files
    copy({ assets: ['./src/protos'] }),
    replace({
      'process.env.FIRESTORE_EMULATOR_PROTO_ROOT': JSON.stringify('src/protos')
    })
  ],
  external: id => deps.some(dep => id === dep || id.startsWith(`${dep}/`))
};
