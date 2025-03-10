import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-4 gap-3 place-items-center py-5 px-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="card-loading"></div>
      ))}
    </div>
  );
};

export default loading;
