import { PrismaService } from "src/prisma.service";
import { Product } from "./product.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService{
    constructor(private prisma: PrismaService){}

    async getAllProducts(): Promise<Product[]>{
        return await this.prisma.product.findMany();
    }

    async getProductById(id: number): Promise<Product | null>{
        return await this.prisma.product.findUnique({
            where: {
                id: id
            }
        });
    }

    async createProduct(data: Product): Promise<Product>{
        return await this.prisma.product.create({
            data
        });
    }

    async updateProduct(id: number, data: Product): Promise<Product>{
        return await this.prisma.product.update({
            where: {
                id: id
            },
            data
        });
    }

    async deleteProduct(id: number): Promise<Product>{
        return await this.prisma.product.delete({
            where: {
                id: id
            }
        });
    }
}