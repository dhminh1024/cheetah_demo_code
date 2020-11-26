import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import SideMenu from "./components/SideMenu";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = "24a50225c459b3b6b8cafba62baedc58";

const cities = [
  {
    id: 1566083,
    name: "Ho Chi Minh City",
    country: "VN",
    latitude: 10.817141,
    longitude: 106.707954,
  },
  {
    id: 2994540,
    name: "Paris",
    country: "FR",
    latitude: 48.856613,
    longitude: 2.352222,
  },
  {
    id: 5039192,
    name: "New York",
    country: "US",
    latitude: 40.712776,
    longitude: -74.005974,
  },
  {
    id: 4164138,
    name: "Miami",
    country: "US",
    latitude: 25.761681,
    longitude: -80.191788,
  },
  {
    id: 5391959,
    name: "San Francisco",
    country: "US",
    latitude: 37.774929,
    longitude: -122.419418,
  },
  {
    id: 524894,
    name: "Moscow",
    country: "RU",
    latitude: 55.755825,
    longitude: 37.617298,
  },
  {
    id: 1850144,
    name: "Tokyo",
    country: "JP",
    latitude: 35.689487,
    longitude: 139.691711,
  },
  {
    id: 6090785,
    name: "Vancouver",
    country: "CA",
    latitude: 49.28273,
    longitude: -123.120735,
  },
];

function App() {
  const [geoLocation, setGeoLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const url = getUrl();

  function getUrl() {
    if (selectedCity)
      return `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=${API_KEY}`;
    if (geoLocation.longitude && geoLocation.latitude) {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&appid=${API_KEY}`;
    }
    return "";
  }

  console.log("start render app");

  useEffect(() => {
    console.log("start Geo effect");
    const success = (position) => {
      setGeoLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };
    const error = (error) => {
      setGeoLocation({
        latitude: null,
        longitude: null,
        error: error,
      });
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    console.log("Fetch effect");
    if (!url) return;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setSelectedCity(null);
    } else {
      setSelectedCity(city);
    }
    // setGeoLocation({
    //   latitude: city.latitude,
    //   longitude: city.longitude,
    //   error: null,
    // });
  };

  return (
    <>
      <PublicNavbar />
      <Container>
        <Row>
          <Col md={3}>
            <SideMenu
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={selectedCity}
            />
          </Col>
          <Col md={9}>
            <WeatherInfo weather={weather} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
