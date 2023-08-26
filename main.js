#!/usr/bin/env node

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help
// shebang syntax -> issai os ko pta chal jayega ye script kis environment mai run krna hai

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");


const { env } = require("process");
// console.log(inputArr);

let command = inputArr[0];

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch (command){
    case "tree":
        treeObj.treekey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizekey(inputArr[1]);
        break;
    case "help":
        helpObj.helpkey();
        break;
    default:
        console.log("Please input right command");
        break;
}







