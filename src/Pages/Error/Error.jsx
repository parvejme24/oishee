import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <div>
        <h2 className="text-8xl font-bold">404</h2>
        <h4 className="text-2xl font-semibold mb-6">Page Not Found</h4>
        <Link to="/" className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:shadow-lg">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
