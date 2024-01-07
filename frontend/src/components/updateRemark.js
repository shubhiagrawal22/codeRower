
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function UpdateForm({configId}) {
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
        remark
      });
      setMessage(response.data.message);
    } 
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Update Remark</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Remark: </label>
        <textarea 
          placeholder="Enter remark" 
          value={remark} 
          onChange={(e) => setRemark(e.target.value)}
        />
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateForm;
