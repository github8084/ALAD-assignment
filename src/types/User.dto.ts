import { Request } from "express";

export interface UserDTO {
  id?: string;
  user_type: "vendor" | "logistic" | "retailer" | "employee" | "admin" | "vendor_sub_user" | "logistic_sub_user" | "retailer_sub_user" | "horeca";
  name: string | null ;
  email: string;
  password: string;
  phone:string | null;
}

export interface UpdateUserDTO {
  user_id?: string;
  user_type?: "vendor" | "logistic" | "retailer" | "employee" | "admin" | "vendor_sub_user" | "logistic_sub_user" | "retailer_sub_user" | "horeca";
  profile_photo?: string;
  cognito_user_id?: string;
  name?: string;
  name_ar?: string;
  phone?: string;
  dob?: string | null;
  company_name?: string | null;
  company_address_line_2?: string | null;
  trade_license_number?: string | null;
  company_address?: string | null;
  po_box?: string | null;
  designation?: string | null;
  emirates_id?: string | null;
  emirate_id_pic?: string | null;
  residence_visa?: string | null;
  passport?: string | null;
  password?:string | null;
  trade_license?: string | null;
  permission?: object | null;
  cheque_scan?: string | null;
  vat_certificate?: string | null;
  iban?: string | null;
  country?: string;
  country_code?: string;
  role?: string | null;
  is_verified?: number;
  account_status?: string | null;
  is_social_login?: number;
  accessToken?: string | null;
  assign_to?: string | null;
  created_by?: string | null;
  drivingLicenseNumber?: string;
  drivingLicense?: string | null;
  distanceTravelled?: number;
  assigned?: boolean;
  FEstatus?: string | null;
  deviceToken?: string | null;
  brand_name?: string | null;
  referred_by?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  preferred_language?: string;
  company_website?: string | null;
}

export interface UserRequest<T> extends Request {
  body: T;
}
