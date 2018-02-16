export class Recipe {
   name: String;
   description: String;
   imagePath: String;
   constructor(name: string, description: string, imagePath: String) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
   }
}
