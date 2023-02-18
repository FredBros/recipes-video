import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

declare global{
    namespace NodeJS{
        interface Global {}
    }
}

//add prisma to the NodeJS global type
interface CustomNodeJSGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

//Preevent multiple instances of Prisma Client in development
declare const global: CustomNodeJSGlobal;


 const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma



