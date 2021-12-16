const { addItem, removeItem, calculateTotal, isSufficientPayment, calculateChange } = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("5 and 6 returns 1", function() {
    expect(calculateChange(5, 6)).toEqual(1);
  });
  test("12.30 and 13.03 returns .73", function() {
    expect(calculateChange(12.30, 13.03)).toEqual(.73);
  });
  test(".05 and .08 returns .03", function() {
    expect(calculateChange(.05, .08)).toEqual(.03);
  });
});

describe("isSufficientPayment", () => {
  test("5 and 6 returns true", function() {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("10 and 7 returns true", function() {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("3 and 3 returns true", function() {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
});
let itemsArray1 = [{ name: "Peanut Butter", price: 4.99 }]
let itemsArray2 = [
  { name: "Peanut Butter", price: 3.50 },
  { name: "Peanut Butter", price: 12.99 },
  { name: "Peanut Butter", price: .03 }
]
describe("calculateTotal", () => {
  test("array1 returns 4.99", function() {
    expect(calculateTotal(itemsArray1)).toEqual(4.99);
  });
  test("array2 returns 16.52", function() {
    expect(calculateTotal(itemsArray2)).toBeCloseTo(16.52);
  });
});

describe("addItem", () => {
  test.todo("add addItem tests here");
});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});