import React from "react";

const Popup = ({ bgcolor, content }) => {
  return (
    <div className="popup" style={{ backgroundColor: bgcolor }}>
      <p>{content}</p>
    </div>
  );
};

export default Popup;
