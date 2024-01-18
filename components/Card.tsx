
import Image from "next/image";
export default function cardIten(data: any) {
  return (
    <div className="group mt-6 w-[280px] hover:opacity-75 ">
      <div
        className=" hover:scale-105 transition ease-in-out group-hover:opacity-75"
        style={{ zIndex: 1 }}
      >
        <div className="static aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            className="object-cover object-center"
            src={data.img}
            alt="descripcion"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <h3 className="text-white">{data.name}</h3>
          <p className="text-white">{data.category}</p>
        </div>
        <p className="text-white">{data.price}</p>
      </div>
    </div>
  );
}
