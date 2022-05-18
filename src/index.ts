import "reflect-metadata";
import "es6-shim";
import { plainToInstance, instanceToPlain } from "class-transformer";
import { BimFile } from "./classes/File";
import { Color } from "./classes/Color";
import { Element } from "./classes/Element";
import { Info } from "./classes/Info";
import { Mesh } from "./classes/Mesh";
import { Rotation } from "./classes/Rotation";
import { Vector } from "./classes/Vector";

export const parse = (json: string): BimFile => {
  return plainToInstance(BimFile, JSON.parse(json));
};

export const encode = (bimFile: BimFile): string => {
  return JSON.stringify(instanceToPlain(bimFile));
};

export { BimFile, Color, Element, Info, Mesh, Rotation, Vector };
