"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonschema_1 = __importDefault(require("jsonschema"));
const signal_1 = require("./model/signal");
const app = (0, express_1.default)();
const port = 8080;
const validator = new jsonschema_1.default.Validator();
;
// temporary solution
const dataBase = [];
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send(dataBase);
});
app.post("/signal", (req, res) => {
    const result = validator.validate(req.body, signal_1.signalOfHumanSchema);
    if (!result.valid) {
        res.send(result.errors);
    }
    res.send("yata");
    dataBase.push(req.body);
    console.log(dataBase);
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map