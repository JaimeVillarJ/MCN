import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Eventos", path: "/eventos" },
    { label: "Comunidad", path: "/comunidad" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 mt-4 sm:mt-15">

        {/* Logo */}
        <img
          src="assets/logo.png"
          alt="Logo"
          className="h-16 sm:h-20 lg:h-25 w-auto"
        />

        {/* Navegación Desktop */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            px-6
            py-3
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            shadow-lg
          "
        >
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="
                relative
                text-white
                font-semibold
                tracking-wide
                px-2
                py-1
                transition-all
                duration-300
                hover:text-yellow-300
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón Desktop */}
        <button className="hidden sm:block bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-lg font-semibold transition hover:text-white hover:cursor-pointer">
          Unirse
        </button>

        {/* Hamburger Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-yellow-400 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

      </div>

      {/* Menú Mobile Desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-blue-900/95 backdrop-blur-md border-t border-yellow-400/30">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">

            {menuItems.map((item) => (
              <Link
              to={item.path}
              key={item.label}
              className="
                relative
                text-white
                font-semibold
                tracking-wide
                px-2
                py-1
                transition-all
                duration-300
                hover:text-yellow-300
              "
            >
              {item.label}
            </Link>
            ))}

            <button className="w-full bg-white  text-black px-4 py-3 rounded-xl font-semibold transition hover:bg-blue-400 hover:cursor-pointer mt-2">
              Unirse
            </button>

          </div>
        </nav>
      )}
    </header>
  );
}