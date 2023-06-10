"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _facturas = _interopRequireDefault(require("./routes/facturas"));
var _products = _interopRequireDefault(require("./routes/products"));
var _users = _interopRequireDefault(require("./routes/users"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

//Settings
app.set("port", 3000);
app.set("views", _path["default"].join(__dirname, "views"));
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
// app.use(urlencoded({ extended: falso })); //Convertir datos que vienen sin formato json

//Routes

app.use(_facturas["default"]);
app.use(_products["default"]);
app.use(_users["default"]);

//Static
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));

// 404 handler
app.use(function (req, res, next) {
  res.status(404).send("404 not found");
});
var _default = app;
exports["default"] = _default;