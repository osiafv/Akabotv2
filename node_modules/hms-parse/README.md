# hms-parse [![npm](https://img.shields.io/npm/v/hms-parse.svg)](https://www.npmjs.com/package/hms-parse) [![downloads](https://img.shields.io/npm/dt/hms-parse.svg)](https://www.npmjs.com/package/hms-parse) ![tests](https://img.shields.io/badge/tests-passing-brightgreen.svg) [![maintained](https://img.shields.io/badge/maintained-%E2%9C%94-brightgreen.svg)](https://github.com/fvgs/hms-parse)

> Parse hms time strings to and from seconds

## Install

```
npm install --save hms-parse
```

## Usage

```js
const hms = require('hms-parse')

let seconds
seconds = hms.toSeconds(['1h', '45m', '10s']) // => 6310
seconds = hms.toSeconds(['45m', '10s']) // => 2710
seconds = hms.toSeconds(['10s']) // => 10
seconds = hms.toSeconds(['1s', '5S', '10m', '4M', '3h', '1H']) // => 15246

let timeString
timeString = hms.fromSeconds(6310) // => '1:45:10'
timeString = hms.fromSeconds(2710) // => '45:10'
timeString = hms.fromSeconds(10) // => '10s'
```
