import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PetRepository } from './pet.repository';

@Module({
  providers: [PetRepository, PetsService, PetsResolver]
})
export class PetsModule {}
