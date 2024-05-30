import React from "react";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

const Footer = () => {
  const navItems = [
    {
      title: "Início",
      link: "",
    },
    {
      title: "Serviços",
      link: "",
    },
    {
      title: "Portifólio",
      link: "",
    },
    {
      title: "Passo a passo",
      link: "",
    },
    {
      title: "Blog",
      link: "",
    },
  ];

  const navSocial = [
    {
      title: "Whatsapp",
      link: "/",
      icon: <IoLogoWhatsapp />,
    },
    {
      title: "Instagram",
      link: "/",
      icon: <IoLogoInstagram />,
    },
    {
      title: "Linkedin",
      link: "/",
      icon: <IoLogoLinkedin />,
    },
  ];
  return (
    <div>
      <Container>
        <div className="bg-card-linear rounded-lg">
          <div className="px-14 py-16 grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <Logo />
              <p className="text-sm text-text">
                Pronto para se destacar no mercado? Entre em contato com a gente
                para discutir a melhor estratégia para o seu negócio!
              </p>
              <span className="text-xs text-text">
                Copyright @ 2024 Rocket Forge by Fabio Signorini. Todos os
                direitos reservados
              </span>
            </div>
            <div className="flex flex-col gap-8 pt-16">
              <nav>
                <ul className="flex items-center gap-4 text-text justify-end text-sm">
                  {navItems.map((item, key) => (
                    <li key={key}>
                      <a href={item.link} className="hover:text-white">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex items-center gap-4 justify-end">
                {navSocial.map((item, key) => (
                  <li key={key} className="w-12 h-12">
                    <a href={item.link} className="w-12 h-12 flex items-center justify-center border border-gray-700 bg-bg_dark rounded-full hover:bg-primary_hover">{item.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
