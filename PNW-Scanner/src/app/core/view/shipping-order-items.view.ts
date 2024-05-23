import {IParsable} from "../models/i-parsable";
import {ShippingOrderItem} from "../models/shipping-order-item.model";

export class ShippingOrderItemsView implements IParsable<ShippingOrderItemsView>{
    public items: ShippingOrderItem[] = [];

    public parse(data: any): ShippingOrderItemsView {
        this.items = data.map((i: ShippingOrderItem) => new ShippingOrderItem().parse(i));
        return this;
    }
}
