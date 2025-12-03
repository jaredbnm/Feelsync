import MoodButton from "./MoodButton";

function MoodGrid({ moods }) {
  return (
    <div
      className="
        grid grid-cols-2 gap-3
        md:flex md:flex-wrap md:justify-center md:gap-4
      "
    >
      {moods.map((mood) => (
        <MoodButton key={mood} label={mood} />
      ))}
    </div>
  );
}

export default MoodGrid;