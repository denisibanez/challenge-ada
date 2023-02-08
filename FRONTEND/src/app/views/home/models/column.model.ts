import { Item } from './item.model';

export class Column {
    constructor(
        public name: string,
        public id: string,
        public icon: string,
        public tasks: Item[]
    ) {}
}
