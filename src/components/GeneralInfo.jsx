import { useState } from "react";
import "../index.css";
function GeneralInfo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  const handleEdit = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
  };

  return (
    <div className="gn-wrapper">
      <h2 className="gn-title">General Information</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={(event) => handleChange(event)}
        value={formValues.name}
        disabled={isSubmitted}
      />

      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={(event) => handleChange(event)}
        value={formValues.lastName}
        disabled={isSubmitted}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={(event) => handleChange(event)}
        value={formValues.email}
        disabled={isSubmitted}
      />

      <input
        name="number"
        type="tel"
        placeholder="Phone Number"
        onChange={(event) => handleChange(event)}
        value={formValues.number}
        disabled={isSubmitted}
      />
      <div className="gn-buttons">
        <button className="gn-submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        <button className="gn-edit" onClick={(e) => handleEdit(e)}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default GeneralInfo;
