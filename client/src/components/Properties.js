import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/properties");
      const data = await response.json();
      setProperties(data);
    };
    fetchData();
  }, []);

  if (properties.length < 1) {
    return (
      <>
        <p className="no-properties">No properties found</p>
        <Link to="/add" className="button">
          Add a new property
        </Link>
      </>
    );
  }

  return (
    <>
      <h1>Properties</h1>
      <ul className="property-list">
        {properties.map((property) => {
          return (
            <li className="property" key={property.id}>
              <img src={property.img} alt={property.address} />
              <div className="property-text-container">
                <h2 className="property-title">{property.title}</h2>
                <p className="property-address">{property.address}</p>
                <p className="property-price">{property.askingPrice}</p>
                <p className="property-description">{property.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Properties;
