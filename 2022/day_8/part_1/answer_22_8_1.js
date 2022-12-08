const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

const maxRows = txt.length
const maxColumns = txt[0].length - 1

let matrix = []

for (let i = 0; i < maxRows; i++) {
    let newRow = Array(maxColumns)
    matrix.push(newRow)
}

for (let row = 0; row < maxRows; row++) {
    let currentRow = txt[row]

    for (let column = 0; column < maxColumns; column++) {
        let newCell = parseInt(currentRow.charAt(column));
        matrix[row][column] = newCell
    }
}


res = 0

function can_be_seen(matrix, column, row) {
    const height = matrix[column][row]

    let leftColumn = column - 1
    let rightColumn = column + 1
    let downRow = row - 1
    let upRow = row + 1

    let reachLeft = true
    while ((leftColumn >= 0) && (reachLeft)) {
        const compareHeightLeft = matrix[leftColumn][row]
        if (compareHeightLeft >= height) {
            reachLeft = false
        }
        leftColumn -= 1
    }
    if (reachLeft) {
        return 1
    }

    let reachRight = true
    while ((rightColumn < maxColumns) && (reachRight)) {
        const compareHeightRight = matrix[rightColumn][row]
        if (compareHeightRight >= height) {
            reachRight = false
        }
        rightColumn += 1
    }
    if (reachRight) {
        return 1
    }

    let reachTop = true
    while ((downRow >= 0) && (reachTop)) {
        const compareHeightTop = matrix[column][downRow]
        if (compareHeightTop >= height) {
            reachTop = false
        }
        downRow -= 1
    }
    if (reachTop) {
        return 1
    }

    let reachBottom = true
    while ((upRow < maxRows) && (reachBottom)) {
        const compareHeightBottom = matrix[column][upRow]
        if (compareHeightBottom >= height) {
            reachBottom = false
        }
        upRow += 1
    }
    if (reachBottom) {
        return 1
    }
    return 0
}

for (let row = 0; row < maxRows; row++) {
    for (let column = 0; column < maxColumns; column++) {
        const temp = can_be_seen(matrix, column, row)
        if (temp === 0) {
            matrix[column][row] = -1
        }
        res += temp
    }
}
console.log(res)
