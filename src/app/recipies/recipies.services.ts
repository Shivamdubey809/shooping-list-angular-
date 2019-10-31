import {Recipie} from "./recipies.model";


export class RecipieService{

    recipies: Recipie[] = [
        new Recipie("recpie1","this is first recipie","https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
        new Recipie("recpie1","this is first recipie","https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      ]


      getRecipies(){
         return this.recipies.slice();
      }
}



