#!/usr/bin/env node

// var amqp = require("amqplib/callback_api");
import amqp from "amqplib/callback_api";

const sendMessageJson = (ip, queue, msg, callback = () => {}) => {
  // amqp.connect("amqp://jose:jose@10.10.0.254", function (error0, connection) {
  amqp.connect(`amqp://${ip}`, function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      // var queue = "js-python";
      //   var msg = "Hello World!";

      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));

      callback(200);
      console.log(" [x] Sent %s", JSON.stringify(msg));
    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
};

export default sendMessageJson;
