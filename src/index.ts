'use strict';

import * as fs from 'fs';
import ascii from './ascii';
import korean from './korean';

export default function execute(): number {
  fs.open('./uni-bento.txt', 'w', (error, fd) => {
    if (error) {
      throw error;
    }

    const koreanBuf = Buffer.from(korean(), 'utf-8');
    fs.write(fd, koreanBuf, 0, koreanBuf.length, null, err => {
      if (err) {
        throw err;
      }
    });

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
