import React from "react";
import Card from "@/components/Card";
import Link from "next/link";

function AllProduct() {
  return (
    <div className="bg-[#09090B] min-h-[600px]">
      <div className="ml-[300px] pt-24 ">
        <div className="grid gap-[620px] grid-cols-2">
          <h2>Our products for Men</h2>
        </div>
        <div className="flex flex-wrap gap-10 w-[1516px] ">
          <Link href={"/product/NikeAirVaporMax2023Flyknit1"}>
            <Card
              image="/image-6.jpg"
              name={"Nike Air VaporMax 2023 Flyknit"}
              price={"$200"}
              category={"Men"}
            />
          </Link>

          <Link href={"/product/NikeSportswearClub2"}>
            <Card
              image="/image-2.jpg"
              name={"Nike Sportswear Club"}
              price={"$50"}
              category={"Men"}
            />
          </Link>

          <Link href={"/product/NikeWindrunner3"}>
            <Card
              image="/image-5.jpg"
              name={"Nike Windrunner"}
              price={"$70"}
              category={"Men"}
            />
          </Link>

          <Link href={"/product/NikeRevolution64"}>
            <Card
              image="/image-4.jpg"
              name={"Nike Revolution 6"}
              price={"$200"}
              category={"women"}
            />
          </Link>

          <Link href={"/product/NikeAirForce1'075"}>
            <Card
              image="/image-7.png"
              name={"Nike Air Force 1 '07"}
              price={"$85"}
              category={"Teens"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
