import MoodButton from "./MoodButton";

function MoodGrid({ moods, onMoodSelect }) {
  return (
    <div
      className="
        grid grid-cols-2 gap-3
        md:flex md:flex-wrap md:justify-center md:gap-1
      "
    >
      {moods.map((mood) => (
        <MoodButton key={mood} label={mood} onClick={onMoodSelect} />
      ))}
    </div>
  );
}

export default MoodGrid;