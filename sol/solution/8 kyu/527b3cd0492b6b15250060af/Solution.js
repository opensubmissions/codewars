/**
 * ╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
 * │ Solution                                                                                         │
 * ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
 */
let items = [];
items.push({ a: "b", c: "d" });
const chai = require("chai"), assert = chai.assert; chai.config.truncateThreshold = 0;
describe("Push an object into array", function () {
    it("should have a value", function () { assert.isNotEmpty(items, 'The array is still empty') });
    it("should have only one value", function () { assert.lengthOf(items, 1, 'The array contains too many values') });
    it("should have the correct value", function () { assert.deepEqual(items, [{ a: "b", c: "d" }], 'The array does not contain the correct value"') });
});

/**
 * ╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
 * │ Sample Tests                                                                                     │
 * ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
 */
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Push an object into array", function () {
    it("should have a value", function () {
        assert.isNotEmpty(items, 'The array is still empty')
    });
    it("should have only one value", function () {
        assert.lengthOf(items, 1, 'The array contains too many values')
    });
    it("should have the correct value", function () {
        assert.deepEqual(items, [{ a: "b", c: "d" }], 'The array does not contain the correct value"')
    });
});