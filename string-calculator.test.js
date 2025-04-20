const { Add } = require('./string-calculator');
const assert = require('assert');

assert.strictEqual(Add(""), 0);
assert.strictEqual(Add("1"), 1);
assert.strictEqual(Add("1,2"), 3);
assert.strictEqual(Add("1,2,3,4"), 10);

assert.strictEqual(Add("1\n2,3"), 6);

assert.strictEqual(Add("//;\n1;2"), 3);

assert.strictEqual(Add("//[***]\n1***2***3"), 6);

assert.strictEqual(Add("//[*][%]\n1*2%3"), 6);

assert.strictEqual(Add("//[**][%%]\n1**2%%3"), 6);

assert.strictEqual(Add("2,1001"), 2);

try {
    Add("1,-2,3,-5");
    console.error("Expected exception for negatives");
} catch (e) {
    assert.strictEqual(e.message, "negatives not allowed: -2, -5");
    console.log("Negative number exception test passed");
}

console.log("All test cases passed!");
