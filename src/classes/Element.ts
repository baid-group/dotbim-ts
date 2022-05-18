import { Expose, Type } from "class-transformer";
import { Color } from "./Color";
import { Rotation } from "./Rotation";
import { Vector } from "./Vector";
import { Guid } from "guid-typescript";
import { Info } from "./Info";

@Expose({ name: "element" })
export class Element {
  private _guid!: string;

  @Expose()
  set guid(val: string) {
    if (Guid.isGuid(val)) {
      this._guid = val;
    } else {
      throw "Guid is not correct. Create Guid with proper component.";
    }
  }

  get guid(): string {
    return this._guid;
  }

  @Expose({ name: "mesh_id" })
  meshId!: number;

  @Expose()
  @Type(() => Vector)
  vector!: Vector;

  @Expose()
  @Type(() => Rotation)
  rotation!: Rotation;

  @Expose()
  type!: string;

  @Expose()
  @Type(() => Color)
  color!: Color;

  @Expose()
  @Type(() => Info)
  info!: Info;
}
