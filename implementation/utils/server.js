"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initExpressServer = void 0;
var cors = require('cors');
var express = require('express');
var initExpressServer = function (port) {
    var app = express();
    app.use(cors());
    app.use(express.json());
    app.listen(port, function () {
        console.log("".concat(port, ", /chain to get started"));
    });
    return app;
};
exports.initExpressServer = initExpressServer;
