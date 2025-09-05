import React, { useState } from "react";
import "../styles/Contact.css";
import contactImg from "../assets/Img_Contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  });

  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [showAddress, setShowAddress] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // track successful submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index, value) => {
    const updatedPhones = [...phoneNumbers];
    updatedPhones[index] = value;
    setPhoneNumbers(updatedPhones);
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email Address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (showAddress) {
      if (!formData.address1.trim()) newErrors.address1 = "Address Line 1 is required";
      if (!formData.city.trim()) newErrors.city = "City/Town is required";
      if (!formData.state.trim()) newErrors.state = "State/County is required";
      if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      FullName: formData.fullName,
      EmailAddress: formData.email,
      PhoneNumbers: phoneNumbers.filter((p) => p.trim() !== ""),
      Message: formData.message,
      bIncludeAddressDetails: showAddress,
      AddressDetails: showAddress
        ? {
            AddressLine1: formData.address1,
            AddressLine2: formData.address2,
            CityTown: formData.city,
            StateCounty: formData.state,
            Postcode: formData.postcode,
            Country: formData.country,
          }
        : null,
    };

    try {
      const response = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        alert("Failed to submit: " + JSON.stringify(errData));
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form");
    }
  };

  return (
    <>
  <div className="contact-container">
      <div className="contact-row">
        <div className="contact-left">
          <h1 className="contact-header">Contact Us</h1>
          <p className="contact-desc">
            Fusce efficitur eu purus ac posuere. Nean imperdiet risus dolor,
            nec accumsan velit ornare sit amet.
          </p>

          {submitted ? (
            <div className="success-message">
              <div className="tick">&#10003;</div>
              <h2>YOUR MESSAGE HAS BEEN SENT</h2>
              <p>We will be in contact with you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
            
              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              {phoneNumbers.map((phone, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Phone Number ${String(index + 1).padStart(
                    2,
                    "0"
                  )}${index === 0 ? " (Optional)" : ""}`}
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e.target.value)}
                />
              ))}

              <button type="button" onClick={addPhoneNumber} className="btn-secondary">
                Add new phone number
              </button>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="address"
                  checked={showAddress}
                  onChange={() => setShowAddress(!showAddress)}
                />
                <label htmlFor="address">Add address details</label>
              </div>

              {showAddress && (
                <div className="address-row">
                  {/* Col 1 */}
                  <div className="address-col">
                    <div className="input-group">
                      <input
                        type="text"
                        name="address1"
                        placeholder="Address Line 1"
                        value={formData.address1}
                        onChange={handleChange}
                      />
                      {errors.address1 && <p className="error">{errors.address1}</p>}
                    </div>
                    <div className="form-row">
                      <div className="input-group">
                        <input
                          type="text"
                          name="city"
                          placeholder="City/Town"
                          value={formData.city}
                          onChange={handleChange}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          name="state"
                          placeholder="State/County"
                          value={formData.state}
                          onChange={handleChange}
                        />
                        {errors.state && <p className="error">{errors.state}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="address-col">
                    <input
                      type="text"
                      name="address2"
                      placeholder="Address Line 2"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                    <div className="form-row">
                      <div className="input-group">
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                        />
                        {errors.postcode && <p className="error">{errors.postcode}</p>}
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          name="country"
                          placeholder="Country"
                          value={formData.country}
                          onChange={handleChange}
                        />
                        {errors.country && <p className="error">{errors.country}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Right column */}
        <div className="contact-right">
          <img src={contactImg} alt="Contact illustration" />
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Contact;
