import React from 'react'
import Image from 'next/image';
export default function Product(value:any) {
  
  return (
    <div >
        <div className="group  w-[400px]">
      <div
        style={{ zIndex: 1 }}
      >
        <div className="static aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 group- lg:h-[500px]">
          <Image
            className="object-cover object-center"
            src={value.src}
            alt="descripcion"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
