import React, { useState, useRef, useEffect } from "react";
import "./edit.css";

const EditableForm = ({ index, initialData, onClose }) => {
  // Use the provided initialData or set default values
  const defaultInitialData = {
    title: "Mr.",
    firstName: "",
    lastName: "",
    position: "HR",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInformation: "",
    zipCode: "",
    state: "",
    country: "India",
    email: "",
    checkbox: false,
  };

  // Merge the provided initialData with the default values
  const mergedInitialData = {
    ...defaultInitialData,
    ...initialData,
  };

  const [formData, setFormData] = useState(mergedInitialData);

  const formRef = useRef();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(`formData_${index}`));
    if (savedData) {
      setFormData(savedData);
    }
  }, [index]);

  const handleEvent = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const addItem = (event) => {
    event.preventDefault();

    // Save the updated data to local storage
    localStorage.setItem(`formData_${index}`, JSON.stringify(formData));

    onClose(); // Close the modal

    const formElement = formRef.current;
    formElement.reset();
  };

  return (
    <div className="editable-form">
      <form ref={formRef}>
        <div className="form-group">
          <h1 style={{ color: "blue" }}>General Information</h1>
          <select
            className="form-transparent"
            id="title"
            onChange={handleEvent}
            value={formData.title}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Dr.">Dr.</option>
            <option value="Others">Others</option>
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
                value={formData.firstName}
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
                value={formData.lastName}
              />
            </div>
          </div>
          <select
            className="form-transparent"
            id="position"
            onChange={handleEvent}
            value={formData.position}
          >
            <option value="HR">HR</option>
            <option value="SDE">SDE</option>
            <option value="BDE">BDE</option>
            <option value="Manager">Manager</option>
            <option value="Intern">Intern</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="text"
            className="form-transparent"
            id="company"
            placeholder="Company"
            onChange={handleEvent}
            value={formData.company}
          />
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-transparent"
                id="businessArena"
                placeholder="Business Arena"
                onChange={handleEvent}
                value={formData.businessArena}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-transparent"
                id="employees"
                placeholder="Employees"
                onChange={handleEvent}
                value={formData.employees}
              />
            </div>
          </div>
        </div>
        <h1>Contact Details</h1>
        <input
          type="text"
          className="form-transparent"
          id="street"
          placeholder="Street"
          onChange={handleEvent}
          value={formData.street}
        />
        <input
          type="text"
          className="form-transparent"
          id="additionalInformation"
          placeholder="Landmark"
          onChange={handleEvent}
          value={formData.additionalInformation}
        />
        <input
          type="number"
          className="form-transparent"
          id="zipCode"
          placeholder="Zip code"
          onChange={handleEvent}
          value={formData.zipCode}
        />
        <input
          type="text"
          className="form-transparent"
          id="state"
          placeholder="State"
          onChange={handleEvent}
          value={formData.state}
        />
        <select
          className="form-transparent"
          id="country"
          onChange={handleEvent}
          value={formData.country}
        >
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
        <input
          type="email"
          className="form-transparent"
          id="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}"
          required
          placeholder="Email"
          onChange={handleEvent}
          value={formData.email}
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
