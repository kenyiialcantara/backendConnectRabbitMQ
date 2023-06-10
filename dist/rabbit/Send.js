#!/usr/bin/env node

// var amqp = require("amqplib/callback_api");
"use strict";

var _callback_api = _interopRequireDefault(require("amqplib/callback_api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var sendMessageJson = function sendMessageJson(msg) {
  _callback_api["default"].connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = "hello";
      //   var msg = "Hello World!";

      channel.assertQueue(queue, {
        durable: false
      });
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
};
module.exports = {
  sendMessageJson: sendMessageJson
};