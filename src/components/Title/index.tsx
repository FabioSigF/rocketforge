type Props = {
  position?: "right" | "center" | "left";
  width?: string;
  section: string;
  title: string;
  text?: string;
};

const Title = ({ position, width, section, title, text }: Props) => {
  return (
    <div
      className={`flex flex-col ${width ? width : "w-full"} gap-8 
      ${
        position
          ? `${position === "center" ? "justify-center text-center" : ""}` ||
            `${position === "right" ? "justify-end text-end" : ""}`
          : ""
      }`}
    >
      <h2 className="text-xl sm:text-2xl">{section}</h2>
      <h3 className="text-4xl sm:text-5xl">{title}</h3>
      {text && <p className="max-sm:text-sm">{text}</p>}
    </div>
  );
};

export default Title;
