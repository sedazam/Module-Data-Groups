const parseQueryString = require("./parse-query-string");
describe("", () => {
  test.only("given a query string with no query parameters, returns an empty object", function () {
    const input = "";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });
});
