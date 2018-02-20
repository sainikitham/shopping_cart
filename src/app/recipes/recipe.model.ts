import { Ingrediant } from "../shared/ingrediant.model";

export class Recipe {
   name: String;
   description: String;
   imagePath: String;
   ingrediants: Ingrediant[];
   constructor(name: string, description: string, imagePath: String, ingrediants: Ingrediant[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingrediants = ingrediants;
   }
}
