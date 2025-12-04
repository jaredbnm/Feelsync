export async function fetchDeezerPreview(title, artist) {
  const query = `track:"${title}" artist:"${artist}"`;
  const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      return data.data[0].preview || null;
    }

    return null;
  } catch (err) {
    console.error("Deezer API error:", err);
    return null;
  }
}