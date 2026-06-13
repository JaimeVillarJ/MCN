
/* import OrbitImages from "./OrbitImages" */

export const Inicio = () => {
  /* const images = [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
        "https://thumbs.dreamstime.com/b/todos-estamos-conectados-como-uno-toma-en-%C3%A1ngulo-alto-de-un-grupo-personas-no-identificables-que-se-aferran-la-mu%C3%B1eca-255228340.jpg",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        "https://img.magnific.com/foto-gratis/amigos-redes-sociales_53876-90180.jpg?semt=ais_hybrid&w=740&q=80",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
    ]; */
  
    return (
      <>
        
        {/* Contenido */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen">
  
          <div className="flex flex-col items-center ">
  
            {/* <img 
              src="./assets/label.jpeg" 
              alt="frase" 
              className="mb-2 w-350 h-150 mt-60" // ajusta este valor
            /> */}

            <img
              src="./assets/label.jpeg"
              alt="frase"
              className="
                mt-70
                w-[950px]
                h-auto
                rounded-2xl
                shadow-2xl
                border-4
                border-white/80
                bg-white
                p-2
                backdrop-blur-sm
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            />

            <div className="mt-40 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wider uppercase drop-shadow-lg">
                Nuestro Propósito
              </h1>

              <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-amber-300"></div>
            </div>

            {/* <div className="mt-10 w-full flex flex-col md:flex-row md:justify-center md:gap-8 gap-2 px-2 mb-10">
              <article
                className="bg-white rounded-xl shadow-lg p-6 md:w-80 w-full max-w-md mx-auto"
                aria-labelledby="mision-title"
                role="region"
              >
                <h2 id="mision-title" className="text-2xl font-bold text-gray-900">
                  Misión
                </h2>
                <p className="text-gray-700 leading-relaxed mt-3 text-sm">
                  Nuestra misión es compartir el amor de Dios, anunciar el mensaje de Jesucristo y
                  acompañar a las personas en su crecimiento espiritual, formando una comunidad de
                  fe que vive con propósito, servicio y esperanza.
                </p>
              </article>

              <article
                className="bg-white rounded-xl shadow-lg p-6 md:w-80 w-full max-w-md mx-auto"
                aria-labelledby="vision-title"
                role="region"
              >
                <h2 id="vision-title" className="text-2xl font-bold text-gray-900">
                  Visión
                </h2>
                <p className="text-gray-700 leading-relaxed mt-3 text-sm">
                  Nuestra visión es ser una iglesia que transforma vidas, fortalece familias e impacta
                  a su comunidad, guiando a más personas a conocer a Cristo y a vivir conforme a sus
                  enseñanzas.
                </p>
              </article>
            </div> */}
            <div className="mt-22 mb-20 flex flex-col items-stretch gap-8 px-6 md:flex-row md:justify-center md:gap-12">

              <div className="flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    ✨
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Misión
                  </h2>
                </div>

                <p className="flex-1 leading-8 text-slate-600">
                  Nuestra misión es compartir el amor de Dios, anunciar el mensaje de
                  Jesucristo y acompañar a las personas en su crecimiento espiritual,
                  formando una comunidad de fe que vive con propósito, servicio y
                  esperanza.
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    🌟
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Visión
                  </h2>
                </div>

                <p className="flex-1 leading-8 text-slate-600">
                  Nuestra visión es ser una iglesia que transforma vidas, fortalece
                  familias e impacta a su comunidad, guiando a más personas a conocer a
                  Cristo y a vivir conforme a sus enseñanzas.
                </p>
              </div>

            </div>

            <div className="mt-10 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wider uppercase drop-shadow-lg">
                horarios de servicio
              </h1>

              <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-amber-300"></div>
            </div>

            <div className="mt-22 mb-20 flex flex-col items-stretch gap-8 px-6 md:flex-row md:justify-center md:gap-12">

              <div className="flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    ✨
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Uncion y Milagros Miercoles 7pm - 9pm
                  </h2>
                </div>

                <p className="flex-1 leading-8 text-slate-600">
                    Te invitamos a nuestro Servicio de Unción y Milagros, un encuentro espiritual diseñado para renovar tu fe y 
                    experimentar la presencia de Dios. Ven con el corazón dispuesto a orar en comunidad, 
                    buscar la sanidad divina y ser testigo del poder transformador del Espíritu Santo en tu vida.
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    🌟
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Servicio de Jovenes Viernes 7pm - 9pm
                  </h2>
                </div>

                <p className="flex-1 leading-8 text-slate-600">
                  ¡Acompáñanos a nuestro Servicio de Jóvenes cada quince días los viernes! Es el espacio ideal para desconectarte de la rutina, 
                  compartir con buenos amigos y conectar profundamente con Dios en un ambiente dinámico. Te esperamos para vivir juntos un tiempo lleno de energía, 
                  adoración y un mensaje fresco diseñado especialmente para ti. ¡No faltes!
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    🌟
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    Culto Dominical Domingo 8am - 10am y 10am - 12pm 
                  </h2>
                </div>

                <p className="flex-1 leading-8 text-slate-600">
                  ¡Te esperamos en nuestro Culto Dominical cada domingo! 
                  Ven con toda tu familia a compartir un tiempo especial de adoración, comunión comunitaria y un mensaje inspirador que fortalecerá tu fe. 
                  Es la oportunidad perfecta para recargar el espíritu y comenzar la semana con la bendición y la paz de Dios. ¡No te lo pierdas!
                </p>
              </div>

            </div>
  
          </div>

          <section className="py-16 px-6 bg-blue-500 mb-20 rounded-3xl shadow-xl">
            <div className="max-w-6xl mx-auto">

              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Nuestra Ubicación
                </h2>
                <p className="text-white text-lg">
                  Te esperamos para compartir juntos momentos de fe, oración y comunidad.
                </p>
                <p className="mt-3 font-semibold text-black">
                  Calle 7 Sur # 7A-18
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  title="Ubicación Iglesia"
                  src="https://maps.google.com/maps?q=Calle%207%20Sur%20%237A-18&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </section>

        </div>
      </>
    )
}
