
import { readFileSync } from "fs";
import "reflect-metadata";
import 'es6-shim';
import { plainToClass, plainToInstance } from "class-transformer";
import { BimFile } from "./types/File";

// const house = plainToClass(BimFile, '{"info": {"Author": "klaus"}}', {strategy: "exposeAll"});
const house = plainToInstance(BimFile, JSON.parse(readFileSync('./test/House.json', {encoding: 'utf-8'})));
// const house = readFileSync('./test/House.json', {encoding: 'utf-8'});

console.log(house.elements.filter(item => item.type === 'IfcWindow'))
// console.log(house.schemaVersion)

// class Test {
//   a!: number;

//   print() {
//     return this.a + 2;
//   }
// }

// const test = '{"a": 1}';


// console.log(plainToInstance(Test, JSON.parse(test)).print());