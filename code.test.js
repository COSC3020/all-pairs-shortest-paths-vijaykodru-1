const { allPairsShortestPaths } = require("./code.js");

/* Unit Testing */

const graph0 = [
    [0]
];
const expected0 = [
    [0]
];

const graph1 = [
    [0, 7, Infinity, Infinity],
    [7, 0, 1, 2],
    [Infinity, 1, 0, 3],
    [Infinity, 2, 3, 0]
];
const expected1 = [
    [0, 7, 8, 9],
    [7, 0, 1, 2],
    [8, 1, 0, 3],
    [9, 2, 3, 0]
];

const graph2 = [
    [0, Infinity, Infinity, Infinity],
    [Infinity, 0, 1, Infinity],
    [Infinity, 1, 0, 1],
    [Infinity, Infinity, 1, 0]
];
const expected2 = [
    [0, Infinity, Infinity, Infinity],
    [Infinity, 0, 1, 2],
    [Infinity, 1, 0, 1],
    [Infinity, 2, 1, 0]
];

const graph3 = [
    [0, 5, Infinity, 10],
    [5, 0, 3, Infinity],
    [Infinity, 3, 0, 1],
    [10, Infinity, 1, 0]
];
const expected3 = [
    [0, 5, 8, 9],
    [5, 0, 3, 4],
    [8, 3, 0, 1],
    [9, 4, 1, 0]
];

const graph4 = [
    [0, 4, 10],
    [4, 0, 5],
    [10, 5, 0]
];
const expected4 = [
    [0, 4, 9],
    [4, 0, 5],
    [9, 5, 0]
];

const result0 = allPairsShortestPaths(graph0);
const result1 = allPairsShortestPaths(graph1);
const result2 = allPairsShortestPaths(graph2);
const result3 = allPairsShortestPaths(graph3);
const result4 = allPairsShortestPaths(graph4);

const test0 = (JSON.stringify(result0) == JSON.stringify(expected0));
const test1 = (JSON.stringify(result1) == JSON.stringify(expected1));
const test2 = (JSON.stringify(result2) == JSON.stringify(expected2));
const test3 = (JSON.stringify(result3) == JSON.stringify(expected3));
const test4 = (JSON.stringify(result4) == JSON.stringify(expected4));

console.assert(test0, "Test0 failed");
console.assert(test1, "Test1 failed");
console.assert(test2, "Test2 failed");
console.assert(test3, "Test3 failed");
console.assert(test4, "Test4 failed");

if (!test0 || !test1 || !test2 || !test3 || !test4) {
    throw "Testing Failed...";
}
