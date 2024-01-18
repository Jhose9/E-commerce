import {NextResponse} from 'next/server';
import {prisma} from '@/lib/prisma';

export const GET=async(response:Response,{params})=>{
    const valueId=params.id

    const product = await prisma.product.findUnique({
        where:{
            id:parseInt(valueId),
        },
    });
    
    return NextResponse.json(product);   
}

export const POST=async (request:Request)=>{
    const datos=await request.json();
    const newsShop= await prisma.shopping.create({
        data:{
           id:datos.id,
           count:datos.count
        }
    })
    return NextResponse.json(newsShop)
}

export const PATCH=async(Request:Request)=>{
    const datosUpdate=await Request.json();
    const UpdateShop= await prisma.shopping.update({
        where:{
           id: datosUpdate.id
        },
        data:{
            count:datosUpdate.count
        }
    }) 
    return NextResponse.json(UpdateShop);
}