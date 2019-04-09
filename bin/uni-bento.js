#!/usr/bin/env node

'use strict';

const program = require('commander');
const moduleInfo = require('../package.json');

program
  .version(moduleInfo.version)
  .description('[uni-bento] 🍱 A universal unicode table printer')
  .option('--korean', 'Output all Korean characters from a unicode table')
  .option('--ascii', 'Output all ASCII characters');

program.parse(process.argv);

// const bento = require('../lib/index');

// const korean = process.argv.indexOf('--korean') > -1;
// const ascii = process.argv.indexOf('--ascii') > -1;

// if (korean) {
//   process.exitCode = bento.executeKorean();
// } else if (ascii) {
//   process.exitCode = bento.executeAscii();
// } else {
//   process.exitCode = bento.printHelp();
// }
