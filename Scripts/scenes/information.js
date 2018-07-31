/*
  Source file name: information.ts,
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
    var Information = /** @class */ (function (_super) {
        __extends(Information, _super);
        // constructors
        function Information() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Information.prototype.Start = function () {
            this._cancelButton = new objects.Button("close", 0, 0, false);
            this._infoLabel = new objects.Label("Space Craft", "60px", "Consolas", "#FF0000", config.Screen.HALF_WIDTH + 30, 90, true);
            this._infoLabel1 = new objects.Label("\n\n\n\n\nDeveloped By:\n\n" +
                "Piyush Sehli: 300984528\n\n" +
                "Game information:\n\n" +
                "This game has a space ship which is on a mission\n\n to destroy the enemy spaceship. While the protector ship \n\nhas to face obstacles like meteors which decreases\n \nthe life cells by 1. The more you destroy the enemy\n\n ship more points you will get.\n\n The player can move the plane with mouse and\n\n fire the bullets by clicking.\n" +
                "\nGuided By:\n\n\nProf. Tom Tsiliopoulos", "15px", "Consolas", "#ffffff", config.Screen.HALF_WIDTH + 30, config.Screen.HALF_HEIGHT, true);
            this._background = new objects.Background();
            this.Main();
        };
        Information.prototype.Update = function () {
            this._background.Update();
        };
        Information.prototype.Reset = function () {
        };
        Information.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Information.prototype.Main = function () {
            console.log("Starting - Information SCENE");
            this.addChild(this._background);
            this.addChild(this._cancelButton);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);
            this._cancelButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                var button = createjs.Sound.play("button");
            }, this);
        };
        return Information;
    }(objects.Scene));
    scenes.Information = Information;
})(scenes || (scenes = {}));
//# sourceMappingURL=information.js.map