"use client"
import React from "react";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="w-full flex justify-center flex-col items-center max-md:pb-5 border fixed bg-white">
      <div className="w-full max-w-[1280px] flex justify-between items-center py-5 px-6 gap-2.5">
        <div className="hidden max-md:flex h-10 w-10 border border-black rounded-md justify-center items-center flex-shrink-0">
          1
        </div>
        <div onClick={() => router.push("/")} className="flex h-10 w-40 justify-center items-center text-2xl font-bold border border-black rounded-md flex-shrink-0">
          <h1>GvankaVarg</h1>
        </div>

        <div className="w-full max-w-[730px] flex gap-2.5 max-md:hidden">
          <button onClick={() => router.push("/about")} className="h-10 w-28 flex justify-center items-center border border-black rounded-md flex-shrink-0">
            About Us
          </button>
          <input
            className="h-10 w-full max-w-[600px] p-3 border border-black rounded-md outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-2.5">
          <div className="h-10 w-10 border border-black rounded-md flex justify-center items-center max-md:hidden">
            1
          </div>
          <div className="h-10 w-10 border border-black rounded-md flex justify-center items-center max-md:hidden">
            2
          </div>
          <div className="h-10 w-10 border border-black rounded-md flex justify-center items-center">
            3
          </div>
          <div className="h-10 w-10 border border-black rounded-md flex justify-center items-center max-md:hidden">
            4
          </div>
          <div className="h-10 w-10 border border-black rounded-md flex justify-center items-center">
            5
          </div>
        </div>
      </div>
      <div className="hidden max-md:flex h-10 w-full border border-black rounded-md justify-center items-center">
        2
      </div>
    </nav>
  );
}
