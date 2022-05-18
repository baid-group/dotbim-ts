import { parse, encode } from "../src";
import * as TEST_DATA from "./test-data/test-data.json";

const parsedData = parse(JSON.stringify(TEST_DATA));

test("encode", () => {
  const encodedData = encode(parsedData);
  expect(encodedData).toBe(encodedData);
});
