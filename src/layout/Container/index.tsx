import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-[1140px] relative m-auto w-full">{children}</div>;
};

export default Container;
