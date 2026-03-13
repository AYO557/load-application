import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import auth_bg from "../../../assets/image/loan-background.jpg";

const AuthLayout = (): React.ReactElement => {
  return (
    <div className="h-screen bg-black text-white flex">
      <div
        className="h-full w-[50%] lg:w-[60%] hidden md:inline-block"
        style={{
          background: `linear-gradient(rgba(9,82,9,0.3)), url(${auth_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="h-full w-full md:w-[50%] lg:w-[40%] bg-[#042A0B] text-white flex justify-center items-center">
        <main className="p-2 md:p-4 lg:p-8 w-full max-w-125 space-y-8">
          <Toaster position="top-right" />

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
