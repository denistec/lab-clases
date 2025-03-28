export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = parseInt(level);
  }  
  infoPlayer(){
  console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.level++ ;
    console.log(`${this.name} has reached Level ${this.level}!`);
    
  }
}
const myPlayer = new Player("Grog", 4)
myPlayer.infoPlayer();
myPlayer.levelUp();
