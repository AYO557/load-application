import React from "react";

type ButtonProps = {
  children: React.ReactElement | string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  type = "button",
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      className="bg-white/80 hover:bg-white transition-colors duration-200 text-black w-full py-2 rounded-lg font-bold cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
