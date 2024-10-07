import { Request } from "express";

export interface ProductDTO {
  id?: string; 
  brand_id: string;
  category_id?: string; 
  subcategory_id?: string;
  condition?: string;
  description?: string;
  summary?: string;
  title: string;
  universalStandardCode?: string;
  status: 'active' | 'inactive';
  createdBy?: number;
  productImages?: string[] | null;
}

export interface CreateProductDTO {
  brand_id: string;
  category_id?: string;
  subcategory_id?: string;
  condition?: string;
  description?: string;
  summary?: string;
  title: string;
  universalStandardCode?: string;
  status?: 'active' | 'inactive'; 
  createdBy?: number;
  productImages?: string[] | null;
}

export interface UpdateProductDTO {
  brand_id?: string;
  category_id?: string;
  subcategory_id?: string;
  condition?: string;
  description?: string;
  summary?: string;
  title?: string;
  universalStandardCode?: string;
  status?: 'active' | 'inactive';
  productImages?: string[] | null;
}


export interface ProductRequest<T> extends Request {
  body: T;
}
