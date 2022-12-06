const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();

for (let left = 0; left < (input.length - 14); left++) {
    let right = left + 14;
    let textSlice = input.slice(left, right)
    let seenSet = new Set();
    let duplicate = false;

    for (let i = 0; i < 14; i++) {
        let curChar = textSlice.charAt(i);

        if (seenSet.has(curChar)) {
            duplicate = true
        } else {
            seenSet.add(curChar)
        }
    }
    if (!duplicate) {
        console.log(right)
        break
    }
}
console.log("hi");