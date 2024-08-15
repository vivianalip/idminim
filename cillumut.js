const keyValues = [
  { key: 'key1', value: 'value1' },
  { key: 'key2', value: 'value2' },
  { key: 'key3', value: 'value3' }
];

const concatenatedString = '{'.concat(keyValues.map(kv => `${kv.key}: ${kv.value}`).join(', '), '}');
console.log(concatenatedString);
