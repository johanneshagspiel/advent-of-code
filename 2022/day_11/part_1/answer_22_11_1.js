
class Monkey {

    constructor(item_list, divisible_amount, worry_operation, worry_amount, true_throw, false_throw) {
        this.item_list = item_list
        this.divisible_amount = divisible_amount

        this.worry_operation = worry_operation
        this.worry_amount = worry_amount

        this.true_throw = true_throw
        this.false_throw = false_throw
    }

    determine_new_worry(old_worry) {

        let otherAmount = 0

        if (this.worry_amount === "old") {
            otherAmount = old_worry
        } else {
            otherAmount = parseInt(this.worry_amount)
        }

        let new_worry = 0

        if (this.worry_operation === "+") {
            new_worry = old_worry + otherAmount
        } else if (this.worry_operation === "-") {
            new_worry = old_worry - otherAmount
        } else if (this.worry_operation === "*") {
            new_worry = old_worry * otherAmount
        } else if (this.worry_operation === "/") {
            new_worry = old_worry / otherAmount
        }

        return new_worry
    }

    determine_new_monkey(worry) {

        if (worry % parseInt(this.divisible_amount) === 0) {
            return parseInt(this.true_throw)
        } else {
            return parseInt(this.false_throw)
        }
    }
}


const fs = require("fs");

const txt = fs.readFileSync("./input/input.txt").toString().split("\n");

let monkeyList = []
let inspectionList = []

let item_list= []
let divisible_amount = 0
let worry_operation = ""
let worry_amount = ""
let true_throw = 0
let false_throw = 0

for (let i = 1; i < txt.length; i++) {

    let lineArr = txt[i].split(":")
    let changeCond = lineArr[0].split(" ")[0]

    if (changeCond === "Starting") {
        let newItemListStr = lineArr[1].split(",")
        const parseString = x => parseInt(x)
        item_list = newItemListStr.map(parseString)

    } else if (changeCond === "Operation") {
        let operationList = lineArr[1].split(" ")
        worry_operation = operationList[4]
        worry_amount = operationList[5].split("\r")[0]
    } else if (changeCond === "Test") {
        divisible_amount = parseInt(lineArr[1].split(" ")[3].split("\r")[0])
    } else if (changeCond === "If") {
        let throw_type = lineArr[0].split(" ")[1]
        let throw_location = parseInt(lineArr[1].split(" ")[4].split("\r")[0])

        if (throw_type === "true") {
            true_throw = throw_location
        } else {
            false_throw = throw_location
        }

    } else if (changeCond === "Monkey") {
        let newMonkey = new Monkey(item_list, divisible_amount, worry_operation, worry_amount, true_throw, false_throw)
        monkeyList.push(newMonkey)
        inspectionList.push(0)
    }
}

let newMonkey = new Monkey(item_list, divisible_amount, worry_operation, worry_amount, true_throw, false_throw)
monkeyList.push(newMonkey)
inspectionList.push(0)

for (let round = 1; round < 21; round++) {
    for (let monkey = 0; monkey < monkeyList.length; monkey++) {
        let currentMonkey = monkeyList[monkey]
        let currentInspections = inspectionList[monkey]

        for (let i = 0; i < currentMonkey.item_list.length; i++) {
            let startWorry = currentMonkey.item_list[i]
            let newWorry = currentMonkey.determine_new_worry(startWorry)
            newWorry = Math.floor(newWorry / 3)

            let newInspectingMonkey = currentMonkey.determine_new_monkey(newWorry)
            monkeyList[newInspectingMonkey].item_list.push(newWorry)
            currentInspections += 1
        }

        currentMonkey.item_list = []
        inspectionList[monkey] = currentInspections
    }
}

inspectionList.sort(function (a, b) {return a - b})
let mostInspections = inspectionList.slice(-1)[0]
let secondMostInspections = inspectionList.slice(-2)[0]
let monkeyBusiness = mostInspections * secondMostInspections

console.log(monkeyBusiness)