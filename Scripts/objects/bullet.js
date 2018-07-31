/*
  Source file name: bullet.ts,
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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        /**
         * Creates an instance of Bullet.
         * @memberof Bullet
         */
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
            if (this.y >= config.Screen.HEIGHT) {
                console.info("bullet" + this.y);
                this.Reset();
                return true;
            }
            return false;
        };
        // public methods
        Bullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.y -= this._verticalSpeed;
            return this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            this._verticalSpeed = 6;
            this.x = 0;
            this.y = 0;
            console.info("Reset x and y", this.x, this.y);
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map