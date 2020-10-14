import algoliasearch from 'algoliasearch';
// For issues with environment variables and API trouble, please contact me
const apiKey = process.env.REACT_APP_ALGOLIA_PUB_SEARCH_KEY
const appID = process.env.REACT_APP_ALGOLIA_APP_ID

const SearchClient = algoliasearch(appID, apiKey);

export default SearchClient;