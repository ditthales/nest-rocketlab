import { Prisma } from "@prisma/client";


export class Product implements Prisma.ProductCreateInput{
    id: number;
    name: string;
    price: Prisma.Decimal;
    image: string;
    type: string;
}