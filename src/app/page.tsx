import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="bg-gradient-to-br from-[#00A9A5] to-[#8A2BE2] bg-clip-text text-transparent text-7xl font-bold mb-6">
          John Jeric Polison
        </h1>
        <p className="text-xl font-bold text-[#00FF9F]/70 mb-8">BSIT - 3 </p>
        <Link href={"/"}>
          <button className="bg-[#4682B4] py-2 px-5 text-sm font-semibold rounded-full text-[#B0B8C5] shadow-xl">
            Let's Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
