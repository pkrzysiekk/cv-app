import { useState } from "react";

function EduInfo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
    <div className="ed-wrapper">
      <h2 className="ed-title">Educational experience</h2>
      <input
        type="text"
        placeholder="School Name"
        name="school"
        onChange={(e) => handleChange(e)}
        value={formData.school}
        disabled={isSubmitted}
      />
      <input
        type="text"
        placeholder="Title of study"
        name="title"
        onChange={(e) => handleChange(e)}
        value={formData.title}
        disabled={isSubmitted}
      />
      <input
        type="date"
        placeholder="Date of study"
        name="date"
        onChange={(e) => handleChange(e)}
        value={formData.date}
        disabled={isSubmitted}
      />
      <div className="ed-buttons">
        <button className="ed-submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        <button className="ed-edit" onClick={(e) => handleEdit(e)}>
          Edit
        </button>
      </div>
    </div>
  );
}
export default EduInfo;
