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
  const parsedJson = JSON.parse(json);

  return plainToInstance(BimFile, parsedJson, {
    version: calculateVersion(parsedJson.schema_version),
  });
};

export const encode = (bimFile: BimFile): string => {
  return JSON.stringify(
    instanceToPlain(bimFile, {
      version: calculateVersion(bimFile.schemaVersion),
    })
  );
};

export { BimFile, Color, Element, Info, Mesh, Rotation, Vector };

const calculateVersion = (val?: string): number => {
  if (!val) {
    throw "Can't find schema_version.";
  }

  const splitted = val.split(".");

  return Number(`${splitted[0]}.${splitted.slice(1).join("")}`);
};
