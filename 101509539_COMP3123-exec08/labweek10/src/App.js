import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const nextValue =
      name === "postalCode" ? value.toUpperCase() : value;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : nextValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted({
      email: form.email.trim(),
      fullName: form.fullName.trim(),
      address1: form.address1.trim(),
      city: form.city.trim(),
      province: form.province,
      postalCode: form.postalCode.trim(),
    });

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const canSubmit =
    form.email &&
    form.fullName &&
    form.address1 &&
    form.city &&
    form.province &&
    form.postalCode &&
    form.agree;

  return (
    <div className="App">
      {/* TOP FORM BOX */}
      <div className="form-wrapper">
        <h1 className="form-title">Data Entry Form</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          {/* Row: Email | Name */}
          <div className="row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="fullName">Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="field full">
            <label htmlFor="address1">Address</label>
            <input
              id="address1"
              type="text"
              name="address1"
              placeholder="1234 Main St"
              value={form.address1}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address 2 */}
          <div className="field full">
            <label htmlFor="address2">Address 2</label>
            <input
              id="address2"
              type="text"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={form.address2}
              onChange={handleChange}
            />
          </div>

          {/* City | Province | Postal Code */}
          <div className="row">
            <div className="field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={form.province}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                id="postalCode"
                type="text"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Agree */}
          <div className="agree-row">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">Agree Terms &amp; Condition?</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit-btn"
            disabled={!canSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      {/* BOTTOM RESULT BOX (PART II) */}
      {submitted && (
        <div className="result-wrapper">
          <p>
            <span className="result-label">Email:</span>{" "}
            {submitted.email}
          </p>
          <p>
            <span className="result-label">Full Name:</span>{" "}
            {submitted.fullName}
          </p>
          <p>
            <span className="result-label">Address:</span>{" "}
            {submitted.address1}
          </p>
          <p>
            <span className="result-label">City:</span>{" "}
            {submitted.city}
          </p>
          <p>
            <span className="result-label">Province:</span>{" "}
            {submitted.province}
          </p>
          <p>
            <span className="result-label">Postal Code:</span>{" "}
            {submitted.postalCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
