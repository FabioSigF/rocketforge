import React from "react";

type Props = {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  extraCSS?: string;
  disabled?: boolean;
  action: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  bgColor,
  color,
  extraCSS,
  disabled,
  type,
  action,
}: Props) => {
  return (
    <button
      type={type ? type : "submit"}
      className={`
      flex items-center gap-4 rounded-md shadow-lg justify-center py-2 h-[48px] font-bold button-primary text-title
      ${extraCSS && extraCSS}
      ${color ? color : "text-white"}
      ${
        disabled
          ? "cursor-not-allowed bg-gray-300 hover:bg-gray-400"
          : `${
              bgColor ? bgColor : "bg-primary hover:bg-primary_hover"
            } cursor-pointer`
      }
      `}
      onClick={() => action()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
