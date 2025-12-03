function Navbar() {
  return (
    <header className="w-full bg-white text-black shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div className="font-bold text-xl tracking-tight">f</div>
        <ul className="flex items-center gap-4 text-sm font-medium md:gap-8 md:text-base">
          <li className="cursor-pointer hover:underline">home</li>
          <li className="cursor-pointer hover:underline">moods</li>
          <li className="cursor-pointer hover:underline">about</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;