/*
  Source file name: VEc2.ts, 
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
module math {
    export class Vec2 extends createjs.Point {
        // member variables

        // constructors
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }

        // private methods

        // public methods

        /**
         * This method determines the distance between two Vec2 objects and 
         * returns a number in whole pixels
         * 
         * @param P1 
         * @param P2 
         */
        public static Distance(P1:Vec2, P2:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
    }
}