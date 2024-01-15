import { useState } from "react";

import ImageComponent from "./components/ImageComponent";
import IconBrandFacebook from "./components/lib/IconBrandFacebook";
import IconBrandInstagram from "./components/lib/IconBrandInstagram";
import IconBrandTwitter from "./components/lib/IconBrandTwitter";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchWidth, setSearchWidth] = useState(1000);

  const imgProps = {
    "logo": {
      height: 62,
      width: 160,
      src: "./src/imgs/logo.png",
      alt: "logo"
    },
    "cart": {
      height: 35,
      width: 35,
      src: "./src/imgs/shopping-cart.svg",
      alt: "cart"
    }
  }

  return (
  <>
  <header className="header px-4 bg-gray-800 gap-2 flex-col">
    <nav id="topbar" className="Navbar topbar container mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <a href="#" className="p-0 transition duration-300 hover:text-yellow-200 text-sm">Categorias</a>
      <span className="separator"></span>
      <a href="#" className="p-0 transition duration-300 hover:text-yellow-200 text-sm">Sobre nós</a>
      <span className="separator"></span>
      <a href="#" className="p-0 transition duration-300 hover:text-yellow-200 text-sm">Entrega</a>
    </div>
    <nav id="socialBar" className="flex items-center space-y-2 gap-2 ">
        <span className="text-xs">Siga nossas redes</span>
          <a href="#" className="text-white hover:text-blue-400"><IconBrandTwitter/></a>
          <a href="#" className="text-white hover:text-blue-600"><IconBrandFacebook/></a>
          <a href="#" className="text-white hover:text-pink-500"><IconBrandInstagram/></a>
      </nav>
    </nav>  
    <nav id="topbarBtm" className="py-3 pr-10 Navbar topbar container mx-auto flex flex-start justify-between">
      <a href="/" className="place-self-start"><ImageComponent {...imgProps["logo"]}/></a>
      <SearchBar width={searchWidth} height={40} />
      <button className="CartWrapper h-max w-max place-self-center mb-5">
        <ImageComponent {...imgProps["cart"]}/>
      </button>
    </nav>
  </header>
  </>
  );
};

export default App;