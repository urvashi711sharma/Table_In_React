import React, { useState, useRef } from 'react';

const Form = ({ addData }) => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    businessArena: '',
    employees: '',
    street: '',
    additionalInformation: '',
    zipCode: '',
    state: '',
    country: '',
    email: '',
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

    const newData = { ...formData };
    addData(newData);
    setFormData({
      title: '',
      firstName: '',
      lastName: '',
      position: '',
      company: '',
      businessArena: '',
      employees: '',
      street: '',
      additionalInformation: '',
      zipCode: '',
      state: '',
      country: '',
      email: '',
      checkbox: false,
    });
  };

  return (
      <form ref={formRef}>
      <div className="row">
          <div className="col-lg-6 p-lg-5">
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
          </div>
          <div
            className="col-lg-6 p-lg-5"
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
              placeholder="landmark"
              onChange={handleEvent}
            />
            <div className="row">
              <div className="col-4">
                <input
                  type="number"
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
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              required
              placeholder="Email"
              onChange={handleEvent}
            />
            <input
              type="checkbox"
              className="your-custom-checkbox-class"
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
            <button type="reset" className="btn btn-light ps-4 pe-4">
              Reset
            </button>
          </div>
        </div>
    </form>
  );
};

export default Form;
