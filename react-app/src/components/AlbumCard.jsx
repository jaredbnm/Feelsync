function AlbumCard({ title, artist, cover }) {
  return (
    <div className="flex w-28 flex-col items-center md:w-32">
      <div className="h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-md bg-slate-200">
        <img
          src={cover}
          alt={`${title} album cover`}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-2 text-xs font-semibold text-slate-50 md:text-sm text-center">
        {title}
      </p>
      <p className="text-[0.7rem] text-slate-300 md:text-xs text-center">
        {artist}
      </p>
    </div>
  );
}

export default AlbumCard;