const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const itemsRouter = require("../items/items-router.js");
const categoryRouter = require("../categories/categories-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors({ origin: "*" }));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter);
server.use("/api/category", categoryRouter);

server.get("/", (req, res) => {
  res.send(" It's up and Running! ");
});

module.exports = server;
