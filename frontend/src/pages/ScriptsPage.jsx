import React, { useEffect, useState } from "react";
import ScriptCard from "../components/ScriptCard";
import particles from "../assets/img/particles.png";
import useApi from "../services/useApi";

function ScriptsPage() {
  const api = useApi();
  const [scenarioData, setScenarioData] = useState([]);
  useEffect(() => {
    api
      .get("/scenario")
      .then((resp) => {
        setScenarioData(resp.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <div className="scripts-page-container">
      {scenarioData.map((scenario) => {
        return <ScriptCard scenario={scenario} key={scenario.id} />;
      })}
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default ScriptsPage;
