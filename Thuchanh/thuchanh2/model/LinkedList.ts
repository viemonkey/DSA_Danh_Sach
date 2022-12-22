import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data: T): void {
        //ban đầu sẽ khởi tạo một node mới
        let node = new Node(data);
        //Sau đó sẽ link node mới khởi tạo đến nối đầu tiên của danh sách hiện tại (this.head)
        node.next = this.head;
        //Sau đó đặt lại node ở đầu danh sách thành lớp mới khởi tạo
        this.head = node;

        //Kiểm tra, nếu node mới khởi tạo là node đầu tiên được thêm vào danh sách thì sẽ đặt node đó cũng là node cuối cùng của danh sách.
        if (!this.tail) {
            this.tail = node
        }
        //Cuối cùng ta tăng kích thước của danh sách lên 1 đơn vị.
        this.size++;
    }
    insertLastNode(data: T): void {
        //Đầu tiên chúng ta sẽ kiểm tra trong danh sách có node đầu chưa, nếu chưa có thì thực hiện thêm node vào cuối danh sách cũng như thêm vào đầu. Ta sẽ gọi lại phương thức insertFirstNode().
        if (!this.head) {
            this.insertFirstNode(data)
        } else {
            //Nếu trong danh sách có node đầu có nghĩa là sẽ tồn tại node cuối cùng của danh sách. Bây giờ chúng ta chỉ cần khởi tạo node mới. Sau đó link liên kết của lớp cuối hiện tại vào node mới khởi tạo, rồi đặt lại node cuối cùng của danh sách thành node mới khởi tạo và tăng độ dài danh sách lên 1 đơn vị.
            let node = new Node(data)
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    /*
    Tạo phương thức lấy ra số lượng node
    Mục đích: Lấy ra số lượng các node được thêm vào danh sách
     */
    getSize(): number {
        return this.size
    }
    /*
    Tạo phương thức đọc danh sách
    Mục đích: Hiển thị danh sách các phần tử trong danh sách
     */
    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
}