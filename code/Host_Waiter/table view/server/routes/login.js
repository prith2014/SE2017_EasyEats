"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.get("/", function (request, response, next) {
    console.log("made it here");
    response.render("server");
});
//# sourceMappingURL=login.js.map