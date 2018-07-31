/*
  Source file name: label.ts, 
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
    export class Label extends createjs.Text {
        // member variables
        public isCentered:boolean;
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;

        // constructors
        constructor(text:string, fontSize:string, fontFamily:string, fontColour:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(text, fontSize + " " + fontFamily, fontColour);

            this.isCentered = isCentered;

            this._initialize();

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;
        }

        // private methods
        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
        }

        // public methods
        public Start() {

        }

        public Update() {

        }

        public Reset() {

        }
    }
}