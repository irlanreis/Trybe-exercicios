import { BadRequestError } from "../../exceptions";
import { INewPlant } from "../../interfaces";

export default class PlantValidate {
  private static validateBreed(breed: string): void {
    if (typeof breed !== 'string') {
      throw new BadRequestError('Attribute "breed" must be string.');
    }
  }

  private static validateNeedSun(needsSun: boolean): void {
    if (typeof needsSun !== 'boolean') {
      throw new BadRequestError('Attribute "needsSun" must be boolean.');
    }
  }

  private static validateOrigin(origin: string): void {
    if (typeof origin !== 'string') {
      throw new BadRequestError('Attribute "origin" must be string.');
    }
  }

  private static validateSize(size: number): void {
    if (typeof size !== 'number') {
      throw new BadRequestError('Attribute "size" must be number.');
    }
  }

  public static validateAttributes(plant: INewPlant): void {
    PlantValidate.validateBreed(plant.breed);
    PlantValidate.validateNeedSun(plant.needsSun);
    PlantValidate.validateOrigin(plant.origin);
    PlantValidate.validateSize(plant.size);
  }
};