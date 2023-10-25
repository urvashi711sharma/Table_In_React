import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import React, { useState, useRef, useEffect } from "react";

const TableUsingBootstrap2 = () => {
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

  const formRef = useRef();

  const handleEvent = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const addItem = (event) => {
    event.preventDefault();

    // if (
    //   !formData.title ||
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.position ||
    //   !formData.company ||
    //   !formData.businessArena ||
    //   !formData.employees
    // ) {
    //   alert("Enter all details first!");
    //   return;
    // }

    const formElement = formRef.current;
    formElement.reset();

    const newData = { ...formData };
    setData((prevData) => [...prevData, newData]);
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

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const remove = (index) => {
    const newData = data.filter((element, i) => i !== index);
    setData(newData);
  };  

  const removeAll = () => {
    setData([]); // Clear all data
  };

  return (
    <div>
      <form ref={formRef}>
        <div className="row">
          <div className="col-6 p-lg-5">
            <div className="form-group">
              <h1 style={{ color: "blue" }}>General Information</h1>
              <input
                type="text"
                className="form-transparent"
                id="title"
                placeholder="Title"
                onChange={handleEvent}
              />
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-transparent"
                    id="firstName"
                    placeholder="First Name"
                    onChange={handleEvent}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-transparent"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={handleEvent}
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-transparent"
                id="position"
                placeholder="position"
                onChange={handleEvent}
              />

              <input
                type="text"
                className="form-transparent "
                id="company"
                placeholder="company"
                onChange={handleEvent}
              />
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-transparent "
                    id="businessArena"
                    placeholder="business arena"
                    onChange={handleEvent}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-transparent "
                    id="employees"
                    placeholder="employees"
                    onChange={handleEvent}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6 p-lg-5"
            style={{ background: "blue", color: "white" }}>
            <h1>Contact Details</h1>
            <input
              type="text"
              className="form-transparent"
              id="street"
              placeholder="street"
              onChange={handleEvent}
            />
            <input
              type="text"
              className="form-transparent"
              id="additionalInformation"
              placeholder="additional information"
              onChange={handleEvent}
            />
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-transparent"
                  id="zipCode"
                  placeholder="Zip code"
                  onChange={handleEvent}
                />
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-transparent"
                  id="state"
                  placeholder="state"
                  onChange={handleEvent}
                />
              </div>
            </div>
            <select
              className="form-transparent"
              id="country"
              defaultValue="country"
              onChange={handleEvent}>
              <option>
                <input type="text"></input>
              </option>
              <option>country</option>
              <option>India</option>
              <option>Nepal</option>
              <option>Bhutan</option>
              <option>America</option>
              <option>Canada</option>
              <option>China</option>
              <option>Brazil</option>
              <option>Japan</option>
              <option>Russia</option>
            </select>
            <input
              type="text"
              className="form-transparent"
              id="email"
              placeholder="Email"
              onChange={handleEvent}
            />
            <input
              type="checkbox"
              className="form-transparent p-3"
              id="checkbox"
              required
              onChange={handleEvent}
            />
            I do accept the Terms and Conditions of your site.
            <br />
            <button
              type="submit"
              className="btn btn-light m-4"
              onClick={(event) => addItem(event)}>
              Submit
            </button>
          </div>
        </div>
      </form>

      <h1 style={{ textAlign: "center" }}>General Information</h1>
      <table style={{ color: "blue" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Street</th>
            <th>Additional Information</th>
            <th>Zip Code</th>
            <th>State</th>
            <th>Country</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{item.title}</td>
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
                  className="btn btn-danger"
                  onClick={() => remove(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
  <button
    type="button"
    className="btn btn-light"
    onClick={removeAll}>
    Remove All
  </button>
</div>

    </div>
  );
};

export default TableUsingBootstrap2;
