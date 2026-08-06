import { Link } from "react-router-dom";

/**
 * Logotipo TIFERROS con imagen JPG
 */
export default function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0" aria-label="TIFERROS — Inicio">
      <img
        src="/LogoTiferros.png"
        alt="TIFERROS Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </Link>
  );
}