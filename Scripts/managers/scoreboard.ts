/*
  Source file name: scoreboard.ts, 
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
module managers {
    export class ScoreBoard {
        // private member variables
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel:objects.Label;

        // public properties

        /**
         * This returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * This returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * This returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }


        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            if(this._lives <= 0) {
                managers.Game.CurrentState = config.Scene.END;
            }
            else {
                this.LivesLabel.text = "Lives: " + this._lives;
            }
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
            if(this._score > this.HighScore) {
                this.HighScore = this._score;
            }
        }

        
        // constructors
        constructor() {
            this.Start();
        }

        // private methods

        // public methods
        public Start() {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 390, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            
            this.HighScore = 0;
            this.Reset();
        }

        public Reset() {
            this.Lives = 5;
            this.Score = 0;
        }
    }
}