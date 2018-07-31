/*
  Source file name: start.ts, 
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

module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _infoButton: objects.Button;
        private _exitButton: objects.Button;
        private _background: objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._background = new objects.Background();

            this._welcomeLabel = new objects.Label("Space Craft", "70px", "gamefont", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-100, true);
            this._startButton = new objects.Button("play", config.Screen.HALF_WIDTH-115, 320, true);
            this._infoButton = new objects.Button("info", config.Screen.HALF_WIDTH+5, 320, true);
            this._exitButton = new objects.Button("close", config.Screen.HALF_WIDTH+125, 320, true);
            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            this.addChild(this._background);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._infoButton);
            this.addChild(this._exitButton);

            this._startButton.on("click", function(){
                let button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        
            this._infoButton.on("click", function(){
                let button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.INFORMATION;
            }, this);

            this._exitButton.on("click", function(){
                let button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }

    }
}