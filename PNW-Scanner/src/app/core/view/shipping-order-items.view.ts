import {IParsable} from "../models/i-parsable";

export class ShippingOrderItemsView implements IParsable<ShippingOrderItemsView>{
    public items: ShippingOrderItem[] = [];

    public parse(data: any): ShippingOrderItemsView {
        this.items = data.map((i: ShippingOrderItem) => new ShippingOrderItem().parse(i));
        return this;
    }

}

export class ShippingOrderItem implements IParsable<ShippingOrderItem> {
    constructor(
        public id?: number,
        public productUpc?: number,
        public productName?: string,
        public quantity?: number,
        public currentQuantity?: number,
    ) {
    }

    public parse(data: any): ShippingOrderItem {
        this.id = data['id'];
        this.productUpc = data['productUpc'];
        this.productName = data['productName'];
        this.quantity = data['quantity'];
        this.currentQuantity = data['currentQuantity'] || 0;
        return this;
    }
}
