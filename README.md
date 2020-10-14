# Yelp Search
[Live Demo Available Here](https://determined-hermann-aefa99.netlify.app/)
---

Welcome to Yelp Search, a web application that provides quick and easy access to over 209,000 Yelp Businesses records. Through Yelp Search, users have the ability to search through a subset of business listed on Yelp with the help of Algolia's powerful search engine. The businesses that appear on Yelp Search are automatically ranked and filtered to cater to the results that users are looking for. Aside from business name, users will be able to see business addresses (and even map the location on a Google Map), customer star ratings, business hours (along with a friendly message indicating whether the business is open on the given day or not), facet and filter by business category and/or city, and see all business locations on a larger map that encompasses the locations of all displayed search results. 

Algolia was utilized to refine search results in order to deliver results that users want to see. Many different query rules were set in order to achieve this. Some examples include: 
- injecting query parameters "OutdoorSeating" = True, "RestaurantsTakeout" = True when a search query includes the words "corona" or "covid", and removing these words if so 
- injecting query parameters "BusinessAcceptsCreditCards" = False when a search query includes the words "cash only", and removing these words if so 
- enabling geolocation search when a search query ends with the words "near me" 
The list goes on, and the search results are fine tuned to ensure relevant results are returned! 

Click tracking analytics are also leveraged to achieve the same result, shooting an insights update up to Algolia whenever a business is viewed for more detail as well as when a user looks at the map for an individual business. This data is invaluable in determining which search results are relevant to the user in order to promote them in future searches. Adding such events to the Algolia strategy will allow Yelp Search to promote such results. Ranking and sorting will also incorporate businesses with higher star ratings in the order of search results.

*Before running locally, contact for API Keys!
To run Yelp Search locally: 
1. Clone this repo
2. Install all dependencies by running:
```bash
yarn
```
3. Start the app by running: 
```bash
npm start
```
