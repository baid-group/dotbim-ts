import { Expose } from "class-transformer";

@Expose({ name: "rotation" })
export class Rotation {
  @Expose()
  qx!: number;

  @Expose()
  qy!: number;

  @Expose()
  qz!: number;

  @Expose()
  qw!: number;
}
