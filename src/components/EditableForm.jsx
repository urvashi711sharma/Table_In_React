import React, { useState, useRef } from "react";
import "./edit.css";

const EditableForm = () => {
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

    // You can do something with the formData here
    console.log("Form data:", formData);

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
    <div className="editable-form">
      <form ref={formRef}>
        <div className="form-group">
          <h1 style={{ color: "blue" }}>General Information</h1>
          <select
            type="text"
            className="form-transparent"
            id="title"
            onChange={handleEvent}>
            <option>title</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Dr.</option>
            <option>Others</option>
          </select>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-transparent"
                id="firstName"
                placeholder="First Name"
                required
                onChange={handleEvent}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-transparent"
                id="lastName"
                placeholder="Last Name"
                required
                onChange={handleEvent}
              />
            </div>
          </div>
          <select
            className="form-transparent"
            id="position"
            onChange={handleEvent}>
            <option>position</option>
            <option>HR</option>
            <option>SDE</option>
            <option>BDE</option>
            <option>Manager</option>
            <option>Intern</option>
            <option>Others</option>
          </select>
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
          placeholder="landmark"
          onChange={handleEvent}
        />
            <input
              type="number"
              className="form-transparent"
              id="zipCode"
              placeholder="Zip code"
              onChange={handleEvent}
            />
            <input
              type="text"
              className="form-transparent"
              id="state"
              placeholder="state"
              onChange={handleEvent}
            />
        <select
          className="form-transparent"
          id="country"
          defaultValue="country"
          required
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
          type="email"
          className="form-transparent"
          id="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}"
          required
          placeholder="Email"
          onChange={handleEvent}
        />
        <div className="row">
  <div className="col-6">
    <button
      type="submit"
      className="btn btn-light ps-4 pe-4"
      onClick={(event) => addItem(event)}
    >
      Update
    </button>
  </div>
  <div className="col-6">
    <button type="reset" className="btn btn-light ps-4 pe-4">
      Reset
    </button>
  </div>
</div>

      </form>
    </div>
  );
};

export default EditableForm;
