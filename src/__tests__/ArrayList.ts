import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

// test("array-list", function () {
//     const list = new ArrayList<number>(3);
//     test_list(list);
// });

test('grow', function () {
    const list = new ArrayList<number>(3);
    expect(list.capacity).toEqual(3);
    list.grow();
    expect(list.capacity).toEqual(6);
    list.grow();
    expect(list.capacity).toEqual(12);
});