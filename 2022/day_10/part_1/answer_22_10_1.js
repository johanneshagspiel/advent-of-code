const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

let keepGoing = true

let cycle = 0
let cycleTarget = 20

let x = 1

let instructionCounter = 0
let current_instruction = txt[instructionCounter].split("\r")[0].split(" ")[0]
let current_instruction_timer;
let nextChange = 0

if (current_instruction === "noop") {
    current_instruction_timer = 1
} else {
    current_instruction_timer = 2
    nextChange = parseInt(txt[instructionCounter].split("\r")[0].split(" ")[1])
}

res = 0

while (keepGoing) {

    if (cycle === cycleTarget) {
        res += (cycleTarget * x)
        cycleTarget += 40

        if (cycleTarget > 220) {
            keepGoing = false
        }
    }

    if (current_instruction_timer === 0) {
        x += nextChange
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
    } else {
        cycle += 1
        current_instruction_timer -= 1
    }
}

console.log(res)