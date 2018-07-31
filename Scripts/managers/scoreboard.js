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
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 390, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.HighScore = 0;
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map