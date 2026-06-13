import caballeros from '../../../public/assets/caballeros.jpg';
import damas from '../../../public/assets/damas.jpg';
import parejas from '../../../public/assets/parejas.jpg';
import jovenes from '../../../public/assets/jovenes.jpg';
import adolescentes from '../../../public/assets/adolecentes.jpg';
import { Link } from "react-router-dom";

const equipos = [
  { nombre: 'Caballeros', imagen: caballeros, ruta: '/caballeros' },
  { nombre: 'Damas', imagen: damas, ruta: '/damas' },
  { nombre: 'Parejas', imagen: parejas, ruta: '/parejas' },
  { nombre: 'Jóvenes', imagen: jovenes, ruta: '/jovenes' },
  { nombre: 'Adolescentes', imagen: adolescentes, ruta: '/adolescentes' },
];

export const Comunidad = () => {
  return (
    <section
      id="comunidad"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Título */}
      <div className="text-center mb-14">
        <p className="text-yellow-300 font-semibold tracking-[0.3em] uppercase mb-2">
          Comunidad
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Nuestros Equipos
        </h1>

        <div className="w-24 h-1 bg-yellow-300 mx-auto mt-4 rounded-full" />
      </div>

      {/* Banners */}
      <div className="flex flex-col gap-8">
        {equipos.map((equipo) => (
                <Link
                    key={equipo.nombre}
                    to={equipo.ruta}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        shadow-2xl
                        cursor-pointer
                        block
                    "
                    >
                    <img
                        src={equipo.imagen}
                        alt={equipo.nombre}
                        className="
                        w-full
                        aspect-[21/9]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                        "
                    />

                    <div
                        className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/90
                        via-black/40
                        to-transparent
                        "
                    />

                    <div
                        className="
                        absolute
                        inset-0
                        flex
                        items-center
                        px-8
                        md:px-12
                        "
                    >
                        <div>
                        <h2
                            className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            text-white
                            uppercase
                            tracking-wider
                            "
                        >
                            {equipo.nombre}
                        </h2>

                        <div
                            className="
                            mt-4
                            h-1
                            w-16
                            bg-yellow-300
                            rounded-full
                            transition-all
                            duration-500
                            group-hover:w-32
                            "
                        />

                        <p
                            className="
                            mt-4
                            text-white/80
                            max-w-lg
                            text-sm
                            md:text-base
                            "
                        >
                            Forma parte de nuestro equipo de {equipo.nombre.toLowerCase()}.
                        </p>
                        </div>
                    </div>
                </Link>
        ))}
      </div>
    </section>
  );
};