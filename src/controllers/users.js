import { config } from "../logic/config";
import handleReceive from "../rabbit/Receive";
import sendMessageJson from "../rabbit/Send";

export const getUser = async (req, res) => {
  /**
   * Ajustes de ip
   */
  // sendMessageJson({ email: "kenyi", password: "7rt48", type: "login" }); //signup
  // Conetction rabit
  // res.json({ email: "kenyi", codigo: 0, id: 1857 });
  // res.json({ email: "kenyi", codigo: 1, id: 1857 });
};

export const handleUserCredential = async (req, res) => {
  // Conetction rabit

  console.log("Enviando 🐈 ....", {
    email: req.body.userCredentials.email,
    pass: req.body.userCredentials.password,
    type: req.body.type,
  });

  handleReceive(
    // `${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`,
    `${config.RABBIT_HOST}`,
    "python-js",
    async (response) => {
      await res.json({ status: 200, payload: response });
    }
  );

  sendMessageJson(
    `${config.RABBIT_HOST}`,
    "js-python",
    {
      email: req.body.userCredentials.email,
      pass: req.body.userCredentials.password,
      type: req.body.type,
    },
    (response) => {
      // res.json({ status: response });
      console.log("Enviado correctamente al python");
    }
  );

  // res.json({ status: 200 });
};

export const handleUserCredentialLogout = async (req, res) => {
  // Conetction rabit

  console.log("Enviando 🐈 ....", {
    ...req.body,
  });

  handleReceive(
    // `${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`,
    `${config.RABBIT_HOST}`,
    "python-js",
    async (response) => {
      await res.json({ status: 200 });
    }
  );

  sendMessageJson(
    `${config.RABBIT_HOST}`,
    "js-python",
    {
      ...req.body,
    },
    (response) => {
      // res.json({ status: response });
      console.log("Enviado correctamente al python");
    }
  );

  // res.json({ status: 200 });
};
