/*
  Source file name: ufo.ts, 
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
  export class Ufo extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Ufo.
     * @memberof Ufo
     */
    constructor() {
      super("ufo");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.y = -this.height;
      this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
    }
  }
}
