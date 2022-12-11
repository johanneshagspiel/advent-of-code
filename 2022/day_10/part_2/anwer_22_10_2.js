const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

let keepGoing = true

let middle = 1

let instructionCounter = 0
let current_instruction = txt[instructionCounter].split("\r")[0].split(" ")[0]
let current_instruction_timer = 0
let nextChange = 0

if (current_instruction === "noop") {
    current_instruction_timer = 1
} else {
    current_instruction_timer = 2
    nextChange = parseInt(txt[instructionCounter].split("\r")[0].split(" ")[1])
}

line = ""
let xDrawn = 0
let yDrawn = 0

while (keepGoing) {

    let drawDistance = Math.abs(xDrawn - middle)

    if (drawDistance === 0) {
        line += "#"
    } else if (drawDistance === 1) {
        line += "#"
    } else {
        line += "."
    }
    xDrawn += 1

    if (xDrawn === 40) {
        console.log(line)
        line = ""
        yDrawn += 1
        xDrawn = 0
    }

    if (yDrawn === 6) {
        keepGoing = false
    }

    current_instruction_timer -= 1

    if (current_instruction_timer === 0) {
        middle += nextChange
        instructionCounter += 1

        if (instructionCounter === txt.length) {
            keepGoing = false
        } else {

            current_instruction = txt[instructionCounter].split("\r")[0].split(" ")[0]

            if (current_instruction === "noop") {
                current_instruction_timer = 1
                nextChange = 0
            } else {
                current_instruction_timer = 2
                nextChange = parseInt(txt[instructionCounter].split("\r")[0].split(" ")[1])
            }
        }
    }
}
