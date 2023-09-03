import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductService } from "./product.service";


@Controller('api/v1/product')
export class ProductController{
    constructor(private readonly productService: ProductService){}

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<Product | null>{
        return await this.productService.getProductById(id);
    }

    @Post()
    async createProduct(@Body() data: Product): Promise<Product>{ 
        return await this.productService.createProduct(data);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number): Promise<Product>{
        return await this.productService.deleteProduct(id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() data: Product): Promise<Product>{ 
        return await this.productService.updateProduct(id,data);
    }
}