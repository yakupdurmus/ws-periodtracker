"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./services/user");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.get("/user", (req, res) => {
    (0, user_1.getUser)((result) => {
        res.send(result);
    });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map