import TiltedCard from "../TiltedCard";

import pareja1 from "../../../public/assets/pareja1.jpg";
import pareja2 from "../../../public/assets/pareja2.jpg";
import pareja3 from "../../../public/assets/pareja3.jpg";
import pareja4 from "../../../public/assets/pareja4.jpg";
import pareja5 from "../../../public/assets/pareja5.jpg";
import pareja6 from "../../../public/assets/pareja6.jpg";

const parejas = [
  {
    imagen: pareja1,
    nombres: "Juan Pérez & María Gómez",
  },
  {
    imagen: pareja2,
    nombres: "Carlos Rodríguez & Ana Martínez",
  },
  {
    imagen: pareja3,
    nombres: "Luis Fernández & Sofía López",
  },
  {
    imagen: pareja4,
    nombres: "Miguel Sánchez & Laura Torres",
  },
  {
    imagen: pareja5,
    nombres: "David Ramírez & Elena Castro",
  },
  {
    imagen: pareja6,
    nombres: "Javier Morales & Patricia Ruiz",
  },
];

export const Parejas = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Título */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-yellow-300 uppercase tracking-[0.3em] text-sm font-semibold">
          Comunidad
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Equipo de Parejas
        </h1>
        <p className="mt-15 text-3xl sm:text-4xl md:text-3xl font-bold text-white">
          Comunicate con los miembros del equipo de parejas para fortalecer tu relación y crecer juntos en la fe.
        </p>

        <div className="w-20 md:w-24 h-1 bg-yellow-300 mx-auto mt-5 rounded-full" />
      </div>

      {/* Grid Responsive */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
          md:gap-10
          justify-items-center
        "
      >
        {parejas.map((pareja, index) => (
          <div
            key={index}
            className="
              w-full
              max-w-[320px]
              sm:max-w-[340px]
              md:max-w-[360px]
            "
          >
            <TiltedCard
              imageSrc={pareja.imagen}
              altText={pareja.nombres}
              captionText={pareja.nombres}
              containerHeight="420px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <div className="text-center px-4">
                  <p
                    className="
                      inline-block
                      px-4
                      py-2
                      rounded-xl
                      bg-black/50
                      backdrop-blur-sm
                      text-white
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-bold
                      text-center
                      shadow-lg
                    "
                  >
                    {pareja.nombres}
                  </p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};