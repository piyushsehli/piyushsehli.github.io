/*
  Source file name: button.ts, 
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

module objects {
    export class Button extends objects.GameObject {
        // member variables
        public isCentered:boolean;

        // constructors

        /**
         * Creates an instance of Button.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imagePath:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(imagePath);

            this.isCentered = isCentered;

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
        }

        // private methods
        private _MouseOver():void {
            this.alpha = 0.7; // change alpha transparency to 70%
        }

        private _MouseOut():void {
            this.alpha = 1.0; // change alpha transparency to 100%
        }


        // public methods

        /**
         * The Start Method performs object initialization
         * 
         * @returns {void}
         */
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}