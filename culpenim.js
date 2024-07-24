// Assume multiRes is an object like this
const multiRes = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

// Extract the keys into an array
const entries = Object.keys(multiRes);

console.log(entries); // Output: ['key1', 'key2', 'key3']
