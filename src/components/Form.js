import React, { useState } from "react";
import "../App.css";

function Form({ onFormSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title !== "" && body !== "") {
      onFormSubmit({
        userId: 1,
        title,
        body,
      });
    }
  };

  return (
    <form className="mt-5 mb-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="form-control"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          className="form-control"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <input className="btn btn-primary" type="submit" value="Add" />
    </form>
  );
}

export default Form;
