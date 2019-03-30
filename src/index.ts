'use strict';

import * as fs from 'fs';
import ascii from './ascii';
import korean from './korean';

export function executeKorean(): number {
  fs.open('./uni-bento.korean.txt', 'w', (error, fd) => {
    if (error) {
      throw error;
    }

    const koreanBuf = Buffer.from(korean(), 'utf-8');
    fs.write(fd, koreanBuf, 0, koreanBuf.length, null, err => {
      if (err) {
        throw err;
      }
    });

    fs.close(fd, () => console.log(`\nAll process is done.\n`));
  });

  return 0;
}

export function executeAscii(): number {
  fs.open('./uni-bento.ascii.txt', 'w', (error, fd) => {
    if (error) {
      throw error;
    }

    const asciiBuf = Buffer.from(ascii(), 'utf-8');
    fs.write(fd, asciiBuf, 0, asciiBuf.length, null, err => {
      if (err) {
        throw err;
      }
    });

    fs.close(fd, () => console.log(`\nAll process is done.\n`));
  });

  return 0;
}

export function printHelp(): number {
  const helpText = `
  [uni-bento] 🍱 A universal unicode table printer

  Usage: uni-bento [OPTIONS]

  Options:
    --korean    Output all Korean characters from a Unicode table
    --ascii     Output all ASCII characters
  `;

  console.log(helpText);
  return 0;
}
