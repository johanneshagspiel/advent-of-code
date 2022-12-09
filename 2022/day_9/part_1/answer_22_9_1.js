const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

let visitedSet = new Set();

let headX = 0
let headY = 0
let tailX = 0
let tailY = 0

let startPosition = tailX.toString() + "_" + tailY.toString();
visitedSet.add(startPosition);

for (let i = 0; i < txt.length; i++) {
    const line = txt[i];
    const direction = line.split(" ")[0];
    const amount = parseInt(line.split(" ")[1]);

    for (let moves = 0; moves < amount; moves++) {
        if (direction === "R") {
            headX += 1
        } else if (direction === "L") {
            headX -= 1
        } else if (direction === "U") {
            headY += 1
        } else if (direction === "D") {
            headY -= 1
        }

        let xDistance = headX - tailX
        let yDistance = headY - tailY

        if (xDistance === 2 && yDistance === 0) {
            tailX += 1
        } else if (xDistance === -2 && yDistance === 0) {
            tailX -= 1
        } else if (xDistance === 0 && yDistance === 2) {
            tailY += 1
        } else if (xDistance === 0 && yDistance === -2) {
            tailY -= 1
        } else if (xDistance === 2 && yDistance === 1) {
            tailX += 1
            tailY += 1
        } else if (xDistance === 2 && yDistance === -1) {
            tailX += 1
            tailY -= 1
        } else if (xDistance === -2 && yDistance === 1) {
            tailX -= 1
            tailY += 1
        } else if (xDistance === -2 && yDistance === -1) {
            tailX -= 1
            tailY -= 1
        } else if (xDistance === 1 && yDistance === 2) {
            tailX += 1
            tailY += 1
        } else if (xDistance === 1 && yDistance === -2) {
            tailX += 1
            tailY -= 1
        } else if (xDistance === -1 && yDistance === 2) {
            tailX -= 1
            tailY += 1
        } else if (xDistance === -1 && yDistance === -2) {
            tailX -= 1
            tailY -= 1
        }

        const headString = headX.toString() + "_" + headY.toString();
        const tailString = tailX.toString() + "_" + tailY.toString();
        visitedSet.add(tailString);

    }
}

console.log(visitedSet.size)