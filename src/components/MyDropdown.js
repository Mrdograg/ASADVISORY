import React from 'react';
import './MyDropdown.css';

function MyDropdown() {
  return (
    <div className="tile-dropdown">
      <div className="tile-column">
        <a href="/BIS" className="tile-link">  BIS REGISTRATION</a>
        <a href="/CRS" className="tile-link">CRS</a>
        <a href="/service3" className="tile-link">Service 3</a>
      </div>
      <div className="tile-column">
        <a href="/service4" className="tile-link">Service 4</a>
        <a href="/service5" className="tile-link">Service 5</a>
        <a href="/service6" className="tile-link">Service 6</a>
      </div>
    </div>
  );
}

export default MyDropdown;
