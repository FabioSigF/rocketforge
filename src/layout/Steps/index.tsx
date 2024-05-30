import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import CardTransparent from "../../components/CardTransparent";

const Steps = () => {
  const stepsCards = [
    {
      number: 1,
      title: "Estudo da sua empresa",
      text: "Entender qual é o diferencial da sua empresa já é 80% do caminho percorrido.",
    },
    {
      number: 2,
      title: "Planejamento artístico",
      text: "Com os objetivos alinhados, agora é hora de desenhar o seu site!",
    },
    {
      number: 3,
      title: "Desenvolvimento do site",
      text: "O seu site é desenvolvido em código, o que o torna mais rápido e funcional.",
    },
    {
      number: 4,
      title: "Publicação e Acompanhamento",
      text: "Pode ficar tranquilo que continuaremos te acompanhando para fazer melhorias!",
    },
  ];
  return (
    <div className="bg-[url('/src/assets/steps_bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="bg-steps-linear pb-32">
        <Container>
          <div className="flex flex-col items-center">
            <Title
              title="Como fazemos essa transformação?"
              section="Passo a passo"
              position="center"
            />

            <div className="relative grid grid-rows-4 mt-32">
              {stepsCards.map((item, key) => (
                <div className="grid grid-cols-2 w-full gap-14">
                  {item.number % 2 == 0 && <div className="col-span-1"></div>}
                  <div
                    className={`col-span-1 row-span-1 flex ${
                      item.number % 2 == 0 ? "self-end" : "self-start"
                    }`}
                    key={key}
                  >
                    <div className="px-4 py-2 bg-primary h-10 rounded-s-lg">
                      0{item.number}
                    </div>
                    <div>
                      <CardTransparent extraCSS="h-[120px] rounded-lg rounded-ss-none">
                        <div className="flex flex-col justify-center px-6 py-4">
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </CardTransparent>
                    </div>
                  </div>
                  {item.number % 2 != 0 && <div className="col-span-1"></div>}
                </div>
              ))}
              <div className="w-full h-full flex justify-center absolute -top-8">
                <div className="bg-[url('/src/assets/steps_union.png')] w-[16px] h-[545px] bg-no-repeat bg-cover mr-1"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Steps;
