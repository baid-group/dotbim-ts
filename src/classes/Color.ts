import { Expose } from "class-transformer";

@Expose({ name: "color" })
export class Color {
  private _r!: number;
  private _g!: number;
  private _b!: number;
  private _a!: number;

  @Expose()
  set r(val: number) {
    if (val >= 0 && val <= 255) {
      this._r = val;
    } else {
      throw "r value should be between 0-255";
    }
  }

  @Expose()
  set g(val: number) {
    if (val >= 0 && val <= 255) {
      this._g = val;
    } else {
      throw "g value should be between 0-255";
    }
  }

  @Expose()
  set b(val: number) {
    if (val >= 0 && val <= 255) {
      this._b = val;
    } else {
      throw "b value should be between 0-255";
    }
  }

  @Expose()
  set a(val: number) {
    if (val >= 0 && val <= 255) {
      this._a = val;
    } else {
      throw "a value should be between 0-255";
    }
  }

  get r(): number {
    return this._r;
  }

  get b(): number {
    return this._b;
  }

  get g(): number {
    return this._g;
  }

  get a(): number {
    return this._a;
  }
}
