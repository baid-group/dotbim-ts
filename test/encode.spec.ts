import { parse, encode } from "../src";
import { TEST_DATA } from "./test-data/test-data";

const parsedData = parse(JSON.stringify(TEST_DATA));

test("encode", () => {
  const encodedData = encode(parsedData);
  expect(encodedData).toBe(encodedData);
});
