function TrackCard({ track }) {
  const { title, artist, duration } = track;

  return (
    <div
      className="
        flex items-center gap-3 rounded-md bg-slate-100 text-slate-900
        p-3
        sm:gap-4 sm:p-4
      "
    >
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-slate-300 sm:h-14 sm:w-14" />

      <div className="flex-1">
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <p className="text-xs text-slate-600 sm:text-sm">{artist}</p>
      </div>

      <div className="flex flex-col items-end gap-1 text-xs sm:flex-row sm:items-center sm:gap-4">
        <span className="text-slate-500">{duration}</span>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-slate-300" />

          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
            ►
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
