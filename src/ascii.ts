'use_strict';

export default function ascii(): string {
  let result = '';
  for (let a = 33; a < 127; a++) {
    result = result + String.fromCharCode(a);
  }

  return result;
}
