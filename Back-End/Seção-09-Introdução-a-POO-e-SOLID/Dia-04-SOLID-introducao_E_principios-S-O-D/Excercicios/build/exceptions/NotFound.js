"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("./HttpException"));
class NotFoundError extends HttpException_1.default {
    constructor(message) {
        super(NotFoundError.status, message || 'Not Found');
    }
}
exports.default = NotFoundError;
NotFoundError.status = 404;
;
