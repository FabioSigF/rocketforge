import Container from "../../components/Container";
import Title from "../../components/Title";
import CardTransparent from "../../components/CardTransparent";
import Button from "../../components/Button";
import { CiCircleCheck } from "react-icons/ci";

const Prices = () => {
  return (
    <div>
      <Container>
        <div className="sm:grid sm:grid-cols-3 sm:gap-8 max-sm:px-4">
          <div className="flex flex-col justify-between gap-10 max-sm:mb-10">
            <Title
              title="Contrate um site profissional"
              section="Orçamento de site"
            />
            <CardTransparent extraCSS="rounded-lg border border-gray-700">
              <div className="flex flex-col gap-8 py-8 px-6">
                <h4 className="text-4xl text-center">Ainda em dúvida?<br></br>Entre em contato!</h4>
                <Button action={() => ({})}>Fazer orçamento</Button>
              </div>
            </CardTransparent>
          </div>
          <div className="flex flex-col gap-8 py-8 px-6 bg-bg_dark border border-primary rounded-lg max-sm:mb-10">
            <h3 className="text-3xl mb-6">Site expresso</h3>
            <p>Site entregue em um período de 7 dias. É feito a partir de um dos nossos modelos de site.</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Site profissional a partir de layout</p>
              </li>
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Amigável aos motores do Google</p>
              </li>
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Uma ou várias páginas (a definir)</p>
              </li>
            </ul>
            <div className="bg-primary rounded-lg text-white p-6 text-center">
              <span className="text-5xl sm:text-6xl font-bold">R$ 399</span>
              <p className="text-sm">Pagamento Único</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 py-8 px-6 bg-primary border border-primary rounded-lg">
            <h3 className="text-3xl mb-6">Site sob medida</h3>
            <p>Site feito do zero para se adequar aos seus objetivos. A melhor opção para se destacar!</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Site profissional com a sua cara</p>
              </li>
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Otimização de SEO para o Google</p>
              </li>
              <li className="flex gap-4 items-center">
                <CiCircleCheck />
                <p>Integrações customizadas</p>
              </li>
            </ul>
            <div className="bg-white rounded-lg text-primary px-6 pt-7 pb-6 text-center flex flex-col gap-2">
              <span className="text-4xl sm:text-5xl font-bold">Orçamento</span>
              <p className="text-sm">Pagamento Único</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Prices;
