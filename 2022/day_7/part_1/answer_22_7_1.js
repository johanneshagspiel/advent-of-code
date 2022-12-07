
class Directory {

    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.children = [];
        this.local_file_size = 0
    }

    add_child(child) {
        this.children.push(child)
    }

    add_to_local_file_size(addition) {
        this.local_file_size += addition;
    }

}



const fs = require("fs");

const input = fs.readFileSync("./input/input.txt").toString().split("\n");

let rootDir = new Directory("/", null);
let curDir = rootDir

for (let i = 2; i < input.length; i++) {
    const line = input[i].split(" ");

    if (line[0] === "dir") {
        let name = line[1].split("\r")[0];
        let newDir = new Directory(name, curDir);
        curDir.add_child(newDir)
    } else if (line[0] === "$") {
        if (line[1] === "cd") {
            let toEnter = line[2].split("\r")[0];

            if (toEnter === "..") {
                curDir = curDir.parent
            } else {
                for (let child of curDir.children) {
                    if (child.name === toEnter) {
                        curDir = child;
                        break
                    }
                }
            }
        }
    } else {
        const fileSize = parseInt(line[0])
        curDir.add_to_local_file_size(fileSize);
    }
}

let res = 0

function passFileSize(curDir) {
    let childFileSize = 0
    for (let child of curDir.children) {
        childFileSize += passFileSize(child)
    }
    curDir.add_to_local_file_size(childFileSize)

    if (curDir.local_file_size <= 100000) {
        res += curDir.local_file_size
    }

    return curDir.local_file_size
}

let totalFileSize = passFileSize(rootDir)

console.log(res)