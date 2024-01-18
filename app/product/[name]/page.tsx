import React from 'react'
import Product from '@/components/Product';

import Zapato2 from "@/public/edc5c980eadedce0fff9c018c2f8f26913a543cd-1728x2160.jpg";
import Persona1 from "@/public/002f6f2cade4b4051d9ca3dc4d0b26ca0b81a023-800x800.jpg";
import Persona2 from "@/public/a2ae0168fc770c9f403f2e3130dd01d1b538fb7c-1728x2160.jpg";
import Zapato1 from "@/public/16953170171.png";
import Zapato3 from "@/public/a9445bdbbd4554fb8ba7ef90f0a41384cb31bdf6-1728x2160.jpg";

const callPrisma=async(value:string)=>{
  const response=await fetch(`http://localhost:3000/api/products/${value}`);
  const data=await response.json();

  return data;
  
}
async function page({params}) {


  const nameString=params.name
  const valor=nameString[nameString.length-1];
  const datos=await callPrisma(valor);

  const Products={
    nombre:datos.title,
    price:datos.price,
    descuento:datos.descuento,
    descripcion:datos.description,
    tipo:datos.type,
  }

 const id =datos.id;
 let Valorimg;
 switch (id) {
  case 1:
    Valorimg=Zapato2;
    break;
 
    case 2:
      Valorimg=Persona1;
      break;

     case 3:
    Valorimg=Persona2;
    break;

    case 4:
      Valorimg=Zapato3;
      break;

      case 5:
        Valorimg=Zapato1;
        break;
 }
  
  
  return (
    <div className='bg-[#09090B] min-h-[540px] flex justify-center items-center pt-[100px]'>
        <div className='w-[980px]'>
        <div className='grid grid-cols-2'>
        <Product src={Valorimg}/>
        <div className='mb-[80px] ml-36'>

        <div className='flex flex-col '>
        <h1 className='text-white  font-semibold text-[34px]'>{Products.nombre}</h1>
            <p className='text-white font font-semibold text-[18px]'>{Products.tipo}</p>
        </div>


        <div className='flex gap-24'>
               <div className='flex gap-5'> <p className='text-white font-semibold '>USD ${Products.price} </p> <p className=' line-through font-semibold text-red-500'>${Products.descuento}</p> </div>
                <p className='font-bold text-green-500'>30% OFF</p>
            </div>

            <p className='text-zinc-500 text-[16px] font-medium'>incl. of taxes</p>
            <p className='text-zinc-500 text-[16px] font-medium'>(Also includes all applicable duties)</p>

            <div>
            <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full py-[1.875rem] rounded-full border border-black dark:border-zinc-200 dark:hover:bg-zinc-950 text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">Add to Cart</button>

            <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:opacity-50 h-10 px-4 w-full py-[1.875rem] rounded-full border border-white  text-white bg-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2  mb-10">Checkout Now</button>
            </div>
            <h1 className='text-white font-bold'>Product Details</h1>
            <p className='text-white'>{Products.descripcion}</p>
        </div>
        
            
          

        </div>
        </div>
    </div>
  )
}

export default page