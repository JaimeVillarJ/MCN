import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Comunidad } from "./components/comunidad/Comunidad";
import { Parejas } from "./components/comunidad/Parejas";
import { Caballeros } from "./components/comunidad/Caballeros";
import { Adolescentes } from "./components/comunidad/Adolecentes";
import { Jovenes } from "./components/comunidad/Jovenes";
import { Damas } from "./components/comunidad/Damas";
import { Contactanos } from "./components/Contactanos";
import { Eventos } from "./components/Eventos";
import { Donaciones } from "./components/Donaciones";
import { Contenido } from "./components/Contenido";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full bg-[#807e65]">
        <Header />

        <main className="relative z-10 flex flex-col min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <section className="flex flex-col items-center w-full mt-50">
                  <Inicio />
                </section>
              }
            />

            <Route
              path="/eventos"
              element={
                <section className="flex flex-col items-center w-full mt-60 mb-30">
                  <Eventos />
                </section>
              }
            />

            <Route
              path="/comunidad"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Comunidad />
                </section>
              }
            />

            <Route
              path="/parejas"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Parejas />
                </section>
              }
            />

            <Route
              path="/caballeros"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Caballeros />
                </section>
              }
            />

            <Route
              path="/adolescentes"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Adolescentes />
                </section>
              }
            />

            <Route
              path="/jovenes"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Jovenes />
                </section>
              }
            />

            <Route
              path="/damas"
              element={
                <section className="flex flex-col items-center w-full mt-40">
                  <Damas />
                </section>
              }
            />

            <Route
              path="/contacto"
              element={
                <section className="flex flex-col items-center w-full mt-50">
                  <Contactanos />
                </section>
              }
            />

            <Route
              path="/contenido"
              element={
                <section className="flex flex-col items-center w-full mt-50">
                  <Contenido />
                </section>
              }
            />

            <Route
              path="/donaciones"
              element={
                <section className="flex flex-col items-center w-full mt-50">
                  <Donaciones />
                </section>
              }
            />
          </Routes>
          
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;