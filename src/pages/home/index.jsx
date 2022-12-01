import React from "react";

import "./home.css";

function Home() {
  return (
    <header>
      <div className="menu-header">
        <div className="logo-container">
          <h1 className="logo"> CORONANEWS</h1>
        </div>
        <div className="menu-nav">
          <ul>
            <li>
              <a href="#"> ABOUT US</a>
            </li>

            <li>
              <a href="#"> NEWS</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;
