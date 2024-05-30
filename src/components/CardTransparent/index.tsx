import React from "react";

type Props = {
  children: React.ReactNode;
  extraCSS?: string;
};

const CardTransparent = ({ children, extraCSS }: Props) => {
  return (
    <div className={`bg-black bg-opacity-20 border border-gray-700 ${extraCSS ? extraCSS : ""}`}>
      <div className="bg-card-linear mix-blend-plus-lighter h-full">{children}</div>
    </div>
  );
};

export default CardTransparent;
