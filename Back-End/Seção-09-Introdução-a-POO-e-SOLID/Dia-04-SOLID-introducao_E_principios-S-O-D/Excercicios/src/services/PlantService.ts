import fs from 'fs/promises';
import path from 'path';
import HttpException from '../exceptions/HttpException';
import { IModel, IOpsInfo } from '../models/interfaces';
import { INewPlant, IPlant } from '../interfaces';
import { IService } from './interfaces';
import PlantValidate from './validations/PlantValidate';
import NotFoundError from '../exceptions/NotFound';

class PlantService implements IService<IPlant, INewPlant>{
  private readonly model: IModel<IPlant>;

  constructor(model: IModel<IPlant>) {
    this.model = model;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.model.getAll();
    return plants;
  };

  public async getById(id: string): Promise<IPlant> {
    const plant = await this.model.getById(id);
    if (!plant) throw new NotFoundError('Plant not Found!')
    return plant;
  };

  public async create(plant: INewPlant): Promise<IPlant> {
    PlantValidate.validateAttributes(plant);

    const { needsSun, size, origin } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brasil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brasil' ? 8 : 7);

    const newPlant = await this.model.create({ ...plant, waterFrequency });
    return newPlant;
  };

  public async update(id: string, plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plantExists = await this.model.getById(id);
    if (!plantExists) throw new NotFoundError('Plant not Found!');

    PlantValidate.validateAttributes(plant);

    const editedPlant = await this.model.update({ id: parseInt(id, 10), ...plant });
    return editedPlant;
  };

  public async removeById(id: string): Promise<void> {
    const isPlantRemoved = await this.model.removeById(id);
    if (!isPlantRemoved) throw new NotFoundError('Plant not Found!');
  };
}

export default PlantService;