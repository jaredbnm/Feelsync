

import Navbar from "../components/Navbar";
import MoodGrid from "../components/MoodGrid";
import { setMoodColors, resetMoodColors } from "../utils/moodColors";
import { useEffect } from "react";

const moods = [
  "Happy",
  "Sad",
  "Romantic",
  "Relaxed",
  "Energetic",
  "Hardcore",
];

function MoodSelection() {
  useEffect(() => {
    resetMoodColors();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <main className="bg-slate-300/10 rounded-xl m-5 border border-slate-50/50 flex flex-col items-center justify-center -translate-y-10 px-4 py-10 w-full max-w-3xl md:translate-y-0 md:py-20">
        <h1 className="text-4xl text-slate-50 font-extrabold tracking-tight md:text-5xl">
          feelsync
        </h1>
        <p className="mt-3 max-w-xs text-center text-sm font-light text-slate-50 md:mt-4 md:max-w-md md:text-base">
          Choose a mood from below to begin playlist generation.
        </p>
        <section className="mt-10 w-full max-w-md md:max-w-2xl">
          <MoodGrid moods={moods} onMoodSelect={setMoodColors} />
        </section>
        </main>
      </div>
    </div>
  );
}
export default MoodSelection;
