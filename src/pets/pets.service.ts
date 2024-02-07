import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetsService {
  private readonly petRepository: PetRepository;

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  findAll(): Pet[] {
    return this.petRepository.findAll();
  }
  findById(id: number): Pet | undefined {
    return this.petRepository.findById(id);
  }
  deletePet(id: number): string {
    return this.petRepository.deletePet(id);
  }

  createPet(pet: Pet): string {
    return this.petRepository.createPet(pet);
  }

  updatePet(pet: Pet): string {
    return this.petRepository.updatePet(pet);
  }
}
