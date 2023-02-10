import { Expose, Type } from "class-transformer";
import { Color, ColorRange } from "./Color";
import { Rotation } from "./Rotation";
import { Vector } from "./Vector";
import { Guid } from "guid-typescript";
import { Info } from "./Info";

@Expose({ name: "element" })
export class Element {
  private _guid!: string;
  private _faceColors?: ColorRange[] | null;

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

  @Expose({ name: "face_colors", since: 1.1 })
  set faceColors(val: ColorRange[] | null) {
    if (val && val.filter((item) => item >= 0 && item <= 255).length) {
      this._faceColors = val;
    } else if (!val) {
      this._faceColors = null;
    } else {
      throw "faceColors values should be between 0-255";
    }
  }

  get faceColors(): ColorRange[] | null {
    return this._faceColors || null;
  }

  @Expose()
  @Type(() => Info)
  info!: Info;
}
