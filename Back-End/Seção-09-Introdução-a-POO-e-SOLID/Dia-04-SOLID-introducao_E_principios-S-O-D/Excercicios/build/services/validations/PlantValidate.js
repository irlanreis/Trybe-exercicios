"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../../exceptions");
class PlantValidate {
    static validateBreed(breed) {
        if (typeof breed !== 'string') {
            throw new exceptions_1.BadRequestError('Attribute "breed" must be string.');
        }
    }
    static validateNeedSun(needsSun) {
        if (typeof needsSun !== 'boolean') {
            throw new exceptions_1.BadRequestError('Attribute "needsSun" must be boolean.');
        }
    }
    static validateOrigin(origin) {
        if (typeof origin !== 'string') {
            throw new exceptions_1.BadRequestError('Attribute "origin" must be string.');
        }
    }
    static validateSize(size) {
        if (typeof size !== 'number') {
            throw new exceptions_1.BadRequestError('Attribute "size" must be number.');
        }
    }
    static validateAttributes(plant) {
        PlantValidate.validateBreed(plant.breed);
        PlantValidate.validateNeedSun(plant.needsSun);
        PlantValidate.validateOrigin(plant.origin);
        PlantValidate.validateSize(plant.size);
    }
}
exports.default = PlantValidate;
;
