// NewsArticle.jsx
import React from 'react';

// NewsArticle component with default export
const NewsArticle = ({ article, language }) => {
  const translatedDescription = language === 'hi' ? article.title : article.description;

  return (
    <div className="news-article">
      <h2>{article.title}</h2>
      <p>{translatedDescription}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsArticle;
