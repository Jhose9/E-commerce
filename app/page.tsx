import Image from "next/image";
import foto1 from "@/public/3084a556aa6b3f16efde44d53ba4eec3b27a3cf5-1280x1600.jpg";
import foto2 from "@/public/62307e35e1e371dc7cfa1dfd1f50b11c1e2f4e23-800x800.jpg";
import Zapato1 from "@/public/a9445bdbbd4554fb8ba7ef90f0a41384cb31bdf6-1728x2160.jpg";
import Zapato2 from "@/public/edc5c980eadedce0fff9c018c2f8f26913a543cd-1728x2160.jpg";
import Persona1 from "@/public/002f6f2cade4b4051d9ca3dc4d0b26ca0b81a023-800x800.jpg";
import Persona2 from "@/public/a2ae0168fc770c9f403f2e3130dd01d1b538fb7c-1728x2160.jpg";

import Card from "@/components/Card";

import Link from 'next/link';

import {poppins} from '@/components/Fonts';
export default function Home() {
  return (
    <main>
      <section className="bg-[#18181B] h-[756px]">
        <div className="mb-8 flex justify-center items-center">
          <div className="ml-[350px]">
            <h1 className={`mb-4 text-4xl font-black text-white sm:text-5xl md:mb-8 md:text-6xl w-[400px] ${poppins.className} font-black `}>
              The best clothing at a higher price.
            </h1>

            <p className={`max-w-md leading-relaxed text-gray-400 dark:text-gray-400 xl:text-lg ${poppins.className} `}>
              We sell only the most exlusive and hight quality products for you.
              We are the best so come and shop with us.
            </p>
          </div>

          <div className=" mt-12 mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-3xl -bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <Image
                className="h-full w-full object-cover object-center"
                height={650}
                width={380}
                src={foto1}
                alt="foto1"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-lg ">
              <Image
                height={650}
                width={380}
                className="h-full w-full object-cover object-center"
                src={foto2}
                alt="foto2"
              />
            </div>
          </div>
        </div>

        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-2xl mb-7 bg-[#09090B] translate-x-[350px]">
          <Link
            className={`border-none flex w-1/3 items-center justify-center font-semibold  transition duration-100 text-white hover:bg-slate-800 opacity-80 ${poppins.className} `}
            href="/men"
          >
            Men
          </Link>

          <Link
            className={`border-none flex w-1/3 items-center justify-center font-semibold  transition duration-100 text-white hover:bg-slate-800 opacity-80 ${poppins.className} `}
            href="/women"
          >
            Women
          </Link>

          <Link
            className={`border-none flex w-1/3 items-center justify-center font-semibold  transition duration-100 text-white hover:bg-slate-800 opacity-80 ${poppins.className} `}
            href="/teens"
          >
            Teens
          </Link>
        </div>
      </section>

      {/* Zona de card */}
      <div className="min-h-[650px] bg-[#09090B]">
        <div className="ml-[300px] pt-24 ">
          <div className="grid gap-[620px] grid-cols-2">
            <h2>
              Our Newest products
            </h2>
            <div className="rounded-xl text-[#337DF6] flex justify-center items-center  hover:scale-105 transition h-9 w-28 bg-[#18181B]">
              <Link href={"product/all"} className="font-bold text-lg">See All</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right - "
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 w-[1516px] ">
            <Link href={"/product/NikeAirVaporMax2023Flyknit1"}>
            <Card img={Zapato2} name={"Nike Air VaporMax 2023 Flyknit"} price={"$200"} category={"Men"}/>
            </Link>

           <Link href={"/product/NikeSportswearClub2"}>
           <Card img={Persona1} name={"Nike Sportswear Club"} price={"$50"} category={"Men"} />
           </Link>

           <Link href={"/product/NikeRevolution64"}>
           <Card img={Zapato1} name={"Nike Revolution 6"} price={"$70"} category={"Women"} />
           </Link>

           <Link href={"/product/NikeWindrunner3"}>
           <Card img={Persona2} name={"Nike Windrunner"} price={"$200"} category={"Men"} /> 
           </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#18181B] h-12"></div>
    </main>
  );
}
