import Logo from "../../components/Logo";

import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import Container from "../../components/Container";

const Navbar = () => {
  const navItems = [
    {
      title: "Início",
      link: "/",
    },
    {
      title: "Servicos",
      link: "/",
    },
    {
      title: "Portfólio",
      link: "/",
    },
    {
      title: "Preços",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
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
    <header className="w-full h-[80px] flex items-center border-b border-gray-600 backdrop-blur-xl bg-bg_dark bg-opacity-20 fixed z-50">
      <Container>
        <nav className="flex items-center justify-between gap-8 h-full">
          <Logo />
          <ul className="flex items-center gap-8 ">
            {navItems.map((item, key) => (
              <li key={key} className="relative">
                <a
                  href={item.link}
                  className="font-title before:w-0 before:h-[2px] before:bg-white before:absolute before:bottom-0 hover:before:w-full before:transition-all transition-all"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center text-xl ">
            {navSocial.map((item, key) => (
              <li key={key} className="px-2 hover:text-primary_hover">
                <a href={item.link}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
