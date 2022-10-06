'use strict';

const fs = require('fs');
const path = require('path');
const { sequelize, DataTypes } = require('./config/sequelize');

const db = {};
const modelsPath = path.join(__dirname, 'models');

fs
  .readdirSync(modelsPath)
  .forEach(file => {
    const model = require(path.join(modelsPath, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;