import React from "react";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useAppSelector } from "../../redux/store";

const Portfolio = () => {
  const { isMobile } = useAppSelector((state) => state.deviceSize);

  return (
    <div>
      <Container>
        <div className="flex max-sm:flex-col justify-between items-center max-sm:px-4">
          <div>
            {!isMobile && (
              <div className="text-white h-[77px] w-[77px] rounded-full border border-gray-800 bg-bg_dark flex items-center justify-center text-2xl">
                <IoIosArrowRoundBack />
              </div>
            )}
            <Title
              title="Tivemos a honra de ajudar a construir histórias..."
              section="Portifólio"
              width={isMobile ? "" : "w-[428px]"}
              position="center"
            />
            {!isMobile && (
              <div className="text-white h-[77px] w-[77px] rounded-full border border-gray-800 bg-bg_dark flex items-center justify-center text-2xl">
                <IoIosArrowRoundForward />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
