import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});

test("grow", function () {
    const list = new ArrayList<number>(3);
    expect(list.capacity).toEqual(3);
    list.grow();
    expect(list.capacity).toEqual(6);
    list.grow();
    expect(list.capacity).toEqual(12);
});

test("append one item", function () {
    const list = new ArrayList<string>(4);
    const first = "first";
    list.append(first);

    expect(list.capacity === 4);
    expect(list.get(1) === first);
    expect(list.length === 1);
});

test("append and grow", function () {
    const list = new ArrayList<number>(3);
    list.append(4);
    list.append(3);
    list.append(2);
    list.append(1);

    expect(list.capacity === 6);
    expect(list.length === 4);
    expect(list.get(2) === 3);
    expect(list.get(4) === 1);
});
