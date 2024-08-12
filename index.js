"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const Car_1 = __importDefault(require("./Car"));
const myCar = new Car_1.default("Toyota", "Camry", 2023);
myCar.start();
