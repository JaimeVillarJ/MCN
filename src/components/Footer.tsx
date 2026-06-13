
export const Footer = () => {
  return (
    <div>
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Información */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mision Cristiana Para Las Naciones (MCN)
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Un lugar para crecer en la fe, compartir en comunidad
              y experimentar el amor de Dios.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Navegación
            </h4>

            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contáctanos
            </h4>

            <div className="space-y-3 text-blue-100">
              <p>📍 Calle 7 Sur # 7A-18</p>
              <p>📞 +57 300 123 4567</p>
              <p>✉️ contacto@iglesia.com</p>
            </div>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-blue-100 mt-10 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Mision Cristiana Para Las Naciones (MCN). Todos los derechos reservados.
          </p>

          <p className="text-blue-300 text-xs mt-2">
            "Porque donde están dos o tres congregados en mi nombre,
            allí estoy yo en medio de ellos." — Mateo 18:20
          </p>
        </div>

      </div>
    </footer>

    </div>
  )
}
