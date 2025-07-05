// function parseQueryString(queryString) {
//   console.log(queryString);
//   if (queryString === "") {
//     return {}; // If the query string is empty, return an empty object.
//   }
//   return {}; // Placeholder for future implementation. Prevents retuning undefined. for non-empty query strings.
// module.exports = parseQueryString;
// function parseQueryString(queryString) {
//   const queryParams = {};

//   const keyValuePair = queryString.split("=");
//   const key = keyValuePair[0]; // key will hold 'fruit'
//   const value = keyValuePair[1]; // value will hold 'banana'
//   queryParams[key] = value;

//   return queryParams;
// }
// module.exports = parseQueryString;

function parseQueryString(queryString) {
  const queryParams = {};

  const [key, value] = queryString.split("="); // will hold ['fruit', 'banana']
  queryParams[key] = value; // will set the property name with the value of the key variable

  return queryParams;
}
module.exports = parseQueryString;
