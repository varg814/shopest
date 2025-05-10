// import { Playwrite_RO } from "next/font/google";

// const gvanca = Playwrite_RO({
//   style: "normal",
// });
// import background from "../app/download.png";
"use client"
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()
  //   return (
  //     <div
  //       className={`flex items-center flex-col justify-between`}
  //       style={{
  //         backgroundImage: `url(${background.src})`,
  //         backgroundRepeat: "no-repeat",
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //       }}
  //     >
  //       <nav className="bg-[#000080] py-[10px] w-full shadow-lg rounded-b-[10px]">
  //         <div className="flex justify-center">
  //           <h1 className={`${gvanca.className} font-bold text-[32px]`}>
  //             La Clê
  //           </h1>
  //         </div>
  //       </nav>
  //       <main className="w-full max-w-[1200px] flex items-center flex-col h-[calc(100vh-104.5px)]">
  //         <section className="bg-[#dddddd] flex w-full rounded-[10px] shadow-md">
  //           <div className="py-[20px] text-center w-[50%] border-r-[0.5px]">
  //             <h1>for her</h1>
  //           </div>
  //           <div className="py-[20px] text-center w-[50%] border-l-[0.5px]">
  //             <h1>for him</h1>
  //           </div>
  //         </section>
  //         <section className="w-full relative max-w-[400px] bg-blue-950/30 backdrop-blur-md my-[auto] rounded-[8px]">
  //   <div className="py-[50px] text-center text-[32px]">
  //     <h1>
  //       Define yourself <br /> through high fashion
  //     </h1>
  //   </div>
  //   <div>
  //     <button className="w-[50%] py-[10px] border-[1px] border-r-[0.5px] cursor-pointer rounded-bl-[8px]">
  //       Log In
  //     </button>
  //     <button className="w-[50%] py-[10px] border-[1px] border-l-[0.5px] cursor-pointer rounded-br-[8px]">
  //       Sign Up
  //     </button>
  //   </div>
  // </section>

  //       </main>
  //       <footer className="bg-[#eeeeee] py-[10px] w-full text-[11px] text-right">
  //         <h1>A new vision of you since 2025</h1>
  //       </footer>
  //     </div>
  //   );
  return (
    <main className="flex justify-center flex-grow">
      <div className="w-full max-w-[1280px] pt-[160px] pb-16 px-6 flex flex-col items-center justify-around gap-8">
        <h1 className="text-[32px] font-bold">choose a category</h1>
        <div className="w-full flex gap-2.5 justify-center max-md:flex-col max-md:items-start">
          <button onClick={() => router.push("/category/meats")} className="flex h-10 w-40 justify-center items-center text-2xl font-bold border border-black rounded-md flex-shrink-0">meats</button>
          <button onClick={() => router.push("/category/drinks")} className="flex h-10 w-40 justify-center items-center text-2xl font-bold border border-black rounded-md flex-shrink-0">drinks</button>
          <button onClick={() => router.push("/category/bakery")} className="flex h-10 w-40 justify-center items-center text-2xl font-bold border border-black rounded-md flex-shrink-0">bakery</button>
          <button onClick={() => router.push("/category/snacks")} className="flex h-10 w-40 justify-center items-center text-2xl font-bold border border-black rounded-md flex-shrink-0">snacks</button>
        </div>
      </div>
    </main>
  );
}
