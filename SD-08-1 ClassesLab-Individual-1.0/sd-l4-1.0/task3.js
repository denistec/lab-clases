export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }  
  infoPlayer(){
  console.log(`${this.name} has reached Level ${this.level}!`);
}
}
const myPlayer = new Player("Grog", 4)
console.log(myPlayer.infoPlayer());