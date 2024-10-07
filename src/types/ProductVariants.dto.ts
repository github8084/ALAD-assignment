export interface ProductVariantDTO {
  id?: string;
  product_id: string;
  status: 'active' | 'inactive';
  title: string;
  images: string[] | null;
  compare_price_at?: string;
  minimum_order_quantity?: string;
  warehouse_arr: object;
  price_details: string;
  input_field?: string;
  sku?: string;
  color_id?: string;
  size_id?: string;
  material_id?: string;
  created_by: string;
  packaging_type: string;
  is_vat_inclusive: string;
  expiry_date?: Date;
  packaging_date?: Date;
  discount_type?: 'fixed' | 'percentage';
  discount?: number;
  discountedPrice?: number;
  other_value?: string;
  stock_quantity?: number;
  sold_quantity?: number;
}
