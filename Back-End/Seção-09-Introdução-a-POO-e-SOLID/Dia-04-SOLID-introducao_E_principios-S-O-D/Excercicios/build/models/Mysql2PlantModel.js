"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
class Mysql2PlantModel {
    constructor() {
        this.conn = connection_1.default;
    }
    async getAll() {
        const SQL = `SELECT
    id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency FROM plants`;
        const [rows] = await this.conn.execute(SQL);
        const plants = rows;
        return plants;
    }
    ;
    async create(plant) {
        const { breed, size, needsSun, origin, waterFrequency } = plant;
        const SQL = `INSERT INTO plants (breed, needs_sun, origin, size, water_frequency)
    VALUES (?, ?, ?, ?, ?)`;
        const values = [breed, needsSun, origin, size, waterFrequency];
        const [result] = await this.conn.execute(SQL, values);
        const newPlant = {
            id: result.insertId,
            ...plant,
        };
        return newPlant;
    }
    ;
    async getById(id) {
        const SQL = `SELECT 
    id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency
    FROM plants WHERE id: ?`;
        const values = [id];
        const [rows] = await this.conn.execute(SQL, values);
        const plantById = rows;
        if (plantById.length === 0)
            return null;
        return plantById[0];
    }
    ;
    async removeById(id) {
        const SQL = 'DELETE FROM plants WHERE id = ?';
        const values = [id];
        const [{ affectedRows }] = await this.conn.execute(SQL, values);
        return (affectedRows !== 0);
    }
    ;
    async update(plant) {
        const { id, breed, size, needsSun, origin, waterFrequency } = plant;
        const SQL = `UPDATE plants SET breed = ?, needs_sun = ?, origin = ?, size = ?, water_frequency = ?
    WHERE id = ?`;
        const values = [breed, needsSun, origin, size, waterFrequency, id];
        await this.conn.execute(SQL, values);
        return plant;
    }
    ;
}
exports.default = Mysql2PlantModel;
