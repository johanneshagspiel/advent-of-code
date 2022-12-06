const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString().split("\n");

let foundSplitPoint = false;
let notFoundNow = true;

const firstHalf = [];
const secondHalf = [];

for (let i = 0; i < input.length; i++) {
    const curText = input[i];

    if (curText === "\r") {
        foundSplitPoint = true;
        notFoundNow = false
    }

    if (notFoundNow) {
        if (foundSplitPoint) {
            secondHalf.push(curText)
        } else {
            firstHalf.push(curText)
        }
    } else {
        notFoundNow = true
    }
}

firstHalf.reverse()

const arrayArray = []
let maxArrays = -1

for (let i = 0; i < firstHalf.length; i++) {
    const line = firstHalf[i]
    if (i === 0) {
        const maxArraysInt = parseInt(line.split(" ").slice(-1).toString().split("\r")[0]);

        for (let j = 0; j < maxArraysInt; j++) {
            arrayArray.push([])
        }
        maxArrays = maxArraysInt
    } else {

        let position = 1;
        let currentChar = "sdf";

        for (let j = 0; j < maxArrays; j++) {
            currentChar = line[position + j];
            position += 3

            if (currentChar && currentChar !==  " ") {
                arrayArray[j].push(currentChar)
            }
        }
    }
}
for (let i = 0; i < secondHalf.length; i++) {
    const instruction = secondHalf[i].split(" ");

    const amount = parseInt(instruction[1])
    const fromArray = parseInt(instruction[3])
    const toArray = parseInt(instruction[5])

    for (let j = 0; j < amount; j++) {
        const toPush = arrayArray[fromArray - 1].pop();
        arrayArray[toArray - 1].push(toPush);
    }
}

let res = ""

for (let i = 0; i < arrayArray.length; i++) {
    const lastLetter = arrayArray[i].slice(-1);
    res += lastLetter
}
console.log(res);