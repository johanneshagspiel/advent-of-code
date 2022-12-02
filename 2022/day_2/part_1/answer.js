const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString();
const lines = input.split("\n");

let totalScore = 0;

const pointDic = {"X": 1, "Y": 2, "Z": 3};
const drawDic = {"X": "A", "Y": "B", "Z": "C"};
const beatDic = {"X": "C", "Y": "A", "Z": "B"};

for (let i = 0; i < lines.length; i++) {
    let currentGame = lines[i];
    let moves = currentGame.split(" ");

    let opponentMove = moves[0];
    let myMove = moves[1].split("\r")[0];
    console.log(moves)
    console.log(myMove)
    totalScore += pointDic[myMove];

    if (drawDic[myMove] === opponentMove) {
        totalScore += 3
    } else if (beatDic[myMove] === opponentMove) {
        totalScore += 6
    }
}

console.log(totalScore);