import googleTrends from 'google-trends-api';

async function fetchDailyTrends() {
  try {
    const results = await googleTrends.dailyTrends({
      trendDate: new Date('2024-11-01'),
      geo: 'US',
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
