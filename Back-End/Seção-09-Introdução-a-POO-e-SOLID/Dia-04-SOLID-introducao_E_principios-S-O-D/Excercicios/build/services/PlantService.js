"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlantValidate_1 = __importDefault(require("./validations/PlantValidate"));
const NotFound_1 = __importDefault(require("../exceptions/NotFound"));
class PlantService {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        const plants = await this.model.getAll();
        return plants;
    }
    ;
    async getById(id) {
        const plant = await this.model.getById(id);
        if (!plant)
            throw new NotFound_1.default('Plant not Found!');
        return plant;
    }
    ;
    async create(plant) {
        PlantValidate_1.default.validateAttributes(plant);
        const { needsSun, size, origin } = plant;
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brasil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brasil' ? 8 : 7);
        const newPlant = await this.model.create({ ...plant, waterFrequency });
        return newPlant;
    }
    ;
    async update(id, plant) {
        const plantExists = await this.model.getById(id);
        if (!plantExists)
            throw new NotFound_1.default('Plant not Found!');
        PlantValidate_1.default.validateAttributes(plant);
        const editedPlant = await this.model.update({ id: parseInt(id, 10), ...plant });
        return editedPlant;
    }
    ;
    async removeById(id) {
        const isPlantRemoved = await this.model.removeById(id);
        if (!isPlantRemoved)
            throw new NotFound_1.default('Plant not Found!');
    }
    ;
}
exports.default = PlantService;
