const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const Configuration = require('./config');

const app = express();
const port = 8080;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json()); // Parse JSON request body

connectDB();

// Task 1: GET endpoint to take configID and return 2d array
app.get('/api/configurations/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const configuration = await Configuration.findById(id);

    if (configuration) {
      res.json(configuration.data);
    } else {
      res.status(404).json({ error: 'Configuration ID not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
});

// Task 2: PUT endpoint to update remark

app.put('/api/configurations/:id', async (req, res) => {
  const { id } = req.params;
  const { remark } = req.body;

  try {
    const configuration = await Configuration.findById(id);

    if (configuration) {
      configuration.remark = remark;
      await configuration.save();
      res.json({ message: 'success' });
    } else {
      res.status(404).json({ error: 'Configuration ID not found' });
    }
  } catch (error) {
    res.status(500).json({ error: ' Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});