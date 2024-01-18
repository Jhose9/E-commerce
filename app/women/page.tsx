import Zapato1 from "@/public/a9445bdbbd4554fb8ba7ef90f0a41384cb31bdf6-1728x2160.jpg";
import Card from "@/components/Card";
import Link from 'next/link';
export default  function PageWomen() {
  return (
    <div className="bg-[#09090B] min-h-[600px]">
     <div className="ml-[300px] pt-24 ">
          <div className="grid gap-[620px] grid-cols-2">
            <h2>
            Our products for Women
            </h2>
          </div>
          <div className="flex flex-wrap gap-10 w-[1516px] ">
         <Link href={"/product/NikeRevolution64"}>
         <Card img={Zapato1} name={"Nike Revolution 6"} price={"$85"} category={"women"} />
         </Link>
          </div>
        </div>
  </div>
  )
}


