// ()表示捕获 专门为词法分析做准备
const regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\+)|(\-)|(\*)|(\/)/g;
// 字典
const dictionary = [
  'Number',
  'WhiteSpace',
  'LineTerminator',
  '+',
  '-',
  '*',
  '/',
];

function* tokenize(source) {
  let lastIndex = 0;
  let result = null;
  while (true) {
    lastIndex = regexp.lastIndex;
    result = regexp.exec(source);
    if (!result) break;
    if (regexp.lastIndex - lastIndex > result[0].length)
      // throw error
      break;

    let token = {
      type: null,
      value: null,
    };
    for (let i = 1; i <= dictionary.length; i++) {
      if (result[i]) token.type = dictionary[i - 1];
    }
    token.value = result[0];
    yield token;
  }
  yield {
    type: 'EOF',
  };
}

for (let iterator of tokenize('1024 + 10 * 25')) {
  console.log(iterator);
}
