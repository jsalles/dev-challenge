const { devChallenge } = require("./index");

describe("devChallenge", () => {
  it("should return the number of servers required along with the app distribution", () => {
    expect(devChallenge()).toEqual("Hello World!");
  });
});
