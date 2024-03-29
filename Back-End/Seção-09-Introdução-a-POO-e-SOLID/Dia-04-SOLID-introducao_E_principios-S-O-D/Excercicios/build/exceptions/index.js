"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.BadRequestError = void 0;
var BadRequest_1 = require("./BadRequest");
Object.defineProperty(exports, "BadRequestError", { enumerable: true, get: function () { return __importDefault(BadRequest_1).default; } });
var NotFound_1 = require("./NotFound");
Object.defineProperty(exports, "NotFound", { enumerable: true, get: function () { return __importDefault(NotFound_1).default; } });
