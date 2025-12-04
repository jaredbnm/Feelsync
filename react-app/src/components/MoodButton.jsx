import { useNavigate } from "react-router-dom";

function MoodButton({ label, onClick }) {
    const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/playlist/${label.toLowerCase()}`)}
      className="
        w-full max-w-xs mx-auto rounded-2xl bg-white/15 px-3 py-2
        text-center text-base font-medium text-white
        border border-white/30
        shadow-sm
        hover:bg-white/25 hover:border-white/60 
        transition transform hover:scale-105 duration-200
        md:w-auto md:px-5 md:py-2.5 md:text-lg
      "
    >
      {label}
    </button>
  );
}

export default MoodButton;
