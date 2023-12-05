/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";
const Card = ({ card, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(
    card.title
  );
  const [newLink, setNewLink] = useState(
    card.link
  );

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(card, {
      title: newTitle,
      link: newLink,
    });
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(card);
  };

  const openLink = () => {
    window.open(card.link, "_blank");
  };

  return (
    <div className="card">
      <img
        className="card-image"
        src={card.image}
        alt={card.title}
      />
      {editing ? (
        <div>
          <input
            type="text"
            placeholder="New title"
            value={newTitle}
            onChange={(e) =>
              setNewTitle(e.target.value)
            }
          />
          <input
            type="text"
            placeholder="New link"
            value={newLink}
            onChange={(e) =>
              setNewLink(e.target.value)
            }
            style={{ margin: "10px" }}
          />
          <button
            className="card-button"
            style={{
              backgroundColor: "#007bff",
              color: "white",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="card-details">
          <div className="card-info">
            <h3> {card.title}</h3>
            <p>{card.date}</p>
          </div>
          <div className="card-buttons">
            <button
              className="card-button"
              onClick={openLink}
            >
              <box-icon name="link-external"></box-icon>
            </button>
            <button
              className="card-button"
              onClick={handleEdit}
            >
              <box-icon name="edit"></box-icon>
            </button>
            <button
              className="card-button"
              onClick={handleDelete}
            >
              <box-icon name="trash"></box-icon>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
