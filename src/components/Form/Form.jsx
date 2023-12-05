/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [link, setLink] = useState("");
  const [imagePreview, setImagePreview] =
    useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, date, image, link });
    setTitle("");
    setDate("");
    setImage(null);
    setImagePreview("");
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titlu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="file-input-container">
        <span className="file-label">
          Alege un fișier
        </span>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <input
        type="text"
        placeholder="associate-link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" />
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
