import Container from "../../components/Container";
import heroAstronaut from "../../assets/hero_astronaut.png";
import quotes from "../../assets/quotes.svg";
import Button from "../../components/Button";
import { IoCheckmark } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="w-full min-h-[680px] bg-[url('/src/assets/hero_bg_blur.png')] bg-auto bg-center-2-mobile sm:bg-center-2 bg-no-repeat overflow-x-hidden">
      <Container>
        <div className="sm:grid sm:grid-cols-8 h-full mt-[80px] max-sm:px-4 max-sm:pb-12">
          <div className="sm:col-span-5 flex flex-col gap-14 max-sm:gap-6 justify-center">
            <div className="flex flex-col gap-4">
              <div className="flex gap-7 items-center max-sm:flex-col">
                <div className="border border-primary px-10 max-sm:px-6 py-5 relative rounded-lg">
                  <span className="text-white">Bem vindo ao Rocket Forge!</span>
                  <div className="absolute rounded-full p-2 -top-4 -right-4 border border-primary bg-bg_dark">
                    <img src={quotes} alt="Decorative quotes" />
                  </div>
                </div>
                <h2 className="text-5xl text-gradient max-sm:text-4xl py-1">Não fazemos sites...</h2>
              </div>
              <h2 className="text-8xl text-gradient max-sm:text-[80px] max-sm:text-center">Forjamos foguetes!</h2>
            </div>
            <div className="flex flex-col gap-8  max-w-[619px]">
              <span className="text-white text-xl max-sm:text-base max-sm:text-center">
                Equipe que transforma a partir da criatividade, focada na
                construção <br></br> de sites e plataformas digitais.
              </span>
              <Button action={() => ({})} extraCSS="max-w-[250px] max-sm:self-center max-sm:px-8">
                Fazer Orçamento
              </Button>
              <ul className="flex gap-6 max-sm:flex-col max-sm:items-center">
                <li className="text-white gap-2 flex items-center">
                  <IoCheckmark />
                  Sites Originais
                </li>
                <li className="text-white gap-2 flex items-center">
                  <IoCheckmark />
                  Responsivos para celular
                </li>
                <li className="text-white gap-2 flex items-center">
                  <IoCheckmark />
                  Configurações personalizadas
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 h-[600px] max-sm:hidden">
            <img
              src={heroAstronaut}
              alt="Astrounaut by Rocket Content"
              className="absolute h-full w-auto -right-[130px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
