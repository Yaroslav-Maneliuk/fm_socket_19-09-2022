const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const config = require("../configs").db[process.env.NODE_ENV || "development"];
const baseName = path.basename(__filename);

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`);

const db = {};
fs.readdirSync(__dirname)
  .filter((file) => file !== baseName && /.js$/i.test(file))
  .forEach((file) => {
    const model = require(path.resolve(__dirname, file));
    db[model.modelName] = model;
  });

module.exports = db;
