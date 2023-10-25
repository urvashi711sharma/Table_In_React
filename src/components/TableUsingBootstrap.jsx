import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import Filter from "./filter";
import App from "./edit";
import Form from "./Form";

const TableUsingBootstrap = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInformation: "",
    zipCode: "",
    state: "",
    country: "",
    email: "",
    checkbox: false,
  });

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const removeall = (e) => {
    e.preventDefault();
    setData([]);
  };

  const handleRemove = (index) => {
    const newdata = [...data];
    newdata.splice(index, 1);
    setData(newdata);
  };

  const handleEdit = (index) => {
    // Implement your edit logic here
  };

  const formRef = useRef();

  const handleEvent = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const addItem = (event) => {
    event.preventDefault();

    const formElement = formRef.current;
    formElement.reset();

    const newData = { ...formData };
    setData([...data, newData]);
    console.log("Data", data);
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
      position: "",
      company: "",
      businessArena: "",
      employees: "",
      street: "",
      additionalInformation: "",
      zipCode: "",
      state: "",
      country: "",
      email: "",
      checkbox: false,
    });
  };

  return (
    <div>
      <Form addData={addData} />

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
          {data.map((item, index) => (
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

      <h1 style={{ textAlign: "center" }}>Contact Details</h1>
      <table style={{ color: "blue" }}>
        <thead>
          <tr>
            <th>s.no.</th>
            <th>First Name</th>
            <th>Street</th>
            <th>Landmark</th>
            <th>Zip Code</th>
            <th>State</th>
            <th>Country</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{index + 1}</td>
              <td style={{ textAlign: "center" }}>{item.firstName}</td>
              <td style={{ textAlign: "center" }}>{item.street}</td>
              <td style={{ textAlign: "center" }}>
                {item.additionalInformation}
              </td>
              <td style={{ textAlign: "center" }}>{item.zipCode}</td>
              <td style={{ textAlign: "center" }}>{item.state}</td>
              <td style={{ textAlign: "center" }}>{item.country}</td>
              <td style={{ textAlign: "center" }}>{item.email}</td>
              <td>
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-danger"
                  onClick={() => handleRemove(index)}>
                  Remove
                </button>
                {/* <button
                  type="button"
                  style={{width:"100%"}}
                  className="btn btn-primary"
                  onClick={() => handleEdit(index)}
                  >
                  edit
                </button> */}
                <App/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-lg btn-outline-primary"
          onClick={removeall}>
          Remove All
        </button>
      </div>
      <Filter tableData={data} />
    </div>
  );
};

export default TableUsingBootstrap;
