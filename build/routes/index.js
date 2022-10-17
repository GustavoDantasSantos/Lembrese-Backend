"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.status(200).json({ message: "oie" }).send();
});
exports.default = routes;
