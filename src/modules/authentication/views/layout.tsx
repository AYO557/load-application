import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const AuthLayout = (): React.ReactElement => {
  return (
    <div className="h-screen bg-black text-white flex">
      <div className="h-full w-[50%] lg:w-[60%] hidden md:inline-block bg-green-800"></div>

      <div className="h-full w-full md:w-[50%] lg:w-[40%] bg-black text-white flex justify-center items-center">
        <main className="p-2 md:p-4 lg:p-8 w-full max-w-125 space-y-8">
          <Toaster position="top-right" />

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
