import { Request } from "express";
import { Json } from "sequelize/lib/utils";

export interface OrderDTO {
  id: string; 
  pick_up_latitude: string; 
  user_id: string; 
  payment_id?: string; 
  warehouse_id: string;
  outlet_id: string;
  warehouse_po_box?: number;
  warehouse_address?: string;
  outlet_address?: string;
  pick_up_longitude: string;
  drop_latitude: string;
  drop_longitude: string;
  vendor_details: object;
  po_box?: number;
  product_arr?: Json;
  retailer_product_arr?: Json;
  additional_commission_rate_for_retailer?: number;
  coupon_id?: number;
  sub_total: number;
  retailer_sub_total: number;
  delivery_charges: number;
  payment_method: string;
  payment_method_enum: 'Cash on Delivery' | 'Paypal' | 'Debit Card' | 'Credit Card' | 'Razorpay';
  payment_status: 'complete' | 'failed' | 'pending';
  payment_mode?: string;
  status: 'new' | 'dispatched' | 'orderaccepted' | 'processing' | 'outfordelivery' | 'delivered' | 'cancelled' | 'return-request' | 'return-failed' | 'return-success' | 'acceptedbyFE';
  card_details?: string;
  country_code?: string;
  card_data?: object;
  txn_id?: string;
  order_date: Date;
  order_accepted_by_vendor: Date;
  delivery_date?: Date;
  ref_id?: string;
  shipping_date?: Date;
  out_for_delivery_date?: Date;
  delivery_instructions?: string;
  apiHit?: number;
  lastHitTime?: Date;
  pickupToDropDistance?: string;
}

export interface OrdersRequest<T> extends Request {
  body: T;
}
