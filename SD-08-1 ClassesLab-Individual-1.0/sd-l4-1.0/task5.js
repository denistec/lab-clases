///● Tarea 5: Experimente con permitir al jugador subir de nivel en función de los puntos de experiencia ganados. ○ Un punto de experiencia es un número. Una subida de nivel debería producirse cuando un jugador gana suficientes puntos de experiencia. ○ Intenta añadir un método que permita a un jugador ganar un número determinado de puntos de experiencia. ○ ¿Cuántos puntos de experiencia deberían dar lugar a una subida de nivel? ¿Cómo puede controlar esta cifra?


export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = parseInt(level);
    this.experience=0;
    this.pointsToLevelUp=10;
  }  
  infoPlayer(){
  console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.level++ ;
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  gainExperience(points){
      this.experience += points;
      if (this.experience >= this.infoPlayer){
      this.levelUp();
      console.log(`${this.name} subió al nivel: ${this.level}!`);
       
      }
  }
}
const myPlayer = new Player("Grog", 4)
myPlayer.infoPlayer();
myPlayer.levelUp();
myPlayer.gainExperience(12);