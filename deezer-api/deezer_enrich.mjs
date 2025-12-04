// deezer_enrich.mjs

// 1. If you're on Node 18+, fetch is built-in.
//    If you're on an older Node, first run: npm install node-fetch
//    and then uncomment the next line and use it instead.
// import fetch from "node-fetch";

// 2. PASTE YOUR EXISTING PLAYLISTS OBJECT HERE
//    (copy from src/data/playlists.js, the export const playlists = { ... })

const playlists = {
  happy: [
    { id: 1, title: "Sunday Morning", artist: "Maroon 5", duration: "3:05" },
    { id: 2, title: "Good Days", artist: "SZA", duration: "4:39" },
    { id: 3, title: "Here's Where the Story Ends", artist: "The Sundays", duration: "3:58" },
    { id: 4, title: "Hot Rod", artist: "Dayglow", duration: "3:45" },
    { id: 5, title: "Feather", artist: "Sabrina Carpenter", duration: "3:14" },
    { id: 6, title: "Summer", artist: "Housecall", duration: "3:03" },
    { id: 7, title: "New Light", artist: "John Mayer", duration: "3:05" },
    { id: 8, title: "Still into You", artist: "Paramore", duration: "3:40" },
    { id: 9, title: "Tongue Tied", artist: "GROUPLOVE", duration: "3:39" },
    { id: 10, title: "Honey", artist: "Vacations", duration: "2:20" },
    { id: 11, title: "Italo Disco", artist: "Last Dinosaurs", duration: "3:50" },
    { id: 12, title: "Tek It", artist: "Cafune", duration: "3:30" },
    { id: 13, title: "Sunny Day", artist: "beabadoobee", duration: "2:40" },
    { id: 14, title: "peach eyes", artist: "wave to earth", duration: "3:05" },
  ],
  sad: [
    { id: 1, title: "In A Good Way", artist: "Faye Webster", duration: "3:44" },
    { id: 2, title: "No One Noticed", artist: "The Marías", duration: "3:56" },
    { id: 3, title: "For the First Time", artist: "Mac DeMarco", duration: "3:02" },
    { id: 4, title: "YKWIM?", artist: "Yot Club", duration: "3:33" },
    { id: 5, title: "K.", artist: "Cigarettes After Sex", duration: "3:35" },
    { id: 6, title: "Ease", artist: "Whirr", duration: "3:26" },
    { id: 7, title: "Sparks", artist: "Coldplay", duration: "3:47" },
    { id: 8, title: "Cigarettes out the Window", artist: "TV Girl", duration: "3:19" },
    { id: 9, title: "Fade Into You", artist: "Mazzy Star", duration: "4:55" },
    { id: 10, title: "the way things go", artist: "beabadoobee", duration: "3:08" },
    { id: 11, title: "Blue Hair", artist: "TV Girl", duration: "3:37" },
  ],
  romantic: [
    { id: 1, title: "I ONLY WANT TO BE WITH YOU", artist: "tommy february6", duration: "3:30" },
    { id: 2, title: "Lovefool", artist: "The Cardigans", duration: "3:16" },
    { id: 3, title: "Summertime", artist: "The Sundays", duration: "4:02" },
    { id: 4, title: "Apple Cider", artist: "beabadoobee", duration: "3:20" },
    { id: 5, title: "Sienna", artist: "The Marías", duration: "3:45" },
    { id: 6, title: "Something About You", artist: "Eyedress", duration: "3:10" },
    { id: 7, title: "evening glow", artist: "wave to earth", duration: "3:36" },
    { id: 8, title: "Right Side of My Neck", artist: "Faye Webster", duration: "2:33" },
    { id: 9, title: "Love Belt", artist: "JONGHYUN", duration: "3:31" },
    { id: 10, title: "Easy", artist: "Mac Ayres", duration: "5:14" },
    { id: 11, title: "Get You", artist: "Daniel Caesar", duration: "4:43" },
    { id: 12, title: "Warm", artist: "Dre'es", duration: "4:15" },
    { id: 13, title: "Computer Luv", artist: "Ravyn Lenae", duration: "2:42" },
  ],
  relaxed: [
    { id: 1, title: "Ophelia", artist: "PinkPantheress", duration: "2:55" },
    { id: 2, title: "Coffee", artist: "beabadoobee", duration: "3:15" },
    { id: 3, title: "Lover Is a Day", artist: "Cuco", duration: "3:20" },
    { id: 4, title: "Japanese Denim", artist: "Daniel Caesar", duration: "3:30" },
    { id: 5, title: "Pink + White", artist: "Frank Ocean", duration: "3:04" },
    { id: 6, title: "eternal sunshine", artist: "Ariana Grande", duration: "2:50" },
    { id: 7, title: "Halcyon Age", artist: "Vansire", duration: "3:13" },
    { id: 8, title: "Love You Anyway", artist: "The Marías", duration: "3:57" },
    { id: 9, title: "pink", artist: "wave to earth", duration: "4:27" },
    { id: 10, title: "You Might Be Sleeping", artist: "Jakob, Clairo", duration: "2:27" },
    { id: 11, title: "The Blonde", artist: "TV Girl", duration: "3:47" },
    { id: 12, title: "Kiss of Life", artist: "Sade", duration: "4:11" },
    { id: 13, title: "bonfire", artist: "wave to earth", duration: "4:40" },
    { id: 14, title: "BLEACH", artist: "BROCKHAMPTON", duration: "4:33" },
    { id: 15, title: "Roommates", artist: "Malcolm Todd", duration: "3:34" },
  ],
  energetic: [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: 2, title: "Sugar On My Tongue", artist: "Tyler, The Creator", duration: "3:30" },
    { id: 3, title: "Contact", artist: "Kelela", duration: "4:00" },
    { id: 4, title: "ETA", artist: "NewJeans", duration: "2:31" },
    { id: 5, title: "gun show", artist: "lil hero", duration: "2:38" },
    { id: 6, title: "KEEP UP", artist: "Odetari", duration: "2:13" },
    { id: 7, title: "BREAK MY SOUL", artist: "Beyoncé", duration: "4:38" },
    { id: 8, title: "Club classics", artist: "Charli XCX", duration: "2:33" },
    { id: 9, title: "Image", artist: "Magdalena Bay", duration: "3:32" },
    { id: 10, title: "Girl Like Me", artist: "PinkPantheress", duration: "2:26" },
  ],
  hardcore: [
    { id: 1, title: "R.I.P.", artist: "Playboi Carti", duration: "3:12" },
    { id: 2, title: "Foreign", artist: "Playboi Carti", duration: "2:45" },
    { id: 3, title: "1999 WILDFIRE", artist: "BROCKHAMPTON", duration: "3:50" },
    { id: 4, title: "jeans", artist: "2hollis", duration: "3:01" },
    { id: 5, title: "Me N My Kup", artist: "Ken Carson", duration: "3:54" },
    { id: 6, title: "poster boy", artist: "2hollis", duration: "2:01" },
    { id: 7, title: "tv off", artist: "Kendrick Lamar", duration: "3:41" },
    { id: 8, title: "Rah Tah Tah", artist: "Tyler, The Creator", duration: "2:45" },
    { id: 9, title: "BOOGIE", artist: "BROCKHAMPTON", duration: "3:13" },
    { id: 10, title: "fukumean", artist: "Gunna", duration: "2:05" },
  ],
};

// 3. Deezer fetch helper
async function fetchDeezerPreview(title, artist) {
  const query = `track:"${title}" artist:"${artist}"`;
  const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.data && data.data.length > 0) {
      const track = data.data[0];
      return {
        previewUrl: track.preview || null,
        deezerId: track.id,
        deezerLink: track.link,
      };
    }
  } catch (err) {
    console.error("Deezer error for", title, "-", artist, err);
  }

  return { previewUrl: null, deezerId: null, deezerLink: null };
}

// 4. Enrich all playlists
async function enrichAllPlaylists(playlists) {
  const moods = Object.keys(playlists);
  const enriched = {};

  for (const mood of moods) {
    const tracks = playlists[mood];
    console.log(`Enriching mood: ${mood} (${tracks.length} tracks)`);

    const enrichedTracks = [];
    for (const track of tracks) {
      console.log("  → Searching:", track.title, "-", track.artist);
      const { previewUrl, deezerId, deezerLink } = await fetchDeezerPreview(
        track.title,
        track.artist
      );

      enrichedTracks.push({
        ...track,
        previewUrl,
        deezerId,
        deezerLink,
      });

      // small delay so we don't hammer the API
      await new Promise((r) => setTimeout(r, 350));
    }

    enriched[mood] = enrichedTracks;
  }

  return enriched;
}

// 5. Run and print output you can paste into playlists.js
(async () => {
  const enriched = await enrichAllPlaylists(playlists);
  console.log("\n✅ Done enriching playlists.\n");
  console.log("👉 Paste this into src/data/playlists.js:\n");
  console.log("export const playlists = " + JSON.stringify(enriched, null, 2) + ";");
})();
