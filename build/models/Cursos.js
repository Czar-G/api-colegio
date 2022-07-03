"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var cursoSchema = new _mongoose.Schema({
  name: String,
  imgUrl: String,
  active: {
    type: Number,
    "default": 1
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Curso', cursoSchema);

exports["default"] = _default;