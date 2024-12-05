const baseEndpoint = 'https://api.tvmaze.com';

const urlConstants = {
  allShows: `${baseEndpoint}/shows`,
  searchShows: `${baseEndpoint}/search/shows?q=`,
  showDetails: `?embed[]=cast&embed[]=episodes&embed[]=seasons`,
};

export default urlConstants;
