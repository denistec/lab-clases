export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }  
  infoPlayer(){
  console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
  let newlevel = ++this.level;
  console.log(`new level is ${newlevel}`);
  }
}
const myPlayer = new Player("Grog", 4)
console.log(myPlayer.infoPlayer());
console.log(myPlayer.levelUp());
