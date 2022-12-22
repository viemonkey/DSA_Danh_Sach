import {ArrayList} from "../model/ArrayList";

interface Post {
    title: string
}

let main = new ArrayList<Post>();
main.add({title: 'Lap trinh js'});
main.add({title: 'Lap trinh php'});
main.add({title: 'Lap trinh java'});
console.log(main.container)