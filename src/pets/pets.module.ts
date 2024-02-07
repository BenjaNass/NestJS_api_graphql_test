import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PetRepository } from './pet.repository';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';

@Module({
  imports:[ConfigModule, TypeOrmModule.forFeature([Pet])],
  providers: [PetRepository, PetsService, PetsResolver]
})
export class PetsModule {}
