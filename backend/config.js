const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  _id: String,
  data: [[String]],
  remark: String,
});

const config = mongoose.model('Configuration', configSchema);

module.exports = config;