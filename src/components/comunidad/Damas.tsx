import { useEffect, useState } from "react";

import pareja1 from "../../../public/assets/pareja1.jpg";
import pareja2 from "../../../public/assets/pareja2.jpg";
import pareja3 from "../../../public/assets/pareja3.jpg";
import pareja4 from "../../../public/assets/pareja4.jpg";
import pareja5 from "../../../public/assets/pareja5.jpg";
import pareja6 from "../../../public/assets/pareja6.jpg";

import ChromaGrid from "../ChromaGrid";

const caballeros = [
  {
    imagen: pareja1,
    nombres: "Juan Pérez",
  },
  {
    imagen: pareja2,
    nombres: "Carlos Rodríguez",
  },
  {
    imagen: pareja3,
    nombres: "Luis Fernández",
  },
  {
    imagen: pareja4,
    nombres: "Miguel Sánchez",
  },
  {
    imagen: pareja5,
    nombres: "David Ramírez",
  },
  {
    imagen: pareja6,
    nombres: "Javier Morales",
  },
];

export const Damas = () => {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(100);
      } else if (window.innerWidth < 1024) {
        setRadius(150);
      } else {
        setRadius(200);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const items = caballeros.map((caballero) => ({
    image: caballero.imagen,
    title: caballero.nombres,
    subtitle: "Equipo de Caballeros",
    handle: "@caballeros",
    borderColor: "#FACC15",
    gradient: "linear-gradient(145deg, #FACC15, #1E3A8A)",
    url: "#",
  }));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
      {/* Título */}
      <div className="text-center mb-10 md:mb-16">
        <p className="text-yellow-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
          Comunidad
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Equipo de Caballeros
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-2xl text-white max-w-4xl mx-auto px-2">
          Comunícate con los miembros del equipo de caballeros para fortalecer
          tu relación y crecer juntos en la fe.
        </p>

        <div className="w-20 md:w-24 h-1 bg-yellow-300 mx-auto mt-5 rounded-full" />
      </div>

      {/* ChromaGrid */}
      <div
        className="
          relative
          w-full
          mt-3.5
          min-h-[700px]
          sm:min-h-[900px]
          md:min-h-[1100px]
          lg:min-h-[1200px]
        "
      >
        <ChromaGrid
          items={items}
          radius={radius}
          damping={0.2}
          fadeOut={0.2}
          ease="power3.out"
        />
      </div>
    </section>
  );
};