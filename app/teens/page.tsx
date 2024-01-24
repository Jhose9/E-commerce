import Link from "next/link";
import Card from "@/components/Card";
export default function PageTeens() {
  return (
    <div className="bg-[#09090B] min-h-[600px]">
      <div className="ml-[300px] pt-24 ">
        <div className="grid gap-[620px] grid-cols-2">
          <h2>Our products for Teens</h2>
        </div>
        <div className="flex flex-wrap gap-10 w-[1516px] ">
          <Link href={"/product/NikeAirForce1'075"}>
            <Card
              image="/image-7.png"
              name={"Nike Air Force 1 '07"}
              price={"$155"}
              category={"Teens"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
