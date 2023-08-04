import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";
import { IPlant } from "../interfaces";
import connection from "./connection";
import { IModel } from "./interfaces";

class Mysql2PlantModel implements IModel<IPlant> {
  private conn = connection;

  public async getAll(): Promise<IPlant[]> {
    const SQL = `SELECT
    id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency FROM plants`;
    const [rows] = await this.conn.execute<RowDataPacket[]>(SQL);
    const plants = rows as IPlant[];
    return plants;
  };

  public async create(plant: Omit<IPlant, "id">): Promise<IPlant> {
    const { breed, size, needsSun, origin, waterFrequency } = plant;

    const SQL = `INSERT INTO plants (breed, needs_sun, origin, size, water_frequency)
    VALUES (?, ?, ?, ?, ?)`;
    const values = [breed, needsSun, origin, size, waterFrequency]
    const [result] = await this.conn.execute<ResultSetHeader>(SQL, values);

    const newPlant = {
      id: result.insertId,
      ...plant,
    }
    return newPlant;
  };

  public async getById(id: string): Promise<IPlant | null> {
    const SQL = `SELECT 
    id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency
    FROM plants WHERE id: ?`
    const values = [id];
    const [rows] = await this.conn.execute(SQL, values);

    const plantById = rows as IPlant[];
    if (plantById.length === 0) return null;

    return plantById[0];
  };

  public async removeById(id: string): Promise<boolean> {
    const SQL = 'DELETE FROM plants WHERE id = ?'
    const values = [id]

    const [{ affectedRows }] = await this.conn.execute<OkPacket>(SQL, values);

    return (affectedRows !== 0);
  };

  public async update(plant: IPlant): Promise<IPlant> {
    const { id, breed, size, needsSun, origin, waterFrequency } = plant;

    const SQL = `UPDATE plants SET breed = ?, needs_sun = ?, origin = ?, size = ?, water_frequency = ?
    WHERE id = ?`;

    const values = [breed, needsSun, origin, size, waterFrequency, id];
    await this.conn.execute<OkPacket>(SQL, values);
    
    return plant;
  };
}

export default Mysql2PlantModel;