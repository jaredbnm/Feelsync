import "./index.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e0e0e] flex items-center justify-center">
      {/* Layered blobs */}
      <div className="blob bg-[rgb(187_210_197)] w-[70vmax] h-[70vmax]" />
      <div className="blob bg-[rgb(83_105_118)] w-[60vmax] h-[60vmax]" style={{ animationDelay: "-4s" }} />
      <div className="blob bg-[rgb(41_46_73)] w-[65vmax] h-[65vmax]" style={{ animationDelay: "-8s" }} />
    </div>
  );
}

export default App;