"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
exports.default = Car;
