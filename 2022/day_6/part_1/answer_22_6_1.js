const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();
const seenSet = {};
let left = 0

for (let right = 0; right < input.length; right++) {

    const curChar = input.charAt(right);

    if (!(curChar in seenSet)) {
        seenSet[curChar] = 1;
    } else {
        let prevCount = seenSet[curChar]
        prevCount += 1
        seenSet[curChar] = prevCount
    }

    while (seenSet[input.charAt(right)] > 1) {
        const leftChar = input.charAt(left)
        let prevCount = seenSet[leftChar]
        prevCount -= 1
        seenSet[leftChar] = prevCount
        left += 1
    }

    if (right - left === 4) {
        console.log(right)
        break
    }
}
