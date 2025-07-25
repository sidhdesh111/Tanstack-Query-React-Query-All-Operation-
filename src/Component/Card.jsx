import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, title, body } = data;
  return (
    <div className="card">
    <p className="id">{id}</p>
      <p className="title">{title}</p>
      <p className="para">{body}</p>
      <div className="btn_area">
        <button type="button" className="btn view">
          <Link to={`/fetchrq/${id}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default React.memo(Card);
