/*
  Source file name: plane.ts,
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
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Plane.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Plane.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Plane.prototype.Reset = function () { };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map