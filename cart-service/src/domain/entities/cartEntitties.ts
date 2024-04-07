import { Types } from 'mongoose';

export interface CartItem {
    productId: Types.ObjectId;
    quantity: number;
}

export interface CartEntity {
    userId: Types.ObjectId;
    items: CartItem[];
}

export interface AddToCartEntity {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
}
