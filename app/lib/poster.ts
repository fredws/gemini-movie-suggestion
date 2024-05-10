export async function fetchPoster(title: string, retry = 3) {
  title = urlTitle(title);
  const poster: string = await fetch("https://www.omdbapi.com/?apikey=c9eb1bb2&t=" + title)
    .then((response) => response.json())
    .then((data) => {
      if (data.Poster) return(data.Poster);
      if (retry > 0) return fetchPoster(urlSubtitle(title), retry - 1);
      return '';
    })
    .catch((error) => console.log("\n\nerror: " + error));

  return(poster);
}

function urlTitle(title: string) {
  return title.replace(/\s/g, '-').replace(/\:/g, '');
}

function urlSubtitle(title: string) {
  return title.replace(/\w+/, '');
}