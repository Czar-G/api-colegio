"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _package = _interopRequireDefault(require("../package.json"));

var _initialSetup = require("./libs/initialSetup");

var _cursos = _interopRequireDefault(require("./routes/cursos.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _estudiantes = _interopRequireDefault(require("./routes/estudiantes.routes"));

var _profesores = _interopRequireDefault(require("./routes/profesores.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import { json } from 'express/lib/response'
//import routes
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]);
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/cursos', _cursos["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _users["default"]);
app.use('/api/student', _estudiantes["default"]);
app.use('/api/teacher', _profesores["default"]);
var _default = app;
exports["default"] = _default;