import Navbar from "../components/Navbar";
import MoodButton from "../components/MoodButton";
import TrackCard from "../components/TrackCard";
import { useParams } from "react-router-dom";
import { playlists } from "../data/playlists";

function Results() {
  const moodLabels = [
    "Happy",
    "Sad",
    "Romantic",
    "Relaxed",
    "Energetic",
    "Hardcore",
  ];
  const moodIds = moodLabels.map((label) => label.toLowerCase());
  const { moodId } = useParams();
  const moodName = moodId
    ? moodId.charAt(0).toUpperCase() + moodId.slice(1)
    : "your";

  // Use local hardcoded playlists when available, otherwise generate simple mock tracks
  const generateMockTracks = (mood, count = 6) =>
    Array.from({ length: count }).map((_, i) => ({
      id: `${mood || "mock"}-${i}`,
      title: `${moodName} Song ${i + 1}`,
      artist: `Artist ${i + 1}`,
      duration: `${3}:${(10 + i).toString().slice(-2)}`,
    }));

  const tracks = moodId
    ? playlists[moodId] && playlists[moodId].length
      ? playlists[moodId]
      : generateMockTracks(moodId)
    : [];

  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center px-4 pt-6 pb-12 md:pt-12">
        <div className="relative w-full">
          <div className="mx-auto flex gap-3 overflow-x-auto px-2 py-2 max-w-full sm:max-w-4xl sm:flex-wrap sm:justify-center no-scrollbar">
            {moodLabels.map((label, index) => (
              <MoodButton key={moodIds[index]} label={label} />
            ))}
          </div>
        </div>

        <section className="mt-6 text-center w-full px-2">
          <h1 className="text-xl text-slate-50 font-semibold md:text-3xl">
            Creating your <span className="font-bold">{moodName}</span>{" "}
            playlist...
          </h1>
        </section>

        <section className="mt-6 mx-auto w-full max-w-4xl rounded-xl bg-slate-500/40 p-4 md:mt-8 md:p-6 flex flex-col min-h-[200px] max-h-[60vh]">
          <div className="space-y-3 md:space-y-4 overflow-y-auto flex-1 no-scrollbar">
            {tracks.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p className="text-center text-sm text-slate-200">
                  No songs found for this mood yet. Try another mood.
                </p>
              </div>
            ) : (
              <div className="w-full space-y-3">
                {tracks.map((track) => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Results;
