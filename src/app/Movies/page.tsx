interface Movie {
  title: string;
}

async function getData(): Promise<{ results: Movie[] }> {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=86f07246c2b21c105c6052fb3a6d83fb');
  if (!res.ok) {
    throw new Error('Fetching Failed');
  }
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  try {
    const data = await getData();
    const movieNames = data.results.map((movie: Movie) => movie.title);

    return (
      <div className="container mx-auto mt-5">
        <h1 className="my-3">Popular Movies</h1>
       
        <ul className="flex flex-row">
          {movieNames.map((name: string, index: number) => (
            <li className="ml-5" key={index}>{name}</li>
          ))}
        </ul>
        
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error appropriately, e.g., show an error message
    return <p>Failed to fetch movie data.</p>;
  }
}
