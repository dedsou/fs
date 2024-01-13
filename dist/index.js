"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const config_json_1 = __importDefault(require("../config.json"));
const client = new client_1.MirrorClient({ checkUpdate: false });
client.start();
client.login(process.env['T']);
//...Discord Bot Code Above ^^

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})