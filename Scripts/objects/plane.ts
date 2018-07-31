/*
  Source file name: plane.ts, 
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
  export class Plane extends objects.GameObject {
    
    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("plane");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check right boundary
        if(this.x > config.Screen.WIDTH - this.halfWidth ) {
            this.x = config.Screen.WIDTH - this.halfWidth;
        }

        // check left boundary
        if(this.x < this.halfWidth) {
            this.x = this.halfWidth;
        }
    }

    // public methods
    public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this.y = 430;
    }

    public Update(): void {
        this.x = managers.Game.Stage.mouseX;
        this._checkBounds();
    }

    public Reset(): void {}
  }
}
