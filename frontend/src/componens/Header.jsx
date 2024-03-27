import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header
      className="flex items-center justify-center w-full h-12 bg-transparent"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <Link to="/" className="font-bold text-xl">
        Getch
      </Link>
    </header>
  );
}
