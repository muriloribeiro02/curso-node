"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    res.send('Olá DEV!');
});
router.post('/teste', (req, res) => {
    console.log(req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json(req.body);
});
