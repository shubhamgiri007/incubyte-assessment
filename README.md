# String Calculator in JavaScript 🧮

This project implements a **String Calculator** in JavaScript, capable of parsing and adding numbers from a string input. It supports a variety of flexible input formats including:

- ✅ Unlimited numbers separated by commas or newlines
- ✅ Custom single or multiple delimiters (e.g., `//;\n1;2`)
- ✅ Multi-character delimiters (e.g., `//[***]\n1***2***3`)
- ✅ Mixed delimiters (e.g., `//[*][%]\n1*2%3`)
- ✅ Decimal number support (e.g., `2.5,3.1`)
- ✅ Ignores numbers greater than 1000
- 🚫 Throws errors for negative numbers with all negatives listed

### 📁 Files

- `stringCalculator.js` – core logic for parsing and summing numbers
- `stringCalculator.test.js` – test cases using Node.js `assert` module
- `app.js` – interactive CLI to input strings and view results

### 🚀 How to Run

```bash
# Run interactive CLI
node app.js

# Run test cases
node stringCalculator.test.js
