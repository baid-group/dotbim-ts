import { Expose } from "class-transformer";

@Expose({ name: "mesh" })
export class Mesh {
  private _meshId!: number;

  @Expose({ name: "mesh_id" })
  set meshId(val: number) {
    if (val >= 0 && val <= 255) {
      this._meshId = val;
    } else {
      throw "MeshId should be >= 0";
    }
  }

  get meshId(): number {
    return this._meshId;
  }

  @Expose()
  coordinates!: number[];

  @Expose()
  indices!: number[];
}
