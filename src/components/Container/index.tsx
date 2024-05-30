import React from "react";

type Props = {
  children: React.ReactNode;
  extraCSS?: string;
};

const Container = ({ children, extraCSS }: Props) => {
  return <div className={`max-w-[1140px] relative m-auto w-full h-full ${extraCSS ? extraCSS : ""} `}>{children}</div>;
};

export default Container;
