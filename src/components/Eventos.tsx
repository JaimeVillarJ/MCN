import React, { useState } from 'react';
import imageBg from '../../public/assets/backgrounds/caballeros.jpg';
import damas from '../../public/assets/backgrounds/ester.jpg';
import adolecentes from '../../public/assets/backgrounds/adolecentes.jpg';
import jovenes from '../../public/assets/backgrounds/jovenes.jpg';
import ShinyText from './ShinyText';

export const Eventos = () => {
  // Estado para el carrusel superior
  const [currentIndex, setCurrentIndex] = useState(0);

  // 4 opciones para el carrusel superior
  const imagenesTren = [
    { title: "Caballeros", img: imageBg },
    { title: "Damas", img: damas },
    { title: "Adolescentes", img: adolecentes },
    { title: "Jóvenes", img: jovenes },
    { title: "Caballeros", img: imageBg },
    { title: "Damas", img: damas },
    { title: "Adolescentes", img: adolecentes },
    { title: "Jóvenes", img: jovenes }
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenesTren.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagenesTren.length - 1 ? 0 : prev + 1));
  };

  // Base de datos simulada de imágenes asignadas a cada categoría
  const seccionCaballeros = Array(4).fill({ titulo: "Congreso de Caballeros", fecha: "12, 13 y 14 de junio", img: imageBg });
  const seccionMujeres = Array(4).fill({ titulo: "Encuentro de Damas", fecha: "12, 13 y 14 de junio", img: damas });
  const seccionParejas = Array(4).fill({ titulo: "Retiro de Parejas", fecha: "19 y 20 de junio", img: imageBg }); // Reutilizada temporalmente
  const seccionJovenes = Array(4).fill({ titulo: "Congreso de Jóvenes", fecha: "12, 13 y 14 de junio", img: jovenes });
  const seccionAdolescentes = Array(4).fill({ titulo: "Congreso de Adolescentes", fecha: "12, 13 y 14 de junio", img: adolecentes });

  // Lista totalizadora de 25 imágenes para la sección final (repetidas armoniosamente)
  const todosLosEventos = [
    ...seccionCaballeros,
    ...seccionMujeres,
    ...seccionParejas,
    ...seccionJovenes,
    ...seccionAdolescentes,
    { titulo: "Especial de Alabanza", fecha: "28 de junio", img: jovenes },
    { titulo: "Escuela Dominical", fecha: "Todos los domingos", img: adolecentes },
    { titulo: "Noche de Oración", fecha: "Cada viernes", img: imageBg },
    { titulo: "Reunión de Liderazgo", fecha: "05 de julio", img: damas },
    { titulo: "Festa de la Cosecha", fecha: "15 de julio", img: jovenes },
  ];

  // Componente interno reutilizable para renderizar las tarjetas pequeñas de eventos
  const TarjetaEvento = ({ evento }) => (
    <div className="group flex flex-col bg-white text-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <div className="absolute top-2 left-2 bg-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded text-white uppercase tracking-wider z-10 shadow-sm">
          Nuevo
        </div>
        <img 
          src={evento.img} 
          alt={evento.titulo} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
        />
      </div>
      <div className="p-2.5 flex flex-col flex-grow justify-between text-left bg-gray-50/50">
        <div>
          <h3 className="text-xs font-bold line-clamp-1 tracking-tight text-gray-900 leading-tight">
            {evento.titulo}
          </h3>
          <span className="inline-block bg-gray-200 text-gray-700 text-[8px] font-bold px-1 py-0.2 rounded mt-0.5">
            Todo Público
          </span>
        </div>
        <div className="mt-1.5 pt-1 border-t border-gray-200/60">
          <p className="text-[8px] text-gray-400 uppercase font-semibold tracking-wider">Estreno:</p>
          <p className="text-[11px] font-extrabold text-blue-700">{evento.fecha}</p>
        </div>
      </div>
    </div>
  );
  {/* <div className="text-center px-4 py-8 md:px-8 bg-gray-900 text-white min-h-screen"> */}
  return (
    
    <div className="
      text-center
      px-4
      py-8
      md:px-8
      min-h-screen
      text-white
      rounded-3xl
      border border-white/10
      backdrop-blur-xl
      bg-white/10
      shadow-2xl
    ">
      
      {/* 1. TREN DE IMÁGENES SUPERIOR (3 veces más grande - h-[450px] o aspect-video en contenedor amplio) */}
      <div className="relative w-full max-w-7xl mx-auto mb-16 px-12 group">
        <h2 className="text-xs uppercase font-bold tracking-widest text-white mb-4 text-left">Destacados de la semana</h2>
        
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-gray-900/40 p-4">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {imagenesTren.map((item, index) => (
              // Se le dio una altura fija imponente (h-[350px] md:h-[450px]) para triplicar su tamaño visual anterior
              <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 relative h-[280px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-gray-700/60 shadow-xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
                  <span className="text-lg md:text-2xl font-black tracking-wide uppercase text-yellow-400 drop-shadow-md">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación adaptados al nuevo tamaño */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/90 hover:bg-yellow-500 hover:text-black border border-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-2xl text-xl text-white"
        >
          &#10094;
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/90 hover:bg-yellow-500 hover:text-black border border-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-2xl text-xl text-white"
        >
          &#10095;
        </button>
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-16">CARTELERA DE EVENTOS</h1>

      {/* CONTENEDOR MÁXIMO DE LAS CATEGORÍAS */}
      <div className="max-w-5xl mx-auto space-y-16 px-2">
        
        {/* SECCIÓN 1: CABALLEROS */}
        <div className="text-left">
          <h2 className="text-xl font-extrabold text-yellow-400 mb-4 border-b border-gray-800 pb-2">♂️ Sección Caballeros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seccionCaballeros.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

        {/* SECCIÓN 2: MUJERES */}
        <div className="text-left">
          <h2 className="text-xl font-extrabold text-yellow-400 mb-4 border-b border-gray-800 pb-2">♀️ Sección Mujeres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seccionMujeres.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

        {/* SECCIÓN 3: PAREJAS */}
        <div className="text-left">
          <h2 className="text-xl font-extrabold text-yellow-400 mb-4 border-b border-gray-800 pb-2">❤️ Sección Parejas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seccionParejas.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

        {/* SECCIÓN 4: JÓVENES */}
        <div className="text-left">
          <h2 className="text-xl font-extrabold text-yellow-400 mb-4 border-b border-gray-800 pb-2">⚡ Sección Jóvenes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seccionJovenes.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

        {/* SECCIÓN 5: ADOLESCENTES */}
        <div className="text-left">
          <h2 className="text-xl font-extrabold text-yellow-400 mb-4 border-b border-gray-800 pb-2">🛹 Sección Adolescentes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {seccionAdolescentes.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

        {/* SECCIÓN GENERAL: TODOS LOS EVENTOS (25 IMÁGENES) */}
        <div className="text-left pt-8">
          <div className="mb-6 text-center">
            <ShinyText
              className='text-3xl'
              text="✨ Todos los Eventos ✨"
              speed={2}
              delay={0}
              color="#F2D70C"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {todosLosEventos.map((ev, i) => <TarjetaEvento key={i} evento={ev} />)}
          </div>
        </div>

      </div>

      {/* 
        COMENTADO SEGÚN SOLICITUD:
        Sección inferior con la imagen grande de etiquetas de adolescentes.
        
        <div className='flex flex-col mt-20 items-center max-w-4xl mx-auto pb-12'>
          <ShinyText
            className='text-3xl mb-8'
            text="✨ Adolescentes ✨"
            speed={2}
            delay={0}
            color="#F2D70C"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />

          <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-800 max-w-3xl">
            <img 
              src={adolecentesLabel} 
              alt="Adolescentes label" 
              className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-500 hover:scale-101" 
            />
          </div>
        </div>
      */}

    </div>
  );
};