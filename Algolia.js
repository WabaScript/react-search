import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch('DNHR48MVJQ', '002adb870e1771fb29baa60b60af2758');

const search = instantsearch({
  indexName: 'yelp-businesses-test',
  searchClient,
  routing: true,
});