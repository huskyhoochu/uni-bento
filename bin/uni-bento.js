#!/usr/bin/env node

'use strict';

const program = require('commander');
const moduleInfo = require('../package.json');
const bento = require('../lib/index');

program
  .version(moduleInfo.version)
  .description('[uni-bento] 🍱 A universal unicode table printer')
  .option('--korean', 'Output all Korean characters from a unicode table')
  .option('--ascii', 'Output all ASCII characters');

program.parse(process.argv);

if (program.korean) {
  process.exitCode = bento.executeKorean();
}

if (program.ascii) {
  process.exitCode = bento.executeAscii();
}
