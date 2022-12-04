const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString().split("\n");

let res = 0

for (let i = 0; i < input.length; i++) {
    const sections = input[i];
    const firstHalf = sections.split(",")[0]
    const firstStart = parseInt(firstHalf.split("-")[0])
    const firstEnd = parseInt(firstHalf.split("-")[1])

    const secondHalf = sections.split(",")[1].split("\r")[0]
    const secondStart = parseInt(secondHalf.split("-")[0])
    const secondEnd = parseInt(secondHalf.split("-")[1])

    const maxStart = Math.max(firstStart, secondStart)
    const minEnd = Math.min(firstEnd, secondEnd)

    if (maxStart <= minEnd) {
        res += 1
    }
}

console.log(res);