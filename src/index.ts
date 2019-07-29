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

    fs.close(fd, () => console.log(`\n🍱 Bento is here! - korean\n`));
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

    fs.close(fd, () => console.log(`\n🍱 Bento is here! - ascii\n`));
  });

  return 0;
}
