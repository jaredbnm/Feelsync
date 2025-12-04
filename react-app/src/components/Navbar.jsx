import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white text-black shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div className="font-bold text-xl tracking-tight">fs</div>
        <ul className="flex items-center gap-4 text-sm font-medium md:gap-8 md:text-base">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer hover:underline"
          >
            home
          </button>
          <button
            onClick={() => navigate("/mood-selection")}
            className="cursor-pointer hover:underline bg-transparent border-none p-0"
          >
            moods
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
