import IconReact from "./components/lib/IconReact";
import IconBrandFacebook from "./components/lib/IconBrandFacebook";
import IconBrandInstagram from "./components/lib/IconBrandInstagram";
import IconBrandTwitter from "./components/lib/IconBrandTwitter";

function App() {
  return (
  <>

  <header className="header p-2 bg-gray-800 grid grid-cols-1 grid-rows-2 gap-2">
    <nav id="topbar" className="Navbar topbar container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="#" className="px-4 py-2 transition duration-300 hover:text-yellow-200">Categorias</a>
        <a href="#" className="px-4 py-2 transition duration-300 hover:text-yellow-200">Sobre nós</a>
        <a href="#" className="px-4 py-2 transition duration-300 hover:text-yellow-200">Entrega</a>
      </div>
      <nav id="socialBar" className="flex items-center space-x-4">
        <span>Siga-nos no</span>
        <a href="#" className="text-white hover:text-blue-400"> <IconBrandTwitter/></a>
        <a href="#" className="text-white hover:text-blue-600"> <IconBrandFacebook/></a>
        <a href="#" className="text-white hover:text-pink-500"> <IconBrandInstagram/></a>
      </nav>
    </nav>
    <nav id="topbarBtm" className="Navbar topbar container mx-auto flex flex-start justify-between">
      <a href="/"> <IconReact/></a>
      <a href="#" className="px-4 py-2">SEARCH</a>
      <a href="#" className="px-4 py-2">CART</a>
    </nav>
  </header>

  </>
  );
};

export default App;