
import Image from "next/image";

interface CardItemProps {
  image: string;
  name: string;
  category: string;
  price: string;
}

export default function cardIten({ image, name, category, price }:CardItemProps) {
  return (
    <div className="group mt-6 w-[280px] hover:opacity-75 ">
      <div
        className=" hover:scale-105 transition ease-in-out group-hover:opacity-75"
        style={{ zIndex: 1 }}
      >
        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 lg:h-80 relative">
          <Image
            className="object-cover object-center"
            src={image}
            alt="descripcion"
            fill
          />
        </div>
        <div className="mt-4 flex justify-between">
          <h3 className="text-white">{name}</h3>
          <p className="text-white">{category}</p>
        </div>
        <p className="text-white">{price}</p>
      </div>
    </div>
  );
}
