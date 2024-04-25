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
        public productId?: number,
        public productUpc?: number,
        public productName?: string,
        public pickedQuantity?: number,
        public currentQuantity?: number,
        public quantity?: number,
        public isPicked?: boolean,
    ) {
    }

    public parse(data: any): ShippingOrderItem {
        this.productId = data['productId'];
        this.productUpc = data['productUpc'];
        this.productName = data['productName'];
        this.pickedQuantity = data['pickedQuantity'];
        this.quantity = data['quantity'] || 0;
        this.currentQuantity = data['currentQuantity'] || 0;
        return this;
    }
}
