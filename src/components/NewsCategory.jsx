import React from 'react';

const NewsCategory = ({ setCategory, setCountry }) => {
  return (
    <div className="category-selector">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="gb">UK</option>
        <option value="ca">Canada</option>
      </select>
    </div>
  );
};

export default NewsCategory;
