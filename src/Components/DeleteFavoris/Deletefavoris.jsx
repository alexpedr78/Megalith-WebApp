import React from "react";
import axios from "axios"; // Don't forget to import axios

function Deletefavoris({ id, setSelectedMarker, selectedMarker }) {
  async function handleDeletefav() {
    try {
      const response = await axios.delete(
        `https://project-management-first-try.adaptable.app/favorites/${id}`
      );
      console.log("Favorite deleted successfully!");
    } catch (error) {
      console.log("Error deleting favorite:", error);
    }
  }

  return (
    <button
      onClick={() => {
        handleDeletefav();
        setSelectedMarker(id);
        console.log(selectedMarker);
      }}
    >
      Delete favoris
    </button>
  );
}

export default Deletefavoris;