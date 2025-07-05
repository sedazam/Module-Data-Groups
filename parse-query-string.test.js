// const parseQueryString = require("./parse-query-string");
// describe("", () => {
//   test("given a query string with no query parameters, returns an empty object", function () {
//     const input = "";
//     const currentOutput = parseQueryString(input);
//     const targetOutput = {};

//     expect(currentOutput).toEqual(targetOutput);
//   });
// });

const parseQueryString = require("./parse-query-string");
describe("", () => {
  test("given a query string with one pair of query params, returns them in object form", function () {
    const input = "fruit=banana";
    const currentOutput = parseQueryString(input);
    const targetOutput = { fruit: "banana" };

    expect(currentOutput).toEqual(targetOutput);
  });
});
