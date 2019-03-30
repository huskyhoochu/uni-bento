# 🍱 uni-bento

> A universal unicode table printer

## Summary

uni-bento는 유니코드 테이블에서 지정된 언어의 철자 전체를 `.txt` 파일로 출력해주는 간단한 툴입니다. 현재는 한국어 및 아스키 문자 출력을 지원하고 있습니다.

uni-bento is a simple tool that prints the entire spelling of a specified language from a Unicode table to a `.txt` file. Currently, Korean and ASCII character output is supported.

## Supported languages

- 한국어: 유니코드 완성형 11,172자 (U+AC00 ~ U+D7A3) + 한글 자모 51자 (U+3131 ~ U+3163) (참고: [HANGUL IN UNICODE](http://www.programminginkorean.com/programming/hangul-in-unicode/))

- 아스키: 아스키 테이블에서 제어문자와 공백문자를 제외한 모든 문자

- Korean: Unicode completion type 11,172 characters (U+AC00 ~ U+D7A3) + 51 Korean Jamo (Pure vowels and consonants) characters (U+3131 ~ U+3163)

- ASCII: All characters except the control and blank characters in the ASCII table

## Why do you need uni-bento?

규모가 큰 폰트의 서브셋을 만들 때 폰트에 담아야 할 문자 전체를 신뢰성 있게 확보해야 할 필요가 있습니다. 혹은 언어학 연구를 위해 방대한 상형문자 세트나 고대 언어, 소수민족 언어 데이터가 필요한 경우도 있죠.

uni-bento는 매우 단순한 솔루션을 제시합니다. 지정된 범위의 유니코드 테이블을 순회하면서 모든 문자를 `.txt` 파일에 출력해줍니다. 앞으로는 다른 여러 언어를 지원하는 기능을 넣고자 합니다.

When you create a subset of large fonts, you need to ensure that all the characters you need to put in the fonts are reliably secured. Or you may need massive hieroglyphics, ancient languages, ethnic language data for linguistics studies.

uni-bento presents a very simple solution. It prints all characters to `.txt` file while traversing Unicode table of specified range. In the future, I would like to add features that support multiple languages.

## Installation

```
// npm
npm install -g uni-bento

// yarn
yarn global add uni-bento
```

## Usage

Output help text

```
$ uni-bento
```

Output all Korean characters from a unicode table

```
$ uni-bento --korean
```

Output all ASCII characters

```
$ uni-bento --ascii
```

## Roadmap

- 더 많은 언어 선택 출력 기능 (한국어, 영어, 일본어, 독일어, 프랑스어 등...)
- 옛한글 및 번체자, 간체자 영역
- 유니코드 범위 입력 시 출력 기능
