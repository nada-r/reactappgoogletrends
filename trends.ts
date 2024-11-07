import googleTrends from 'google-trends-api';

async function fetchDailyTrends() {
  try {
    const results = await googleTrends.dailyTrends({
      geo: 'US', // Change 'US' to your preferred location code (e.g., 'FR' for France)
    });

    const data = JSON.parse(results);

    console.log('Trending Searches:');
    data.default.trendingSearchesDays.forEach((day: any) => {
      day.trendingSearches.forEach((trend: any) => {
        console.log(`Title: ${trend.title.query}`);
        console.log(`Traffic: ${trend.formattedTraffic}`);
        console.log('Related Queries:', trend.relatedQueries.map((q: any) => q.query).join(', '));
        console.log('---');
      });
    });
  } catch (error) {
    console.error('Error fetching daily trends:', error);
  }
}

fetchDailyTrends();
