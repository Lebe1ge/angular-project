interface Api {
    apiKey: string;
    query: {};
}

export const API: Api = {
    apiKey: '2155d84f11f1',
    query: {
      search: 'https://api.betaseries.com/search/all',
      get: {
        serie: 'https://api.betaseries.com/shows/display',
        episodes: 'https://api.betaseries.com/episodes/display',
      }
    }
};
