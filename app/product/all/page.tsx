import React from 'react'
import Card from '@/components/Card';
import Link from 'next/link';

import Zapato1 from "@/public/a9445bdbbd4554fb8ba7ef90f0a41384cb31bdf6-1728x2160.jpg";
import Zapato2 from "@/public/edc5c980eadedce0fff9c018c2f8f26913a543cd-1728x2160.jpg";
import Persona1 from "@/public/002f6f2cade4b4051d9ca3dc4d0b26ca0b81a023-800x800.jpg";
import Persona2 from "@/public/a2ae0168fc770c9f403f2e3130dd01d1b538fb7c-1728x2160.jpg";
import Zapato3 from "@/public/16953170171.png";
function AllProduct() {
  return (
    <div className="bg-[#09090B] min-h-[600px]">
    <div className="ml-[300px] pt-24 ">
         <div className="grid gap-[620px] grid-cols-2">
           <h2>
           Our products for Men
           </h2>
         </div>
         <div className="flex flex-wrap gap-10 w-[1516px] ">

          <Link href={"/product/NikeAirVaporMax2023Flyknit1"}>
          <Card img={Zapato2} name={"Nike Air VaporMax 2023 Flyknit"} price={"$200"} category={"Men"}/>
          </Link>

          <Link href={"/product/NikeSportswearClub2"}>
          <Card img={Persona1} name={"Nike Sportswear Club"} price={"$50"} category={"Men"} />
          </Link>

          <Link href={"/product/NikeWindrunner3"}>
          <Card img={Persona2} name={"Nike Windrunner"} price={"$70"} category={"Men"} /> 
          </Link>

          <Link href={"/product/NikeRevolution64"}>
          <Card img={Zapato1} name={"Nike Revolution 6"} price={"$200"} category={"women"} /> 
          </Link>

          <Link href={"/product/NikeAirForce1'075"}>
          <Card img={Zapato3} name={"Nike Air Force 1 '07"} price={"$85"} category={"Teens"} /> 
          </Link>
         </div>
       </div>
 </div>
  )
}

export default AllProduct