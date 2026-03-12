import React from "react";

type FormDividerProps = {
  children: React.ReactNode;
};

const FormDivider = ({ children }: FormDividerProps): React.ReactElement => {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-0.5 flex-1 bg-white/50"></div>
      <span className="font-bold">{children}</span>
      <div className="h-0.5 flex-1 bg-white/50"></div>
    </div>
  );
};

export default FormDivider;
