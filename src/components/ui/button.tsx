import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "secondary" | "outline" | "ghost" | "icon";
};

const Button = ({
  children,
  type = "button",
  variant = "default",
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      className={`${variant === "outline" ? "bg-transparent border-2 border-white text-white hover:text-black" : "bg-white/80"} hover:bg-white transition-colors duration-200 text-black w-full py-2 rounded-lg font-bold cursor-pointer flex gap-2 justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
