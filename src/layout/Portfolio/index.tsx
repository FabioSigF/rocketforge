import React from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-white h-[77px] w-[77px] rounded-full border border-gray-800 bg-bg_dark flex items-center justify-center text-2xl">
            <IoIosArrowRoundBack />
          </div>
          <Title
            title="Tivemos a honra de ajudar a construir histórias..."
            section="Portifólio"
            width="w-[428px]"
            position="center"
          />
          <div className="text-white h-[77px] w-[77px] rounded-full border border-gray-800 bg-bg_dark flex items-center justify-center text-2xl">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
