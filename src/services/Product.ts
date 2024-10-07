import { Op } from 'sequelize';
import Brands from '../database/models/Brands.js';
import Categories from '../database/models/Categories.js';
import Product from '../database/models/Products.js';
import ProductVariantModel from '../database/models/ProductVariants.js';
import { ProductDTO, UpdateProductDTO } from '../types/Product.dto.js';
import { ProductVariantDTO } from '../types/ProductVariants.dto.js';
import Color from '../database/models/Color.js';
import Size from '../database/models/Size.js';
import Material from '../database/models/Material.js';

export class ProductService {
  // Create a new Brand
  async createBrand(data: any): Promise<any> {
    const result = await Brands.create(data);
    return result.toJSON();
  }

  // Create a new Category
  async createCategory(data: any): Promise<any> {
    const result = await Categories.create(data);
    return result.toJSON();
  }

  // Create a new Color
  async createColor(data: any): Promise<any> {
    const result = await Color.create(data);
    return result.toJSON();
  }

  // Create a new Size
  async createSize(data: any): Promise<any> {
    const result = await Size.create(data);
    return result.toJSON();
  }

  // Create a new Material
  async createMaterial(data: any): Promise<any> {
    const result = await Material.create(data);
    return result.toJSON();
  }

  // Create a new Product
  async createProduct(data: ProductDTO): Promise<ProductDTO> {
    const result = await Product.create(data);
    return result.toJSON() as ProductDTO;
  }

  // Get a Product by query
  async getProduct(query): Promise<ProductDTO | null> {
    const result = await Product.findOne({ where: query });
    return result ? (result.toJSON() as ProductDTO) : null;
  }

  // Get all Products
  async getAllProducts(filters): Promise<ProductDTO[]> {
    const { page, limit, name, size, color, material } = filters;
    const offset = (page - 1) * limit;

    const products = await Product.findAll({
      where: {
        ...(name && { title: { [Op.iLike]: `%${name}%` } }),
        ...(size && { size_id: size }),
        ...(color && { color_id: color }),
        ...(material && { material_id: material }),
      },
      attributes: ["id", "title", "condition", "description", "summary", "universal_standard_code", "status", "product_images"],
      include: [
        {
          model: Brands,
          as: 'brand',
          attributes: ["name"]
        },
        {
          model: Categories,
          as: 'category',
          attributes: ["name"]
        },
        {
          model: Categories,
          as: 'subcategory',
          attributes: ["name"]
        },
        {
          model: ProductVariantModel,
          as: 'variants',
          attributes: ["id", "title", "compare_price_at", "minimum_order_quantity", "price_details", "sku", "packaging_type", "is_vat_inclusive", "expiry_date", "packaging_date", "discount_type", "discount", "discountedPrice", "status", "images"],
          include: [
            {
              model: Color,
              as: 'color',
              attributes: ["name", "code"]
            },
            {
              model: Size,
              as: 'size',
              attributes: ["name"]
            },
            {
              model: Material,
              as: 'material',
              attributes: ["name"]
            },
          ]
        },
      ],
      limit: limit,
      offset: offset,
    });

    return products.map(product => product.toJSON() as ProductDTO);
  }

  // Update a Product by ID
  async updateProduct(id: string, data: UpdateProductDTO): Promise<ProductDTO | null> {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data);
      return product.toJSON() as ProductDTO;
    }
    return null;
  }

  // Delete a Product by ID
  async deleteProduct(id: string): Promise<boolean> {
    const result = await Product.destroy({ where: { id } });
    return result > 0;
  }

  // Create a new Product Variant
  async createProductVariant(data: ProductVariantDTO): Promise<ProductVariantDTO> {
    const result = await ProductVariantModel.create(data);
    return result.toJSON() as ProductVariantDTO;
  }
  // Get a Product Variant by query
  async getProductVariant(query, attributes): Promise<ProductVariantDTO | null> {
    const result = await ProductVariantModel.findOne({ where: query, attributes });
    return result ? (result.toJSON() as ProductVariantDTO) : null;
  }
  // Update a Product Variant Stock by ID
  async updateProductVariantStock(id: string, data: any): Promise<ProductVariantDTO | null> {
    await ProductVariantModel.decrement('stock_quantity', {
      by: data.quantity,
      where: { id },
    });

    await ProductVariantModel.increment('sold_quantity', {
      by: data.quantity,
      where: { id },
    });
    return null;
  }

  // Update a Product Variant by ID
  async updateProductVariant(id: string, data: any): Promise<ProductVariantDTO | null> {
    const productVariant = await ProductVariantModel.findByPk(id);
    if (productVariant) {
      await productVariant.update(data);
      return productVariant.toJSON() as ProductVariantDTO;
    }
    return null;
  }


  // Get a Product Variant by query
  async getAllProductVariant(query): Promise<ProductVariantDTO[]> {
    const result = await ProductVariantModel.findAll({ where: query });
    return result.map(variant => variant.toJSON() as ProductVariantDTO);
  }

  
  // Delete a Product by ID
  async deleteProductVariant(query): Promise<boolean> {
    const result = await ProductVariantModel.destroy({ where: query });
    return result > 0;
  }

}