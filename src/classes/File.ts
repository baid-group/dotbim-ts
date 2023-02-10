import { Expose, Type } from "class-transformer";
import { Element } from "./Element";
import { Info } from "./Info";
import { Mesh } from "./Mesh";

export type SchemaVersion = "1.0.0" | "1.1.0";

@Expose()
export class BimFile {
  @Expose({ name: "schema_version" })
  schemaVersion: SchemaVersion = "1.1.0";

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
