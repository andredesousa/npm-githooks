const hello = require("./index");

describe("hello", () => {
  it("returns a string", () => {
    const result = hello();
    const expected = "Hello World!";

    expect(expected).toBe(result);
  });
});
