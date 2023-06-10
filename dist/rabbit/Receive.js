#!/usr/bin/env node

// var amqp = require("amqplib/callback_api");
"use strict";

var _callback_api = _interopRequireDefault(require("amqplib/callback_api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var handleReceive = function handleReceive() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  _callback_api["default"].connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = "hello";
      channel.assertQueue(queue, {
        durable: false
      });
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      channel.consume(queue, function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
        callback(msg.content.toString());
      }, {
        noAck: true
      });
    });
  });
};
module.exports = {
  handleReceive: handleReceive
};