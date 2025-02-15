import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './hello/hi.css';
import { fetchNews } from './utils/fetchNews';
import NewsArticle from './components/NewsArticle';
import LiveNews from './components/LiveNews';
import AajTak from './components/AajTak';
import AbpNews from './components/AbpNews';
import CNBC from './components/CNBC';
import About from "./pages/About";
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('in');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        if (!document.getElementById('google_translate_element').hasChildNodes()) {
          new window.google.translate.TranslateElement(
            { 
              pageLanguage: 'en', 
              includedLanguages: 'hi,en,fr,es,de,ja,zh-CN,ar,it,ru,ko',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE 
            },
            'google_translate_element'
          );
        }
      };
    };

    addGoogleTranslateScript();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <Link to="/" className="clickable-title">
              <h1 className="notranslate" translate="no">Kal Tak</h1>
            </Link>
          </div>

          {/* Google Translate Widget */}
          <div id="google_translate_element"></div>

          <form className="search-bar">
            <input
              type="text"
              placeholder="Search for news..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>

          <div className="country-selector">
            <label>Select Country: </label>
            <select value={country} onChange={handleCountryChange}>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="ca">Canada</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="jp">Japan</option>
            </select>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
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
                    <div className="loading">Loading...</div>
                  ) : (
                    filteredArticles.map((article, index) => (
                      <NewsArticle key={index} article={article} />
                    ))
                  )}
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>Kal Tak © 2025</p>
            <div className="footer-links">
              <Link to="/about" className="clickable-footer">About Us</Link> | 
              <Link to="/privacy-policy" className="clickable-footer">Privacy Policy</Link> | 
              <Link to="/contact" className="clickable-footer">Contact Us</Link>
            </div>
            <div className="social-links">
              <a href="https://x.com/kal_tak24" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://www.instagram.com/kal_tak24/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p>Developed by: PIYUSH TIWADI</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
