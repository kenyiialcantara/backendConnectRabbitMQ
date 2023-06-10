"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users");
var router = (0, _express.Router)();
router.get("/user", _users.getUser);
router.post("/user", _users.handleUserCredential);
var _default = router;
exports["default"] = _default;