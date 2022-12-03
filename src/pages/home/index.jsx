import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import "./home.css";
import axios from "axios";
function Home() {
  const [country, setCountry] = useState("");
  const [dataCountry, setDataCountry] = useState([""]);
  const [cases, setCases] = useState([]);
  const [deaths, setDeaths] = useState([]);

  const api = axios.create({
    params: { country: country },
    headers: {
      "X-RapidAPI-Key": "e5aa03d61fmsh38cb01b57e398c7p1b3d18jsn5e8e160f4d18",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },

    baseURL: " https://covid-193.p.rapidapi.com/statistics",
  }); // api criação //

  async function hiddenData() {
    const { data } = await api.get();

    setDataCountry(data.response[0]);
    setCases(data.response[0].cases);
    setDeaths(data.response[0].deaths);

    var divHidden = document.querySelector(".div-hidden");
    var countryInformation = document.querySelector(".hidden-information");
    var searchmenu = document.querySelector(".search-menu");
    divHidden.style.display = "flex";
    countryInformation.style.display = "flex";
    searchmenu.style.display = "none";
  }

  return (
    <div>
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

      <div className="search-container">
        <div className="hidden-information">
          <div className="country-informations">
            <h1 className="logo">{dataCountry.country}</h1>
            <h2>{dataCountry.continent}</h2>
          </div>
        </div>
        <div className="search-menu">
          <div className="title-container">
            <h1>SEARCH A COUNTRY DATA COVID-19</h1>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              id="searchId "
              placeholder="EX: BRAZIL"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <button
              id="btn-div"
              className="submit"
              onClick={() => {
                hiddenData();
              }}
            >
              <FcSearch className="icon" size={40} />
            </button>
          </div>
        </div>
      </div>

      <main>
        <div className="div-hidden">
          <div className="container-data">
            <ul>
              <li>
                NEW CASES: <span className="red">{cases.new}</span>
              </li>
              <li>
                CASES ACTIVES:: <span className="red">{cases.active}</span>
              </li>
              <li>
                CRITICAL CASES: <span className="red">{cases.critical}</span>
              </li>
              <li>
                RECOVERED: <span className="green">{cases.recovered}</span>
              </li>
            </ul>
          </div>
          <div className="container-data">
            <ul>
              <li>
                POPULATION:{" "}
                <span className="green">{dataCountry.population}</span>
              </li>
              <li>
                TOTAL OF CASES : <span className="red">{cases.total}</span>
              </li>
              <li>
                TOTAL OF DEATH: <span className="red">{deaths.total}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
