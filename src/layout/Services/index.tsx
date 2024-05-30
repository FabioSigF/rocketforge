//Components
import Title from "../../components/Title";
import Container from "../../components/Container";
import Section from "../../components/Section";
import CardTransparent from "../../components/CardTransparent";
//Icons
import {
  CiDesktop,
  CiEdit,
  CiPalette,
  CiStar,
  CiTextAlignLeft,
  CiVial,
} from "react-icons/ci";
//Images
import serviceImg1 from "../../assets/services_card_1.png";
import serviceImg2 from "../../assets/services_card_2.jpg";

const Services = () => {
  const servicestext = [
    {
      title: "Web Design",
      text: "Desenvolvimento de interfaces, sites e plataformas. Trabalhamos em torno de estratégias para destacar os pontos fortes do seu negócio.",
      icon: <CiPalette />,
      rowSize: "row-span-1",
      colSize: "col-span-1",
      image: undefined,
    },
    {
      title: "UI/UX Design",
      text: "Não basta ser bonitinho! O site tem que causar impacto, mas, ao mesmo tempo, promover uma boa experiência para o usuário.",
      icon: <CiStar />,
      rowSize: "row-span-1",
      colSize: "col-span-1",
      image: undefined,
    },
    {
      title: "Responsividade",
      text: "Hoje, cerca de 80% do tráfego online no Brasil é feito por celulares. Portanto, é fundamental que o site se adapte a todos os dispositivos.",
      icon: <CiDesktop />,
      rowSize: "row-span-1",
      colSize: "col-span-1",
      image: undefined,
    },
    {
      title: "SEO",
      text: "A partir de um código semântico usado na construção do site, os buscadores do Google encontram o seu site com mais facilidade.",
      icon: <CiVial />,
      rowSize: "row-span-2",
      colSize: "col-span-1",
      image: serviceImg2,
    },
    {
      title: "Usamos código",
      text: "Ao contrário de plataformas prontas, temos mais liberdade artística e funcional no desenvolvimento em código, além de benefícios em SEO.",
      icon: <CiTextAlignLeft />,
      rowSize: "row-span-1",
      colSize: "col-span-2",
      image: serviceImg1,
    },
    {
      title: "Customização",
      text: "Nada de plataformas prontas. Você precisa se destacar da concorrência! Customizamos o seu site ou criamos do zero com a sua cara.",
      icon: <CiEdit />,
      rowSize: "row-span-1",
      colSize: "col-span-1",
      image: undefined,
    },
  ];

  return (
    <div>
      <Section>
        <Container>
          <Title
            section="Serviços"
            title="Funcionalidades que irão destacar o seu negócio"
            text="Em um ambiente tão competitivo como a internet, ter uma estratégia que destaque o seu negócio no ambiente digital é fundamental."
            width="max-w-[500px]"
          />
          <ul className="grid grid-cols-4 grid-rows-2 gap-8 mt-16">
            {servicestext.map((item, key) => (
              <li key={key} className={`${item.colSize} ${item.rowSize}`}>
                <CardTransparent extraCSS="rounded-lg overflow-hidden h-full">
                  <div
                    className={`flex py-8 px-6 items-start gap-10 justify-between h-full ${
                      item.rowSize != "row-span-1" ? "flex-col" : "flex-row"
                    }`}
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div className="bg-bg_dark p-4 rounded-lg text-xl">
                        {item.icon}
                      </div>
                      <h4 className="text-2xl">{item.title}</h4>
                      <p className="text-sm text-text">{item.text}</p>
                    </div>

                    {item.image && <img src={item.image} alt="service img" className="rounded-lg" />}
                  </div>
                </CardTransparent>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
};

export default Services;
