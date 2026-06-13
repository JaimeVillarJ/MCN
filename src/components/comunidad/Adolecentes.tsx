import ProfileCard from "../ProfileCard";

// Nota: Las imágenes deben estar guardadas en: public/assets/
// En Vite, la carpeta "public" se sirve directamente desde la raíz (/), 
// por lo que no es necesario importarlas arriba.
const caballeros = [
  {
    imagen: "/assets/pareja1.jpg",
    nombres: "Juan Pérez",
  },
  {
    imagen: "/assets/pareja2.jpg",
    nombres: "Carlos Rodríguez",
  },
  {
    imagen: "/assets/pareja3.jpg",
    nombres: "Luis Fernández",
  },
  {
    imagen: "/assets/pareja4.jpg",
    nombres: "Miguel Sánchez",
  },
  {
    imagen: "/assets/pareja5.jpg",
    nombres: "David Ramírez",
  },
  {
    imagen: "/assets/pareja6.jpg",
    nombres: "Javier Morales",
  },
];

export const Adolescentes = () => {
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

      {/* Grid de ProfileCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {caballeros.map((caballero, index) => (
          <ProfileCard
            key={index}
            name={caballero.nombres}
            title="Equipo de Caballeros"
            handle="caballeros"
            status="Disponible"
            contactText="Contactar"
            avatarUrl={caballero.imagen}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        ))}
      </div>
    </section>
  );
};