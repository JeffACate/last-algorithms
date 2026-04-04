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
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity){
            this.grow();
        }

        var next = item;
        
        for (let index = idx; index < this.items.length; index++) {
            const temp = this.items[index];
            this.items[index] = next;
            next = temp;
        }
        this.length++;
    }
    append(item: T): void {
        if (this.length === this.capacity) {
            this.grow();
        }
        this.items[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        for (let index = 0; index < this.items.length; index++) {
            if (this.items[index] === item) {
                return this.removeAt(index);
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.items[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length){
            return undefined;
        }
        
        const item = this.items[idx];

        for (let index = idx; index < this.items.length; index++) {
            this.items[index] = this.items[index + 1];
        }
        this.length--;
        return item;
    }
    grow() {
        this.capacity *= 2;
        const newItems = new Array<T>(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
    }
}