#### Project Outline, Intent, and Feedback
---
Algolia is a powerful, hosted search engine capable of delivering real-time results from the first keystroke fast. This assignment was a terrific way to take a hands-on approach to learning the product and truly understand just how powerful it is. Search could be boiled down into two components: unique content and end users with intent. The faster and more effectively these two pieces are connected, the better the overall experience. Algolia is all about speed. Seriously. Hundreds of thousands of records can be searched in milliseconds. If that wasn’t cool enough, setting up that search box can be done in just minutes with less than 20 lines of code. Algolia enables users to turn the search experience into a feedback loop where collecting insights, data, and analytics on searches in turn lets users find fine-tuned results much quicker and even discover new content along the way. 

My vision for this project was to create a simple yet powerful search experience by using Algolia’s unique customization techniques. I also wanted to incorporate a large volume of real data. Some of Algolia’s features that I utilized in this project and stuck out to me are:
<br>
>•	Facets to categorically refine results.<br>
>•	Click tracking and analytics.<br>
>•	Geo-location features.<br>
>•	Rules to optimize search results (ex. “burgers and sports” can trigger the addition of extra query parameters under the hood to find restaurants with a TV).<br>


I sought to keep my tech stack lightweight and simple to match the nature of the UI, which would feature a big search bar for users to seek and interact with search results. I began by using a single page JavaScript application but ultimately converted it to a React application in order to keep my stack technologically current and enhance the user experience thanks to the many libraries that could be pulled in to work seamlessly with the framework. Throughout this outline I will share insights into my vision, challenges faced, points of improvement, and general feedback. 



##### My process unfolded into the following steps: 

1.	Choosing the right dataset 

I love to eat, so the Yelp public API was a natural choice for a large and robust dataset. I learned, however, that the dataset contains more than just restaurants. It included shops, small businesses, offices, and more. Additionally it provides a ton of useful data about each business that I was able to leverage to power Algolia’s features. Categories and Cities could be used to create refinement lists, lengthy sets of business attributes can be used to craft query relevant parameters, reviews and star counts could be incorporated into the tie-breaking algorithm, and location details can be utilized for user interactivity. 

2.	Preparing and uploading the data

Upon downloading Yelp’s public academic dataset, I learned just how massive this API was. Over 209,000 records are available. Perfect, time to put Algolia to the test! I chose to utilize the dashboard to upload my index in order to familiarize myself with the product’s interface that most users will use to configure Algolia. Since data can only be uploaded in 50mb chunks, I segmented the 160mb dataset across four files. Algolia proved its speed once again, as all 209,000 records were both uploaded and indexed in seconds! After having some fun in the dashboard, I realized that some attributes needed to be cleaned and reformatted. Firstly, category keys were stored as one long string instead of a list. Secondly, Algolia’s geolocation capabilities required a specific format that the dataset did not follow. In order to facet properly by category and utilize geolocation, I wrote my very first Python script to do the conversion on all 209,000 records in place. Uploading the updated data was a breeze, even with the extra few mb of data that the conversion added to my files. 

3.	Utilizing the Algolia dashboard 

Time for the fun stuff! After reading the extensive documentation and watching a few product demo videos, I was excited to jump into the dashboard and play with all of the cool features of Algolia. I was able to see all records in just 2ms and easily visualize the different data points across the index. I paid close attention to how to reach specific feature configuration through the dashboard and noted each to be used when it came to actually enable these features. 

4.	Enabling features that would enhance search capabilities

•	Ranking and sorting: this is where Algolia creates the tie breaking algorithm for search results, detecting typos and word distances for increased fault tolerance (inevitable since users are human, so this is awesome!). Additionally, since the search was configured to focus on businesses closet to the user, “geo” displays closest results first and makes the content more actionable by the searcher. I also chose to sort on the star ranking attribute, displaying higher rated businesses before lower ranked ones. 
<br>
<br>
•	Query rules: rules are an awesome way to fine tune the search query and provide relevant results by injecting parameters, removing search terms, and promoting results. I used rules to hone in on buzzwords contained in the search query to add filter parameters to the search. Some examples are queries ending with “near me” would push results closest the user’s location based on IP address, queries containing “cash only” to filter for the BusinessAcceptsCreditCards attribute being true, and queries containing “sports” to filter for businesses that have a TV. These are only a few of the rules I configured to make the search extremely relevant.
<br>
<br>
•	Personalization and click analytics: an extremely powerful tool to continue feeding into Algolia’s algorithm is which result a user clicked on and where it appeared on the screen. I enabled click tracking for different portions of each result, and included it in the Algolia strategy. Some of the events included viewing a business or mapping business location.
<br>
<br>
•	Miscellaneous features, including query suggestions by category and pagination. 
<br>
<br>
5.	Bringing it all together in the UI! 

This step proved to be really fun as well as my experience with Algolia was great. The documentation is extremely thorough and makes it very easy to get started. After completing the interactive tutorial, I was able to spin up my own version quickly and get to testing in no time. 


While my overall experience with Algolia was really good, there are some points of improvement. Getting into the documentation on a more granular level presented some confusion in areas like creating a custom hits component and connecting click insights to it, I found myself utilizing three different documentation pages scattered around. The dashboard was great and provided a smooth experience, but occasional errors came forward in the dashboard such as not being able to save preview configurations without descriptive error messages to fix the issue. Additionally, for manual file uploads, the ability to see a list of previously uploaded files could be beneficial when working with large datasets. 

In conclusion, I am pleased with the interface I was able to put together in the short time that I had to experiment. I enjoyed Algolia’s ease of use and its smooth integration with so many different technology stacks, speaking to its versatility. Some additional features I would have loved to utilize given some more time and users are A/B testing and acting on the valuable click data collected a bit more. I look forward to continue expanding my knowledge of Algolia and its product!
