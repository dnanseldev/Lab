export class Product {
    readonly ID: any;
    readonly description: string;
    readonly category: string;

    constructor(ID: any,
        description: string,
        category: string) {
        this.ID = ID;
        this.description = description;
        this.category = category;
    }
}
