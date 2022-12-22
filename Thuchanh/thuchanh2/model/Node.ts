export class Node<T> {
    protected data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
    readData(): T {
        return this.data;
    }
}