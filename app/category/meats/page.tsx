import React from "react";
import products from "../../../products.json";

const page = () => {
  const snacks = products.filter((product) => product.category === "meats");

  return (
    <main className="flex justify-center flex-grow">
      <div className="w-full max-w-[1280px] pt-[160px] pb-16 px-6 flex flex-col items-center justify-around gap-8">
        <h1 className="text-[32px] font-bold">meats</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {snacks.map((product) => (
            <div
              className="h-[300px] w-[250px] flex flex-col items-center justify-center gap-2.5 border"
              key={product.id}
            >
              <img src={product.image} alt="image" className="h-[200px] w-[200px]" />
              <h2>{product.name}</h2>
              <p>{product.price}₾</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
