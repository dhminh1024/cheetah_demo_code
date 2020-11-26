import React from "react";
import { Nav } from "react-bootstrap";

const SideMenu = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div>
      <Nav>
        <Nav.Link
          className={!selectedCity ? "active" : ""}
          onClick={() => handleCityChange("current")}
        >
          Current Location
        </Nav.Link>
        {cities.map((city) => (
          <Nav.Link
            className={
              selectedCity && selectedCity.id === city.id ? "active" : ""
            }
            key={city.id}
            onClick={() => handleCityChange(city)}
          >
            {city.name}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default SideMenu;
