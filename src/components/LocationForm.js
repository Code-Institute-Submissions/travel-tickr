import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

const LocationForm = () => {
  const [locationName, setLocationName] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch list of countries from Restcountries API
    const fetchCountries = async () => {
      try {
        const response = await axiosReq.get(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response.data);
      } catch (err) {
        console.log("Error fetching countries:", err);
      }
    };
    fetchCountries();
  }, []);

  const handleLocationChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleLocationFormSubmit = async (event) => {
    event.preventDefault();

    // Create a new location
    const newLocation = {
      name: locationName,
      country: selectedCountry,
    };

    try {
      // Save location to Travel Tickr api
      const response = await axiosRes.post("/locations/", newLocation);
      console.log("Location saved successfully", response.data);
    } catch (err) {
      console.error("Error saving location:", err);
    }
  };

  return (
    <form onSubmit={handleLocationFormSubmit}>
      <Form.Group>
        <Form.Label htmlFor="locationName">Name of location:</Form.Label>
        <input
          type="text"
          name="name"
          value={locationName}
          onChange={handleLocationChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="country">Country:</Form.Label>
        <Form.Control as="select" onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </form>
  );
};

export default LocationForm;
