function Add(numbers) {
    if (!numbers) return 0;

    let delimiters = [',', '\n'];
    let numberString = numbers;

    if (numbers.startsWith('//')) {
        const delimiterSectionEnd = numbers.indexOf('\n');
        const delimiterSection = numbers.substring(2, delimiterSectionEnd);
        numberString = numbers.substring(delimiterSectionEnd + 1);

        const matches = delimiterSection.match(/\[([^\]]+)\]/g);
        if (matches) {
            delimiters = matches.map(d => d.slice(1, -1));
        } else {
            delimiters = [delimiterSection];
        }
    }

    const escapedDelimiters = delimiters.map(d =>
        d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    const splitRegex = new RegExp(escapedDelimiters.join('|'));

    const parts = numberString
        .split(splitRegex)
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(Number);

    const negatives = parts.filter(n => !isNaN(n) && n < 0);
    if (negatives.length) {
        throw new Error("negatives not allowed: " + negatives.join(', '));
    }

    return parts
        .filter(n => !isNaN(n) && n <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = { Add };
