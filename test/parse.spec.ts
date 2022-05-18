import { parse } from "../src";
import { BimFile } from "../src/classes/File";
import { TEST_DATA } from "./test-data/test-data";

const data = JSON.stringify(TEST_DATA);

test("parse House.bim", () => {
  const house = parse(data);

  expect(house).toBeInstanceOf(BimFile);
});

test("parse schemaVersion", () => {
  const house = parse(data);

  expect(house.schemaVersion).toBe("1.0.0");
});

test("parse info", () => {
  const house = parse(data);

  expect(house.info).not.toBeUndefined();
  expect(house.info).toEqual({ Author: "Baid", Date: "2022-05-01T00:00:00" });
  expect(house.info).not.toEqual({ Test: "Test" });
});

test("parse elements", () => {
  const house = parse(data);

  expect(house.elements).not.toBeUndefined();
  expect(house.elements.length).toBe(1);

  const firstElement = house.elements[0];

  expect(firstElement.guid).toBe("d0985490-ef59-4b0d-b906-a2fb4cf5d772");
  expect(firstElement.type).toBe("test_type");
  expect(firstElement.meshId).toBe(0);
  expect(firstElement.info).not.toBeUndefined();

  const firstElementColor = firstElement.color;

  expect(firstElementColor).not.toBeUndefined();
  expect(firstElementColor.a).toBe(7);
  expect(firstElementColor.b).toBe(6);
  expect(firstElementColor.g).toBe(5);
  expect(firstElementColor.r).toBe(4);

  const firstElementRotation = firstElement.rotation;

  expect(firstElementRotation).not.toBeUndefined();
  expect(firstElementRotation.qx).toBe(1);
  expect(firstElementRotation.qy).toBe(2);
  expect(firstElementRotation.qz).toBe(3);
  expect(firstElementRotation.qw).toBe(4);

  const firstElementVector = firstElement.vector;

  expect(firstElementVector).not.toBeUndefined();
  expect(firstElementVector.x).toBe(0);
  expect(firstElementVector.y).toBe(0);
  expect(firstElementVector.z).toBe(0);
});
