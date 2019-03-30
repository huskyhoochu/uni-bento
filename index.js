const fs = require('fs');

fs.open('./unicode.txt', 'w', (err, fd) => {
  if(err) throw err;
  // 완성형
  let completeCount = 0;
  for (let x = 172; x < 216; x++) {
    for (let i = 0; i < 256; i++) {
      let converted = '';
      if (i < 16) {
        converted = String.fromCharCode(`0X${x.toString(16)}0${i.toString(16)}`);
      } else {
        converted = String.fromCharCode(`0X${x.toString(16)}${i.toString(16)}`);
      }
      
      if (completeCount >= 11172) {
        break;
      }

      completeCount++;
      console.log(converted, completeCount);

      let buf = new Buffer.from(converted);
      fs.write(fd, buf, 0, buf.length, null, (err, written, buffer) => {
        if (err) throw err;
      })
    }
  }

  // 자모
  let jamoCount = 0;
  for (let y = 49; y < 100; y++) {
    let converted = '';
    converted = String.fromCharCode(`0X31${y.toString(16)}`);
    jamoCount++;
    console.log(converted, jamoCount);
    let buf = new Buffer.from(converted);
    fs.write(fd, buf, 0, buf.length, null, (err, written, buffer) => {
      if (err) throw err;
    })
  }

  // ascii
  let asciiCount = 0;
  for (let a = 33; a < 127; a++) {
    let converted = '';
    converted = String.fromCharCode(a);
    asciiCount++;
    console.log(converted, asciiCount);
    let buf = new Buffer.from(converted);
    fs.write(fd, buf, 0, buf.length, null, (err, written, buffer) => {
      if (err) throw err;
    })
  }

  fs.close(fd, () => console.log(`All process is done.`))
})
