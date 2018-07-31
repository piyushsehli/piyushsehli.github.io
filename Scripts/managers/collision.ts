/*
  Source file name: collision.ts, 
  Author’s name: Piyush Sehli, 
  Student Number: 300984528, 
  Last Modified by: Piyush, 
  Date last Modified: 30 July, 2018,
  Program description: The goal of the game is to destroy the space ships of all 
  the enemies by simply clicking the mouse. To maintain their 
  life scores, star ship must avoid collision with the meteors 
  and enemy ships. To gain score, the ship must hover over the circular ship., 
  Revision History:
  Third Commit: Adding sounds

  @piyushsehli
  piyushsehli committed 19 hours ago
  
  Second Commit: Adding an enemy ship

  @piyushsehli
  piyushsehli committed 19 hours ago
  
  First commit: initial stage of game.


*/

namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): number {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
            switch(object2.name) {
                case "ufo":
                let yaySound = createjs.Sound.play("coin");
                yaySound.volume = 0.2;
                managers.Game.ScoreBoard.Score += 100;
                return 1;
                break;

                case "meteor":
                let thunderSound = createjs.Sound.play("explosion");
                thunderSound.volume = 0.2;
                managers.Game.ScoreBoard.Lives -= 1;
                return 1;
                break;
                
                case "bullet":
                let thunderSound2 = createjs.Sound.play("bulletSound");
                thunderSound2.volume = 0.2;
                managers.Game.ScoreBoard.Score +=100;
                return 1;                
                break;

                case "enemy":
                let thunderSound3 = createjs.Sound.play("explosion");
                thunderSound3.volume = 0.2;
                managers.Game.ScoreBoard.Lives -= 1;
                return 1;                
                break;
            }
            return 0;
        }
      }
      else {
          object2.isColliding = false;
          return 0;
      }
    }
  }
}
