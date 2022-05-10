import { plainToInstance } from "class-transformer";
import { readFileSync } from "fs";
import "reflect-metadata";
import { BimFile } from "./types/File";

const house = plainToInstance(BimFile, readFileSync('/test/House.json'));

console.log(house.info);