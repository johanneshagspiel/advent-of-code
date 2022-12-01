const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();
const lines = input.split("\n");

let maxTotal = 0
let currentCount = 0

for (let i = 0; i < lines.length; i++) {
    let currentCal = lines[i]

    if (currentCal === "\r") {

        if (currentCount > maxTotal) {
            maxTotal = currentCount
        }
        currentCount = 0
    } else {
        let intCurrentCal = parseInt(currentCal)
        currentCount += intCurrentCal
    }
}
console.log(maxTotal)
