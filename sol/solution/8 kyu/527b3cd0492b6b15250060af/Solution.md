# [**Push a hash/an object into array**](https://www.codewars.com/kata/527b3cd0492b6b15250060af)

### **Java**
```java
/**
 * ╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
 * │ Solution                                                                                         │
 * ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
 */
import java.util.List;
import java.util.ArrayList;

public class PushAnObjectIntoArray {

    public static List<String> push() {
        List<String> items = new ArrayList<>();
        items.add("an object");
        return items;
    }
}

/**
 * ╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
 * │ Sample Tests                                                                                     │
 * ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
 */
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

import java.util.List;

public class PushAnObjectIntoArrayTest {

    @Test
    public void testSomething() {
        List<String> items = PushAnObjectIntoArray.push();
        assertEquals(1, items.size());
        assertEquals("an object", items.get(0));
    }
}
```


### **JavaScript**
```javascript
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
```