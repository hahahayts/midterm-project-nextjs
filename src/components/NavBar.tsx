import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="logo text-2xl font-bold">
        <Link href={"/"}>Midterm Project</Link>
      </div>
      <div className="space-x-9">
        <Link href={"/products"} className="link">
          See all Products
        </Link>
        <Link href={"/todos"} className="link">
          See all Todos
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
