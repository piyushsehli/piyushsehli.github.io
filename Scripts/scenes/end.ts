/*
  Source file name: end.ts, 
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
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
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

            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("play", config.Screen.HALF_WIDTH, 360, true);

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
            console.log(`Starting - END SCENE`);

            this.addChild(this._background);

            this.addChild(this._gameOverLabel);

            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            this.addChild(this._restartButton);

            this._restartButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                let button = createjs.Sound.play("button");
                
                managers.Game.CurrentState = config.Scene.PLAY;

            }, this);
        }
    }
}