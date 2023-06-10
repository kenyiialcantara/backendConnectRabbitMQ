#!/usr/bin/env node

// var amqp = require("amqplib/callback_api");
import amqp from "amqplib/callback_api";

const handleReceive = (ip, queue, callback = () => {}) => {
  amqp.connect(`amqp://${ip}`, function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      // var queue = "java-js";

      channel.assertQueue(queue, {
        durable: false,
      });

      console.log(
        " [*] Waiting for messages in %s. To exit press CTRL+C",
        queue
      );

      channel.consume(
        queue,
        function (msg) {
          console.log(" [x] Received %s", msg.content.toString());
          callback(msg.content.toString());
        },
        {
          noAck: true,
        }
      );
    });
  });
};

export default handleReceive;
