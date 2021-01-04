"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
var port = 3000 || process.env.PORT;
app.get('/api/users/currentUser', function (req, res) {
    res.send("hi there");
});
app.listen(port, function () {
    console.log("app listeniing on " + port);
});
