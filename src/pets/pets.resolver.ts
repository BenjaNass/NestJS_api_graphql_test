import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Query((returns) => Pet)
  async findPetById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Pet | undefined> {
    return this.petsService.findById(id);
  }

  @Mutation(() => String)
  async deletePetById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<string> {
    return this.petsService.deletePet(id);
  }

  @Mutation(() => String)
  async createPet(
    @Args('id', {type: () => Int }) id: number,
    @Args('name') name: string,
    @Args('type', {nullable: true}) type?: string,
  ): Promise<string> {
    const newPet: Pet = { id, name, type };
    return this.petsService.createPet(newPet);
  }

  @Mutation(()=> String)
  async updatePet(
    @Args('id', {type: () => Int }) id: number,
    @Args('name') name: string,
    @Args('type', {nullable: true}) type?: string,
  ): Promise<string> {
    const update: Pet = { id, name, type };
    return this.petsService.updatePet(update);
  }

  
}
