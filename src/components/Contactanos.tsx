import React, { useState } from 'react';
// Asegúrate de importar una imagen adecuada para el fondo del banner. 
// Puede ser una foto de la congregación, el altar o el equipo de la iglesia.
import bannerImg from '../../public/assets/backgrounds/contactanos.jpg';

export const Contactanos: React.FC = () => {
  interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    mensaje: string;
  }

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement & HTMLTextAreaElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes integrar la lógica para enviar el formulario (API, Email, etc.)
    console.log('Datos enviados:', formData);
    alert('¡Gracias por comunicarte! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="w-full min-h-screen text-white">
      
      {/* 1. BANNER PRINCIPAL (Relacionado a la comunidad e Iglesia) */}
      <div className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con overlay oscuro para garantizar legibilidad */}
        <img 
          src={bannerImg} 
          alt="Comunidad Iglesia" 
          className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-[1px]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/70 to-gray-950"></div>
        
        {/* Texto del Banner */}
        <div className="relative z-10 text-center px-4">
          <span className="text-xs md:text-sm uppercase font-bold tracking-widest text-yellow-400 mb-2 block">
            Estamos para servirte
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg text-white">
            CONTÁCTANOS
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-300 max-w-xl mx-auto font-medium">
            "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos." 
            <span className="block text-xs text-yellow-500 mt-1 italic">— Mateo 18:20</span>
          </p>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL: FORMULARIO Y DATOS DE CONTACTO */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* COLUMNA IZQUIERDA: Formulario de Mensajes (Ocupa 7 columnas) */}
        <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">Envíanos un mensaje</h2>
          <p className="text-xs md:text-sm text-white mb-6">
            ¿Tienes alguna petición de oración, duda sobre los eventos o quieres ser voluntario? Escríbenos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-white mb-1">Nombre Completo</label>
              <input 
                id="nombre"
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="correo" className="block text-xs font-bold uppercase tracking-wider text-white mb-1">Correo Electrónico</label>
                <input 
                  id="correo"
                  type="email" 
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="juan@correo.com"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-white mb-1">Teléfono / WhatsApp</label>
                <input 
                  id="telefono"
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  placeholder="Ej. +57 300 123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-white mb-1">¿Cómo podemos ayudarte?</label>
              <textarea 
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none"
                placeholder="Escribe tu mensaje o petición de oración aquí..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-lg transform hover:-translate-y-0.5"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: Información y Horarios (Ocupa 5 columnas) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Bloque de Información */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl text-left">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 border-b border-white/10 pb-2">📍 Nuestra Ubicación</h3>
            <p className="text-sm text-white font-medium">Sede Principal de la Iglesia</p>
            <p className="text-xs text-black mt-1">Av. Principal Calle Falsa #123-45</p>
            <p className="text-xs text-black">Bogota, Colombia</p>
            
            <div className="mt-4 flex flex-col space-y-1 text-xs text-white">
              <p><strong>📞 Teléfono:</strong> (601) 123-4567</p>
              <p><strong>✉️ Correo:</strong> contacto@tuiglesia.org</p>
            </div>
          </div>

          {/* Bloque de Horarios de Servicios */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl text-left">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 border-b border-white/10 pb-2">⏰ Horarios de Reuniones</h3>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white font-semibold">Domingos (Servicio Principal)</span>
                <span className="text-yellow-400 font-bold">8:00 AM / 10:00 AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white font-semibold">Viernes (Noche de Milagros)</span>
                <span className="text-yellow-400">7:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Viernes (Jóvenes / Adolescentes)</span>
                <span className="text-yellow-400">7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Recordatorio / Invitación */}
          <div className="p-6 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-2xl border border-blue-500/20 text-left shadow-lg">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">¡Te esperamos con los brazos abiertos!</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              No importa de dónde vengas o en qué parte de tu caminar espiritual te encuentres, en esta casa siempre habrá un lugar reservado para ti y tu familia.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contactanos;