import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-300/10 rounded-xl w-10/12 border border-slate-50/50 flex flex-col items-center text-center pt-10 pb-5 px-4 md:pt-12 md:pb-5 md:w-2/6">
      <h1 className="text-4xl font-extrabold text-slate-50 tracking-tight md:text-6xl">
        feelsync
      </h1>

      <p className="mt-4 max-w-md text-sm font-light text-slate-50 md:mt-6 md:max-w-xl md:text-lg">
        Feeling something? There’s a song for that. <br/>
        Let feelsync craft a playlist just for you.
      </p>
      

      {/* button navigates to mood selection page */}
      <button
        onClick={() => navigate("/mood-selection")}
        className="mt-8 rounded-2xl border bg-slate-50/20 text-slate-50 border-white/70 px-6 py-2 text-base font-semibold hover:bg-white hover:text-slate-900 transition md:px-8 md:py-3 md:text-lg"
      >
        Get Started
      </button>
    </section>
  );
}

export default Hero;
