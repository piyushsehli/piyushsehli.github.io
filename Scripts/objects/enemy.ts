/*
  Source file name: enemy.ts, 
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
    export class Enemy extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Meteor.
       * @memberof Enemy
       */
      constructor() {
        super("enemy");
  
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
        
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
        this._horizontalSpeed = Math.floor((Math.random() * 4) -2); // between -2 and 2 ppf
        this.y = -this.height;
        this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
      }
    }
  }
  