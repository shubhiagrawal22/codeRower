import React, { useState } from "react";
import axios from "axios";
import UpdateForm from "./updateRemark";
import "./style.css";

function ConfigFetch() {
  const [configId, setConfigId] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:8080/api/configurations/${configId}`
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="background">
      <div className="leftSection">
        <div>
            <h1 className="heading">CODEROWER</h1>
        </div>
      </div>
      <div className="rightSection">
        <h2>Fetch Config</h2>
        <form onSubmit={handleSubmit}>
          <label className="label">Config To load(configId) : </label>
          <input
            type="text"
            placeholder="Enter configId"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />

          <UpdateForm configId={configId} />

          <button type="submit" className="button">Fetch Data</button>
        </form>

        {data && (
          <div>
            <h3>Data for {configId}:</h3>
            <pre className="text">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfigFetch;
