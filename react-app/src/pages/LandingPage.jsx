import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AlbumCarousel from "../components/AlbumCarousel.jsx";

const albums = [
  {
    id: 1,
    title: "Freudian",
    artist: "Daniel Caesar",
    cover: "/albums/freudian.jpg",
  },
  {
    id: 2,
    title: "Beatopia",
    artist: "Beabadoobee",
    cover: "/albums/beatopia.jpg",
  },
  {
    id: 3,
    title: "Submarine",
    artist: "The Marías",
    cover: "/albums/submarine.jpg",
  },
  {
    id: 4,
    title: "Heaven Knows",
    artist: "PinkPantheress",
    cover: "/albums/heaven-knows.jpg",
  },
  {
    id: 5,
    title: "Sob Rock",
    artist: "John Mayer",
    cover: "/albums/sob-rock.jpg",
  },
  { id: 6, title: "Raven", artist: "Kelela", cover: "/albums/raven.jpg" },
];

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center md:items-stretch md:justify-start">
        <main className="flex flex-col items-center justify-center gap-8 w-full -translate-y-17 md:translate-y-0 md:items-stretch md:justify-start">
          <Hero />
          <section className="w-full px-4 md:px-10 flex justify-center md:justify-start">
            <AlbumCarousel albums={albums} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;