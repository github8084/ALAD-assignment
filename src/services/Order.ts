import { Op, Sequelize } from 'sequelize';
import Brands from '../database/models/Brands.js';
import Categories from '../database/models/Categories.js';
import { OrderDTO } from '../types/Order.dto.js';
import OrderModel from '../database/models/Orders.js';
import ProductVariantModel from '../database/models/ProductVariants.js';

export class OrderService {    
    // Create a new Order
    async createOrder(data: OrderDTO): Promise<OrderDTO> {
        const result = await OrderModel.create(data);
        return result.toJSON() as OrderDTO;
    }

    // Get a Order by query
    async getOrder(query): Promise<OrderDTO | null> {
        const result = await OrderModel.findOne({ where: query });
        return result ? (result.toJSON() as OrderDTO) : null;
    }

    // Get all Orders
    async getAllOrders(filters): Promise<OrderDTO[]> {
        const { page, limit, name, size, color, material } = filters;
        const offset = (page - 1) * limit;

        const Orders = await OrderModel.findAll({
          where: {
            ...(name && { title: { [Op.iLike]: `%${name}%` } }), 
            ...(size && { size_id: size }),
            ...(color && { color_id: color }),
            ...(material && { material_id: material }),
          },
          attributes:["vendor_details","po_box","product_arr","retailer_product_arr","additional_commission_rate_for_retailer","coupon_id","sub_total","retailer_sub_total",
            "delivery_charges","payment_method_enum","payment_status","status"],
          // include: [
          //   {
          //     model: ProductVariantModel,
          //     where: {
          //       id: {
          //         [Op.in]: Sequelize.json('product_arr[*].product_variant_id') 
          //       }
          //     },
          //     as: 'products', 
          //   }
          // ],
          limit: limit,
          offset: offset,
        });
      
        return Orders.map(Order => Order.toJSON() as OrderDTO);
    }

    //Update a Order by ID
    async updateOrder(query, data: any): Promise<OrderDTO | null> {
        const Order = await OrderModel.findOne(query);
        if (Order) {
            await Order.update(data);
            return Order.toJSON() as OrderDTO;
        }
        return null;
    }

    // Delete a Order by ID
    async deleteOrder(id: string): Promise<boolean> {
        const result = await OrderModel.destroy({ where: { id } });
        return result > 0;
    }


}