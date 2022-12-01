const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();
const lines = input.split("\n");

let countArray = []
let currentCount = 0

for (let i = 0; i < lines.length; i++) {
    let currentCal = lines[i]

    if (currentCal === "\r") {
        countArray.push(currentCount)
        currentCount = 0
    } else {
        let intCurrentCal = parseInt(currentCal)
        currentCount += intCurrentCal
    }
}

countArray.sort(function(a, b){return a-b})

let res = countArray.slice(-1)[0] + countArray.slice(-2)[0] + countArray.slice(-3)[0]

console.log(countArray.slice(-3)[0])
console.log(countArray.slice(-2)[0])
console.log(countArray.slice(-1)[0])
console.log(res)