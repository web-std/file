# web-file

## Status

Deprecated: This library was superseeded by [@web-std/file](https://www.npmjs.com/package/@web-std/file). Please use that library instead.

![Node.js CI][node.js ci]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

Web API compatible [File][] for nodejs.

### Usage

```js
import { File, Blob } from "web-file-polyfill"
const file = new File(["hello", new TextEncoder().encode("world")], "hello")
for await (const chunk of blob.stream()) {
  console.log(chunk)
}
```

### Usage from Typescript

This library makes use of [typescript using JSDOC annotations][ts-jsdoc] and
also generates type difinitions along with typed definition maps. So you should
be able to get all the type innference out of the box.

## Install

    npm install web-file-polyfill

[node.js ci]: https://github.com/Gozala/web-file-polyfill/workflows/Node.js%20CI/badge.svg
[version.icon]: https://img.shields.io/npm/v/web-file-polyfill.svg
[downloads.icon]: https://img.shields.io/npm/dm/web-file-polyfill.svg
[package.url]: https://npmjs.org/package/web-file-polyfill
[downloads.image]: https://img.shields.io/npm/dm/web-file-polyfill.svg
[downloads.url]: https://npmjs.org/package/web-file-polyfill
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
[blob]: https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
[fetch-blob]: https://github.com/node-fetch/fetch-blob
[readablestream]: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
[readable]: https://nodejs.org/api/stream.html#stream_readable_streams
[file]: https://w3c.github.io/FileAPI/
[for await]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
[buffer]: https://nodejs.org/api/buffer.html
[weakmap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[ts-jsdoc]: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
