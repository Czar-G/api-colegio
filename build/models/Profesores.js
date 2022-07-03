"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var profesoresSchema = new _mongoose.Schema({
  names: String,
  lastnames: String,
  imgUrl: String,
  dni: {
    type: String,
    unique: true
  },
  edad: Number,
  fechadenacimiento: Date,
  direccion: String,
  numerotelefono: Number,
  email: {
    type: String,
    unique: true
  },
  rango: String,
  active: {
    type: Number,
    "default": 1
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Profesores', profesoresSchema);

exports["default"] = _default;