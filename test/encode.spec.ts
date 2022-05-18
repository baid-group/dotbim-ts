import { parse, encode } from "../src";
import * as encodeData from "./test-data/test-data.json";

const parsedData = parse(JSON.stringify(encodeData));

test("encode", () => {
  const encodedData = encode(parsedData);
  expect(encodedData).toBe(encodedData);
});
