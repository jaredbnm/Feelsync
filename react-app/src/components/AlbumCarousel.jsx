import AlbumCard from "./AlbumCard";

function AlbumCarousel({ albums }) {
  const loopAlbums = [...albums, ...albums, ...albums];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-4 animate-scroll w-max">
        {loopAlbums.map((album) => (
          <AlbumCard
            key={`${album.title}-${album.artist}`}
            title={album.title}
            artist={album.artist}
            cover={album.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumCarousel;
