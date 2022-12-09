const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

let visitedSet = new Set();
visitedSet.add("0_0")

let xList = Array(10).fill(0)
let yList = Array(10).fill(0)

for (let i = 0; i < txt.length; i++) {
    const line = txt[i];
    const direction = line.split(" ")[0];
    const amount = parseInt(line.split(" ")[1]);

    for (let moves = 0; moves < amount; moves++) {

        headX = xList[0]
        headY = yList[0]

        if (direction === "R") {
            headX += 1
        } else if (direction === "L") {
            headX -= 1
        } else if (direction === "U") {
            headY += 1
        } else if (direction === "D") {
            headY -= 1
        }

        xList[0] = headX
        yList[0] = headY

        for (let j = 1; j < 10; j++) {

            headX = xList[j-1]
            headY = yList[j-1]

            tailX = xList[j]
            tailY = yList[j]

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
            } else if (xDistance === 2 && yDistance === 2) {
                tailX += 1
                tailY += 1
            } else if (xDistance === 2 && yDistance === -2) {
                tailX += 1
                tailY -= 1
            } else if (xDistance === -2 && yDistance === 2) {
                tailX -= 1
                tailY += 1
            } else if (xDistance === -2 && yDistance === -2) {
                tailX -= 1
                tailY -= 1
            }

            if (j === 9) {
                const tailString = tailX.toString() + "_" + tailY.toString();
                visitedSet.add(tailString);
            }

            xList[j] = tailX
            yList[j] = tailY
        }
    }
}

console.log(visitedSet.size)