import React from "react";
import PropTypes from "prop-types";

function ScriptCard({ scenario }) {
  return (
    <div className="scripts-page-inputs">
      <h1 className="scripts-page-title">{scenario.title}</h1>

      <h2 className="synopsis">Synopsis</h2>

      <div name="synopsis" id="synopsis">
        {scenario.synopsis}
      </div>
    </div>
  );
}

ScriptCard.propTypes = {
  scenario: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
};
export default ScriptCard;
