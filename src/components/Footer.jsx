import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-gray-200 text-center py-8 px-4">
        <img src="/logo.png" alt="logo" className="h-20 mx-auto mb-2 "/>
        <h4 className="text-xl font-semibold mb-2">
          Dhruti Kantharia
        </h4>
        <p className="text-sm sm:text-base text-gray-500 mb-1">
          Web Developer • UI/UX Designer • B.Tech IT Student
        </p>
        <p className="text-sm text-gray-400">Built by Dhruti Kantharia</p>
      </div>
    </>
  );
}

export default Footer