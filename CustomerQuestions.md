Question 1:
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George

Response 1:
Hi George,

Hope all is well and thank you for reaching out! You’re off to a great start so let me help to clarify. 

“Records” refer to the individual instance/object in your database. Let’s say you have an e-commerce website to sell iPhone cases. In order to showcase all your products, you’ll likely store the products in database. This database will contain every iPhone case you are selling, thus in this case “record” is synonymous with iPhone case and that record may look something like this:
{
	Brand: Otterbox,
	Color: Black,
	Compatibility: iPhoneX
}.

“Indexing”, at a high level, allows you to optimize the performance of that database by organizing its structure. In other words, by indexing your database, you are able to sort and modify the data. This means in our iPhone case database, we can sort and retrieve items with speed. 

Indexing is actually where Algolia does most of it’s magic, so you wouldn’t need to learn the complex methods and algorithms required to performantly index your database. 

Custom Ranking gives us a peek into the sort of algorithms Algolia uses to index your data and allows you to customize them yourself. In general, you should use them to classify records with core business metrics like popularity or rating, so that these results come up first. 

In our example, if we see that iPhone X cases sell the most, we may see value in setting up a custom rank or “Rule” to put more weight in populating cases with “Compatibility: iPhoneX” before others.

I hope this is helpful and I’d love to learn more about your business and how you can enable Algolia to provide your users with a powerful search experience. 

Thank You, 
Ricky

---
Question 2:
Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt

Response 2:
Hello Matt,

Thank you for reaching out to us, and I am sorry to hear your dissatisfaction in this area. Any feedback is actually good feedback and we appreciate you sharing your concerns! 

While the dashboard UI has changed, the API still gives you the ability to delete an index in a single line of code, thus eliminating the need for extra clicks around the dashboard. To learn more, see the [Index Deletion Documentation](https://www.algolia.com/doc/api-reference/api-methods/delete-index/). 

In the meantime, I will certainly go ahead and share your feedback with our product teams. Please do not hesitate to reach and out and share any additional feedback and concerns.

Thank You,
Ricky


---
Question 3:
Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

Response 3:
Hi Leo!

I’m happy to hear you have begun looking into Algolia! Integrating Algolia’s search will not only help grow your business, but shape it for success in the process. Algolia provides the software and tools to help you implement efficient, flexible, and insightful search on your sites and applications without the need to hire hundreds of developers. Algolia works right out of the box and can enable your website with a powerful search experience in minutes. Should you want to dive deeper and make customizations, you can! Algolia makes it easy to jump in and access our entire API. 
    
    At a high level, the implementation process can be broken down into four steps:
1.	Choose your dataset.
2.	Push your data to Algolia either through the dashboard or in a few lines of code.
3.	Configure the index with searchable attributes, categorical filters, and more.
4.	Build your UI, You can even bring in Algolia’s super easy to use widgets to bootstrap your site in minutes.
	I’m also including some resources below for you to check out, there’s a 45 second overview video and a really awesome interactive tutorial to see how easy Algolia is to set up and see it in action.

[Algolia in 45 Seconds](https://www.youtube.com/watch?v=IYY5RM1sBC0&feature=emb_logo)
[Interactive Tutorial](https://www.algolia.com/doc/onboarding/#/pick-dataset)

I’d love to personalize this experience for you as well, we can hop on a call and we can quickly spin up a solution together, let me know what your thoughts are!

Thank You,
Ricky 

