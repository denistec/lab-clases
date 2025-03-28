export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }  
}
const myPlayer = new Player("Grog", "4")
console.log(myPlayer.level);