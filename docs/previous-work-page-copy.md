# Previous work page copy

This file preserves the written content from the movie database and asset tracker pages before they were changed to the shared case study layout. Keep it as reference material for future edits.

## Personalized Movies Database

- Live project: https://movie-db-beta.netlify.app/
- GitHub: https://github.com/soe-ag/practice-local-movie-source
- Screenshot: `/images/full-movie.png`

### Overview

This project began with a simple goal: to create a personal database for organizing and tracking my favorite movies and TV series. While IMDb was a great resource, I found its interface overloaded for my specific needs. I wanted something lightweight, and tailored to how I like to manage my watch list and favorites. This version is just the starting point, and I plan to build on it, incorporating additional features as I discover what works best for me.

### Features

- Discover trending movies and explore the latest popular titles.
- Search for movies and TV series with simplicity.
- Track and organize watchlist.
- Save and access favorite titles in one place.

### Stack and explanation

For this project, I chose Nuxt for its server-side rendering (SSR) and straightforward routing, leveraging my Vue experience. I used UnoCSS for styling, as it’s a tool I’m already familiar with from work. Although I started with Firebase, I switched to Supabase because it better suited my needs, offering simpler setup and clearer documentation. Firebase’s setup felt overly complex, requiring separate configurations and SDKs for client and server environments.

### Problems and thought process

I initially used local storage to save data, as I wasn't familiar with Firebase or Supabase. However, as the project grew, I realized I needed access to my data from multiple devices, which local storage couldn’t provide. The first challenge was integrating supabase without disrupting the existing project. After some trial and error, I got everything running smoothly. Originally, I used client-side API calls, but I later refactored the project to incorporate server-side rendering, improving data handling when the page loaded.

### Lessons learned

This project has been a valuable learning experience, especially in building from scratch. I've gained a good understanding of Nuxt, Supabase, and working with API integration. At first, I focused on getting features working quickly with simple code, then went back to refactor it for better reusability and clarity. Since I didn’t start with a clear design, I ended up iterating a lot to improve readability and maintenance. Looking back, having a solid design and structure from the start would have saved time and prevented some frustration! 😄

### Features plan to add later

- Sorting the watchlist and favorites by rating and release year.
- Adding custom filters for views based on criteria like year, rating, or type.
- Improving the UI for a more engaging and visually appealing experience.
- Expanding API calls to fetch additional data, such as top movies of 2024 or the highest-rated films on IMDb.

## Asset Tracker

- Live project: https://asset-tracker-beta.netlify.app/
- GitHub: https://github.com/soe-ag/practice-asset-tracker
- Screenshot: `/images/full-asset.png`

### Overview

I have been using TradingView to track stocks, cryptocurrencies, and indices for personal investing. While it offers extensive tools and features, I wanted a simpler, personalized dashboard to quickly access my favorite assets and customize how I interact with charts. This project is designed to meet that need, starting with the essential features in the first phase. As I continue using it, future updates will add more features based on my evolving needs and how I interact with the platform.

### Features

- View favorite stock price trends on a daily time frame.
- Access various chart types, including volume charts and moving averages (MA).
- Select stocks from a predefined list to view their updated prices.
- Compare selected stock with two default stocks: Apple and Google.
- The Trading View widget is in the footer to check current prices conveniently.

### Stack and explanation

I chose to work with Nuxt.js for this project due to my proficiency with Vue.js and the need to support multiple pages and server-side rendering (SSR) for scalability in the future. Nuxt also simplifies routing, making it efficient for managing navigation between pages. Initially, I used Chart.js, a library I’m familiar with from my workplace. However, I later switched to TradingView's lightweight charts because they are more visually appealing and offer a wider variety of chart types for customization. For the data, I chose Alpha Vantage after researching available options, as it offers an ample free-tier limit of 25 API calls per day, making it the most convenient choice.

### Problems and thought process

At first, I integrated Supabase to fetch data from the API, store it in the database, and retrieve it as needed. However, when the API limit became a constraint, I decided to remove Supabase and directly display the data returned by the API. I designed the dashboard to show different types of charts from a single API call, updating the data only when necessary. Currently, I couldn’t retrieve index fund data, so I postponed implementing a comparison feature between index funds and selected stocks. Since this was my first time using the library, I started with simple configurations and gradually added complexity as I became more familiar with its features.

### Lessons learned

The main lesson I learned is how to effectively use lightweight charts. Similar to my previous projects, I planned and implemented features throughout the development process, which involved many trials and errors. It also taught me the importance of adapting to limitations, such as API call restrictions, and finding creative solutions to overcome them.

### Features plan to add later

- Add a new page for a watchlist table to track selected assets.
- Integrate fundamental data for each asset to provide more detailed insights.
- Implement charts for different time frames to analyze trends over various periods.
- Include a baseline chart within multi-type charts for easier comparison.
- Enhance the comparison functionality to support more detailed asset analysis.
- Add the ability to compare personal investment growth with stock performance.
- Enable comparisons between selected stocks and index funds.
