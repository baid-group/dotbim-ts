import { Expose } from "class-transformer";

@Expose({ name: "vector" })
export class Vector {
  @Expose()
  x!: number;

  @Expose()
  y!: number;

  @Expose()
  z!: number;
}
