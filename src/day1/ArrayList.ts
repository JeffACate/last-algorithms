export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private items: T[];

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.items = new Array<T>(capacity);
    }

    prepend(item: T): void {
        if (this.length === 0){
            this.items[0] = item;
        }

        this.length++;
    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {

    }
    // remove(item: T): T | undefined {

    // }
    get(idx: number): T | undefined {
        return this.items[idx];
    }
    // removeAt(idx: number): T | undefined {

    // }
    grow() {
        this.capacity *= 2;
        const newItems = new Array<T>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
    }
}