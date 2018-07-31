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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._background = new objects.Background();
            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, 160, true);
            this._restartButton = new objects.Button("play", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._background.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._background);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._restartButton);
            this._restartButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                var button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map