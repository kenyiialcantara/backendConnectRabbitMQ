"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _facturas = require("../controllers/facturas");
var router = (0, _express.Router)();
router.get("/facturas", _facturas.getFacturas);
router.post("/facturas", _facturas.saveFactura);
router.get("/facturas/id", _facturas.getFactura);
var _default = router;
exports["default"] = _default;