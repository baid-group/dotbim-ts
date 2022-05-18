import "reflect-metadata";
import "es6-shim";
import { plainToInstance, instanceToPlain } from "class-transformer";
import { BimFile } from "./classes/File";

export const parse = (json: string): BimFile => {
  return plainToInstance(BimFile, JSON.parse(json));
};

export const encode = (bimFile: BimFile): string => {
  return JSON.stringify(instanceToPlain(bimFile));
};
