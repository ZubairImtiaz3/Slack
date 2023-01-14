import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Svgs
import logo from "../../assets/images/logo.png";
import search from "../../assets/svgs/search.svg";
import headphones from "../../assets/images/headphones.png";

//types

interface menuItem {
  href: string;
  children: ReactNode;
}

interface menu {
  children: ReactNode;
  open: boolean;
}
interface menuContainer {
  children: ReactNode;
}

export default function Navbar() {
  const navList = (
    <ul className="space-x-10 ml-6 hidden xl:flex">
      <li>
        <Link href="/">Products</Link>
      </li>
      <li>
        <Link href="/">Solutions</Link>
      </li>
      <li>
        <Link href="/">Enterprise</Link>
      </li>
      <li>
        <Link href="/">Resources</Link>
      </li>
      <li>
        <Link href="/">Pricing</Link>
      </li>
    </ul>
  );

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  function MenuItem({ children, href }: menuItem) {
    const hideHam = () => {
      setOpen(false);
    };
    return (
      <div className="p-2">
        <Link onClick={hideHam} href={href} className={style.item}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="spacer h-[82px]"></div>
      <div className="Navbar fixed top-0 bg-white z-50 pl-[3%] font-syne font-medium text-base text-black border-b-2 border-solid w-full">
        <div className="containerNavItems flex justify-between items-center">
          <div className="ItemsLeft flex items-center">
            <div className="border-solid xl:border-r-2 pr-6 py-6">
              <Link href="/">
                <Image className="w-full" src={logo} alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:block">{navList}</div>
          </div>

          <div className="itemsRight flex space-x-6">
            <div className="px-6 py-[2.1rem] border-solid border-l-2 border-r-2 hidden xl:flex">
              <Image className="cursor-pointer" src={search} alt="search" />
            </div>

            <div className="space-x-6 items-center hidden xl:flex">
              <Link href="/">
                <div className="flex space-x-2 items-center">
                  <Image src={headphones} alt="logo" />
                  <button>Talk To Sales</button>
                </div>
              </Link>

              <div>
                <Link href="/">
                  <button className="bg-black text-white px-6 py-[30.5px]">
                    Login / Register
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* MobileNav */}
          <div className="block xl:hidden mr-[3%]">
            <div onClick={toggle} className="space-y-2 ml-[3%]">
              <span className="block w-5 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
            </div>
            <Menu open={open}>
              <button
                aria-label="Close"
                className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
                onClick={toggle}
              >
                &times;
              </button>
              <MenuContainer>
                <MenuItem href="#">Login / Register</MenuItem>
                <MenuItem href="#">Talk To Sales</MenuItem>
                <MenuItem href="#">Products</MenuItem>
                <MenuItem href="#">Solutions</MenuItem>
                <MenuItem href="#">Enterprise</MenuItem>
                <MenuItem href="#">Resources</MenuItem>
                <MenuItem href="#">Pricing</MenuItem>
              </MenuContainer>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}

/* Logic Mobile Nav*/
const style = {
  container: `relative top-1/4 w-full space-y-8 text-center mt-8`,
  item: `text-3xl text-gray-400 cursor-pointer hover:text-white pb-20`,
  menu: {
    open: `h-full w-full `,
    close: `w-full h-0`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-black`,
  },
};

function Menu({ children, open }: menu) {
  return (
    <div
      className={`${style.menu.default} 
         ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }: menuContainer) {
  return <div className={style.container}>{children}</div>;
}
