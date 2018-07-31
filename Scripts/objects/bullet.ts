/*
  Source file name: bullet.ts, 
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

namespace objects {
    export class Bullet extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
  
      /**
       * Creates an instance of Bullet.
       * @memberof Bullet
       */
      constructor() {
        super("bullet");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): boolean {
        if (this.y >= config.Screen.HEIGHT) {
          console.info("bullet" + this.y);
          this.Reset();
          return true;
        }
        return false;
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
  
        this.Reset();
      }
  
      public Update(): boolean {
        this.y -= this._verticalSpeed;
  
        return this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed = 6;
        this.x = 0;
        this.y = 0;
  
        console.info("Reset x and y", this.x, this.y);
      }
    }
  }
  