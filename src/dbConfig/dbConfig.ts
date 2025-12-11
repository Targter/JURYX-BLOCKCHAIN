
// docker run --name hackview -e POSTGRES_USER=abhay -e POSTGRES_PASSWORD=abhay -e POSTGRES_DB=hackbox -p 5433:5432 -d postgres
// my postgres database is running locally in this 


import { PrismaClient } from "@/generated/prisma";

export const prisma = new PrismaClient(); 

