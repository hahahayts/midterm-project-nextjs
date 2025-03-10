import FetchTodos from "@/db/FetchTodos";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-3/4">
        <FetchTodos />
      </div>
    </div>
  );
};

export default page;
