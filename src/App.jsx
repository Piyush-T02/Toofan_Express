import React, { useEffect, useState } from 'react';
import './hello/hi.css';
import { fetchNews } from './utils/fetchNews';
import NewsArticle from './components/NewsArticle';
import LiveNews from './components/LiveNews';
import AajTak from './components/AajTak';
import AbpNews from './components/AbpNews';
import CNBC from './components/CNBC';

function App() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('in');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('en');  // Language state (English by default)

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const news = await fetchNews(country, searchQuery);
      setArticles(news);
      setIsLoading(false);
    };

    getNews();
  }, [country, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(searchQuery);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const translations = {
    en: {
      title: 'Toofaan Express',
      searchPlaceholder: 'Search for news...',
      loading: 'Loading...',
      footerText: 'Toofaan Express © 2025',
      contactText: 'Developed by : PIYUSH TIWARI',
    },
  };

  // Filter articles based on search query
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <h1>{translations[language].title}</h1>
        </div>
        {/* Google Translate Widget */}
        <div id="google_translate_element"></div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>

        {/* Country Selector */}
        <div className="country-selector">
          <select onChange={handleCountryChange} value={country}>
            <option value="us">USA</option>
            <option value="in">India</option>
            <option value="ca">Canada</option>
            <option value="gb">UK</option>
            <option value="au">Australia</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Language Selector */}
        
      </header>

      <h2 className='h2'>Live News</h2>
      <div className="video-container">
        <div className="video-grid">
          <div className="video-item"><LiveNews /></div>
          <div className="video-item"><AajTak /></div>
          <div className="video-item"><AbpNews /></div>
          <div className="video-item"><CNBC /></div>
        </div>
      </div>

      <div className="main-content">
        <div className="news-container">
          {isLoading ? (
            <div className="loading">{translations[language].loading}</div>
          ) : (
            filteredArticles.map((article, index) => (
              <NewsArticle key={index} article={article} language={language} />
            ))
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>{translations[language].footerText}</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <p>{translations[language].contactText}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
