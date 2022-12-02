const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();
const lines = input.split("\n");

const pointDic = {"A": 1, "B": 2, "C": 3};
const drawDic = {"A": "A", "B": "B", "C": "C"};
const beatDic = {"C": "A", "A": "B", "B": "C"};
const looseDic = {"A": "C", "B": "A", "C": "B"}

let totalScore = 0;


for (let i = 0; i < lines.length; i++) {
    let currentGame = lines[i];
    let moves = currentGame.split(" ");

    let opponentMove = moves[0];
    let toDo = moves[1].split("\r")[0];

    if (toDo === "X") {
        let myMove = looseDic[opponentMove];
        totalScore += pointDic[myMove]
    } else if (toDo === "Y") {
        let myMove = drawDic[opponentMove];
        totalScore += pointDic[myMove]
        totalScore += 3
    } else {
        let myMove = beatDic[opponentMove];
        totalScore += pointDic[myMove]
        totalScore += 6
    }
}

console.log(totalScore);