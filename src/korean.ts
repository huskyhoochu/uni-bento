'use_strict';

export default function korean(): string {
  let result = '';

  // 완성형
  let completeCount = 0;
  for (let x = 172; x < 216; x++) {
    for (let i = 0; i < 256; i++) {
      let converted = '';
      if (i < 16) {
        converted = String.fromCharCode(parseInt(`0X${x.toString(16)}0${i.toString(16)}`, 16));
      } else {
        converted = String.fromCharCode(parseInt(`0X${x.toString(16)}${i.toString(16)}`, 16));
      }
      if (completeCount >= 11172) {
        break;
      }
      completeCount++;
      result = result + converted;
    }
  }

  // 자모
  for (let y = 49; y < 100; y++) {
    result = result + String.fromCharCode(parseInt(`0X31${y.toString(16)}`, 16));
  }

  return result;
}
