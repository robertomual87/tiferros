import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import Proyectos from "./pages/Proyectos";
import Certificaciones from "./pages/Certificaciones";
import Contacto from "./pages/Contacto";

/** Al cambiar de ruta, regresa al inicio de la página. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/certificaciones" element={<Certificaciones />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
