import React from "react";
import NoResults from "../assets/no-results.png";
import Asset from "../components/Asset";

// Component displayed when a page is not found
const NotFound = () => {
  return (
    <div className="styles.marginTop">
      <Asset
        src={NoResults}
        message={"Sorry, the page you are looking for doesn't exist"}
      />
    </div>
  );
};

export default NotFound;
