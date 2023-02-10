import { Expose } from "class-transformer";

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type ColorRange = IntRange<0, 255>;

@Expose({ name: "color" })
export class Color {
  private _r!: ColorRange;
  private _g!: ColorRange;
  private _b!: ColorRange;
  private _a!: ColorRange;

  @Expose()
  set r(val: ColorRange) {
    if (val >= 0 && val <= 255) {
      this._r = val;
    } else {
      throw "r value should be between 0-255";
    }
  }

  @Expose()
  set g(val: ColorRange) {
    if (val >= 0 && val <= 255) {
      this._g = val;
    } else {
      throw "g value should be between 0-255";
    }
  }

  @Expose()
  set b(val: ColorRange) {
    if (val >= 0 && val <= 255) {
      this._b = val;
    } else {
      throw "b value should be between 0-255";
    }
  }

  @Expose()
  set a(val: ColorRange) {
    if (val >= 0 && val <= 255) {
      this._a = val;
    } else {
      throw "a value should be between 0-255";
    }
  }

  get r(): ColorRange {
    return this._r;
  }

  get b(): ColorRange {
    return this._b;
  }

  get g(): ColorRange {
    return this._g;
  }

  get a(): ColorRange {
    return this._a;
  }
}
