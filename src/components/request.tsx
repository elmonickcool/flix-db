const key: string = '86f07246c2b21c105c6052fb3a6d83fb';

const Request = {
    requestPopularMovie: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestPopularShow: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    requestTrendingMovie: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestTopRatedMovie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcomingMovie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestDiscoveredMovie:`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc?api_key=${key}`
};

export default Request;
