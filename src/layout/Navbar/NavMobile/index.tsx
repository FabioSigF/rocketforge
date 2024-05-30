import Logo from "../../../components/Logo";
import {
  IoClose,
  IoHomeOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMenu,
} from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { onToggle } from "../../../redux/menuMobile/slice";

const NavMobile = () => {
  const dispatch = useAppDispatch();

  const { isOpen } = useAppSelector((state) => state.menuMobile);

  const handleToggleMenu = () => {
    dispatch(onToggle());
  };

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
    <div className="relative h-full flex items-center w-full">
      <nav className="text-white w-full px-4">
        <ul className="w-full flex items-center justify-between">
          <li>
            <a href="#!" className="text-2xl">
              <IoHomeOutline />
            </a>
          </li>
          <li>
            <Logo logoIcon />
          </li>
          <li onClick={() => handleToggleMenu()} className="text-2xl">
            <IoMenu />
          </li>
        </ul>
        <div
          className={`flex flex-col gap-6 h-screen w-full px-6 fixed top-0 bg-bg_dark py-8 transition ${
            isOpen ? "translate-x-0 left-0" : "translate-x-[110vw]"
          }`}
        >
          <div className="flex justify-between mb-4">
            <Logo />
            <div onClick={() => handleToggleMenu()} className="text-3xl">
              <IoClose />
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {navItems.map((item, key) => (
              <li key={key}>
                <a href={item.link} className="font-title text-2xl block py-2">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-full h-[1px] bg-gray-400"></div>
          <ul className="flex items-center justify-between px-8">
            {navSocial.map((item, key) => (
              <li key={key} className="text-xl">
                <a href={item.link}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
