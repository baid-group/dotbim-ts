import { Expose, Type } from "class-transformer";
import { Element } from "./Element";
import { Info } from "./Info";
import { Mesh } from "./Mesh";

@Expose()
export class BimFile {
  @Expose({ name: "schema_version" })
  schemaVersion!: string;

  @Expose()
  @Type(() => Info)
  info!: Info;

  @Expose()
  @Type(() => Mesh)
  meshes!: Mesh[];

  @Expose()
  @Type(() => Element)
  elements!: Element[];
}
