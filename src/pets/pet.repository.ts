import { NotFoundException } from '@nestjs/common';
import { Pet } from './pet.entity';
import { readFileSync, writeFileSync } from 'fs';

export class PetRepository {
  private pets: Pet[];
  private filename: string;

  constructor() {
    this.filename = 'src/pets.json';
    this.pets = [];
    this.loadPetsFromFile();
  }

  private loadPetsFromFile() {
    try {
      const data = readFileSync('src/pets.json', 'utf-8');
      this.pets = JSON.parse(data);
    } catch (error) {
      console.error('Error reading pets from file:', error);
      this.pets = [];
    }
  }

  findAll(): Pet[] {
    return this.pets;
  }

  findById(id: number): Pet | undefined {
    return this.pets.find((pet) => pet.id === id);
  }

  deletePet(id: number): string {
    let index = this.pets.find((item) => item.id == id);
    if (!index) {
      throw new NotFoundException(`Item with ${id} not found`);
    }
    this.pets.splice(index.id-1, 1);
    writeFileSync(this.filename, JSON.stringify(this.pets));
    return `User with ID ${id} deleted successfully!`;
  }

  createPet(newPet: any): string {
    this.pets.push(newPet);
    this.pets.sort((a: Pet, b: Pet) => a.id - b.id);
    writeFileSync(this.filename, JSON.stringify(this.pets));
    return 'Pet created successfully';
  }

  updatePet(updatedPet: Pet): string {
    const petIndex = this.pets.findIndex((pet) => pet.id === updatedPet.id);
    if (petIndex === -1) {
      throw new NotFoundException(`Pet with ID ${updatedPet.id} not found`);
    }
    this.pets[petIndex] = updatedPet; 
    writeFileSync(this.filename, JSON.stringify(this.pets));
    return `Pet with ID ${updatedPet.id} updated successfully`;
  }

}
