import React, { useState } from "react";

function Filter({ tableData }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = tableData.filter(
    (item) =>
      (!selectedFilter || item.position === selectedFilter) &&
      (!selectedCountry || item.country === selectedCountry)
  );

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="search-container">
          <label>Position: </label>
          <select name="search" id="search" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="HR">HR</option>
            <option value="SDE">SDE</option>
            <option value="BDE">BDE</option>
            <option value="Manager">Manager</option>
            <option value="Intern">Intern</option>
          </select>
        </div>
        <div className="search-container">
          <label>Country: </label>
          <select name="country" id="search" onChange={handleCountryChange}>
            <option value="">All</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
            <option value="America">America</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Japan">Japan</option>
            <option value="Russia">Russia</option>
          </select>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>General Information</h1>
      <table style={{ color: "blue" }}>
        <thead>
        <tr>
      <th>s.no.</th>
      <th>Title</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Company</th>
      <th>Business Arena</th>
      <th>Employees</th>
    </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{item.title}</td>
            <td style={{ textAlign: "center" }}>{item.firstName}</td>
            <td style={{ textAlign: "center" }}>{item.lastName}</td>
            <td style={{ textAlign: "center" }}>{item.position}</td>
            <td style={{ textAlign: "center" }}>{item.company}</td>
            <td style={{ textAlign: "center" }}>{item.businessArena}</td>
            <td style={{ textAlign: "center" }}>{item.employees}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filter;
