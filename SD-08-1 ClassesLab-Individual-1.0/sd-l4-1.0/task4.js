export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }  
  infoPlayer(){
  console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
  let newlevel = ++this.level; // Cuando se utiliza (++) antes del operando (++this.level), se llama "prefijo" y devuelve el valor después del incremento.
  console.log(`new level is ${newlevel}`);
  }
}
const myPlayer = new Player("Grog", 4)
console.log(myPlayer.infoPlayer());
console.log(myPlayer.levelUp());
