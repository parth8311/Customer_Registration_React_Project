import React from "react";
import PropTypes from "prop-types";

const Message = ({ type, text }) => {
  const getStyle = () => {
    switch (type) {
      case "success":
        return {
          color: "green",
          border: "1px solid green",
          background: "#d4edda",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px 0",
        };
      case "error":
        return {
          color: "red",
          border: "1px solid red",
          background: "#f8d7da",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px 0",
        };
      case "info":
      default:
        return {
          color: "#0c5460",
          border: "1px solid #0c5460",
          background: "#d1ecf1",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px 0",
        };
    }
  };

  if (!text) return null;

  return <div style={getStyle()}>{text}</div>;
};

Message.propTypes = {
  type: PropTypes.oneOf(["success", "error", "info"]),
  text: PropTypes.string,
};

Message.defaultProps = {
  type: "info",
  text: "",
};

export default Message;
