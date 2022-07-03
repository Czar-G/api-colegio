"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var salonSchema = new _mongoose.Schema({
  grado: String,
  seccion: String,
  active: {
    type: Number,
    "default": 1
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Salon', salonSchema);

exports["default"] = _default;