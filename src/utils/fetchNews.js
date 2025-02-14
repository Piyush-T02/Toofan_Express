import axios from 'axios';

// Access the environment variable using import.meta.env
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNews = async (country, searchQuery = '') => {
  try {
    const response = await axios.get(
      `https://api.currentsapi.services/v1/latest-news?country=${country}&apiKey=${API_KEY}&page_size=100&keywords=${searchQuery}`
    );
    return response.data.news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
