import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const LocationForm = () => {
  const [locationName, setLocationName] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
};

return (
  <form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label htmlFor="locationName">Name of location:</Form.Label>
      <input
        type="text"
        name="name"
        value={location}
        onChange={handleLocationChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="country">Country:</Form.Label>
      <Form.Control as="select" onChange={handleCountryChange}>
      <option key={country.name} value={country.name}></option>
      </Form.Control>
    </Form.Group>
  </form>
);

export default LocationForm;
