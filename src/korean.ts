'use_strict';

export default function korean(): string {
  let result = '';

  // 완성형
  let completeCount = 0;
  for (let x = 172; x < 216; x++) {
    for (let y = 0; y < 256; y++) {
      let converted = '';
      if (y < 16) {
        converted = String.fromCharCode(parseInt(`0X${x.toString(16)}0${y.toString(16)}`, 16));
      } else {
        converted = String.fromCharCode(parseInt(`0X${x.toString(16)}${y.toString(16)}`, 16));
      }
      if (completeCount >= 11172) {
        break;
      }
      completeCount++;
      result = result + converted;
    }
  }

  // 자모
  for (let z = 49; z < 100; z++) {
    result = result + String.fromCharCode(parseInt(`0X31${z.toString(16)}`, 16));
  }

  return result;
}
