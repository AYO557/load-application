import React from "react";

type AuthHeaderProps = {
  title: string;
  description?: string;
};

const AuthHeader = ({
  title,
  description,
}: AuthHeaderProps): React.ReactElement => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="2xl:text-3xl xl:text-2xl text-xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default AuthHeader;
