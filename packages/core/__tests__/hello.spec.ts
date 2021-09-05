import { hello } from "@core";

describe("hello", () => {
  it("should return a message", () => {
    const message = hello();
    expect(message).toBeDefined();
  });
});
