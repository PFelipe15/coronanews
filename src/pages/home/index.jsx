import React, { useState } from "react";
import { FcSearch, FcViewDetails } from "react-icons/fc";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
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
      "X-RapidAPI-Key": process.env.REACT_APP_KEYAPI,
      "X-RapidAPI-Host": process.env.REACT_APP_HOSTAPI,
    },

    baseURL: process.env.REACT_APP_BASEURL,
  }); // api criação //

  async function hiddenData() {
    const { data } = await api.get();

    setDataCountry(data.response[0]);
    setCases(data.response[0].cases);
    setDeaths(data.response[0].deaths);

    var divHidden = document.querySelector(".div-hidden");
    var divinfosMenu = document.querySelector(".home-infos");
    var countryInformation = document.querySelector(".hidden-information");
    var searchmenu = document.querySelector(".search-menu");
    divHidden.style.display = "flex";
    countryInformation.style.display = "flex";
    searchmenu.style.display = "none";
    divinfosMenu.style.display = "none";
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
              className="searchInput"
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
        <div className="home-infos">
          <div className="infos">
            <h1 className="title">
              O que é o CORONA
              <br /> VIRUS?
            </h1>
            <p className="par-infos">
              Coronavírus (COVID-19) é uma doença infecciosa causada pelo vírus
              <br />
              SARS-CoV-2. A maioria das pessoas que adoece em decorrência da
              <br />
              COVID-19 apresenta sintomas leves a moderados e se recupera sem
              <br />
              tratamento especial. No entanto, algumas desenvolvem um quadro
              grave e precisam de atendimento médico.
              <br />
            </p>
          </div>
        </div>
        <div className="div-hidden">
          <div className="container-search-small">
            <input
              className="search-small"
              type="text"
              name="search"
              id="searchId "
              placeholder="New Country..."
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></input>

            <div className="container-search-icon">
              <button
                id="btn-div"
                className="search-icon"
                onClick={() => {
                  hiddenData();
                }}
              >
                <FcSearch className="icon" size={35} />
              </button>
            </div>
          </div>
          <div className="container-data">
            <ul>
              <li>
                NEW CASES:{" "}
                <span className="red">{cases.new || " Not found "}</span>
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
          <div className="btn-container">
            <a
              href={`https://en.wikipedia.org/wiki/${country}`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="btn-style">
                ABOUT COUNTRY... <FcViewDetails size={28} />{" "}
              </button>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <h1>DEVELOPER FOR PAULO FELIPE</h1>
        <div className="social-icons">
          <ul>
            <li>
              <a
                href="https://github.com/PFelipe15"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub size={35} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/paullofelipe_/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsInstagram size={35} />{" "}
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/paulo-felipe-torres-ara%C3%BAjo-45337723b/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsLinkedin size={35} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
