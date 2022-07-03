"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var asigSalEstSchema = new _mongoose.Schema({
  estudianteId: [{
    ref: "Estudiantes",
    type: _mongoose.Schema.Types.ObjectId
  }],
  salonId: [{
    ref: "Salon",
    type: _mongoose.Schema.Types.ObjectId
  }],
  active: {
    type: Number,
    "default": 1
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('AsignacionSalonEstudiante', asigSalEstSchema);

exports["default"] = _default;