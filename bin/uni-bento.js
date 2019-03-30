#!/usr/bin/env node

'use strict';

const bento = require('../lib/index');

const korean = process.argv.indexOf('--korean') > -1;
const ascii = process.argv.indexOf('--ascii') > -1;

if (korean) {
  process.exitCode = bento.executeKorean();
} else if (ascii) {
  process.exitCode = bento.executeAscii();
} else {
  process.exitCode = bento.executeAll();
}
