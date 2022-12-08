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
        matrix[row][column] = parseInt(currentRow.charAt(column));
    }
}

max_Distance = 0

function find_viewing_distance(matrix, column, row) {
    const height = matrix[column][row]

    let leftColumn = column - 1
    let leftDistance = 0

    let rightColumn = column + 1
    let rightDistance = 0

    let downRow = row - 1
    let downDistance = 0

    let upRow = row + 1
    let upDistance = 0

    let reachLeft = true
    while ((leftColumn >= 0) && (reachLeft)) {
        leftDistance += 1

        const compareHeightLeft = matrix[leftColumn][row]
        if (compareHeightLeft >= height) {
            reachLeft = false
        }
        leftColumn -= 1
    }

    let reachRight = true
    while ((rightColumn < maxColumns) && (reachRight)) {
        rightDistance += 1

        const compareHeightRight = matrix[rightColumn][row]
        if (compareHeightRight >= height) {
            reachRight = false
        }
        rightColumn += 1
    }

    let reachTop = true
    while ((downRow >= 0) && (reachTop)) {
        downDistance += 1

        const compareHeightTop = matrix[column][downRow]
        if (compareHeightTop >= height) {
            reachTop = false
        }

        downRow -= 1
    }

    let reachBottom = true
    while ((upRow < maxRows) && (reachBottom)) {
        upDistance += 1

        const compareHeightBottom = matrix[column][upRow]
        if (compareHeightBottom >= height) {
            reachBottom = false
        }
        upRow += 1
    }

    return upDistance * downDistance * leftDistance * rightDistance
}

for (let row = 0; row < maxRows; row++) {
    for (let column = 0; column < maxColumns; column++) {
        const viewing_Distance = find_viewing_distance(matrix, column, row)

        if (viewing_Distance > max_Distance) {
            max_Distance = viewing_Distance;
        }
    }
}

console.log(max_Distance)
