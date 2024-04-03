// Imports core elements
import React from "react";

// Imports custom elements
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
          outline: "none"
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
