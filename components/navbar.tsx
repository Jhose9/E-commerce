"use client";
import { poppins } from "@/components/Fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Navbar() {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <div className="sticky z-50 top-0 h-[64px] bg-[#27272A] w-full grid grid-cols-3">
      <div className="flex justify-center items-center">
        <p
          className={`text-white font-bold mr-52 ${poppins.className} font-extrabold`}
        >
          E-Commerce
        </p>
      </div>

      <div className="flex gap-10 justify-center items-center ">
        <Link className={`text-white ${poppins.className}`} href="/">
          Home
        </Link>
        <Link className={`text-white ${poppins.className}`} href="/men">
          Men
        </Link>
        <Link className={`text-white ${poppins.className}`} href="/women">
          Women
        </Link>
        <Link className={`text-white ${poppins.className}`} href="/teens">
          Teens
        </Link>
      </div>

      <div className="flex fixed gap-9 py-5 right-40 ">
        <a href="https://github.com/Jhose9" target="_blank">
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
            className="text-white lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        <Sheet>
          <SheetTrigger>
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
              className="text-white lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </SheetTrigger>
          <SheetContent className="bg-black">
            <SheetHeader>
              <SheetTitle className="text-white font-bold text-center">
                Shopping Cart
              </SheetTitle>
              <SheetDescription>
                <div className="h-full flex flex-col justify-between ">
                  <div className="mt-8 flex-1 ">
                    <ul className="-my-6 divide-y divide-gray-300">
                      <li className="flex py-6 text-white">item</li>
                    </ul>
                  </div>

                  <div className="border-t absolute bottom-0 border-gray-200 dark:border-gray-700 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
                      <p className="font-semibold text-white">Subtotal:</p>
                      <p className="font-bold text-white">$200</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      Shipping and taxes are calculated at checkout
                    </p>

                    <div className="mt-6">
                      {" "}
                      <Button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full font-bold rounded-2xl bg-blue-500 dark:bg-blue-600 dark:text-white hover:bg-blue-400 hover:scale-105 transition ease-in-out duration-500">
                        Checkout
                      </Button>{" "}
                    </div>

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p className="font-semibold">
                        OR{" "}
                        <button className="font-semibold hover:opacity-50 text-white">
                          Continue Shopping
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
