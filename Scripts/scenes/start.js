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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._background = new objects.Background();
            this._welcomeLabel = new objects.Label("Space Craft", "70px", "gamefont", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 100, true);
            this._startButton = new objects.Button("play", config.Screen.HALF_WIDTH - 115, 320, true);
            this._infoButton = new objects.Button("info", config.Screen.HALF_WIDTH + 5, 320, true);
            this._exitButton = new objects.Button("close", config.Screen.HALF_WIDTH + 125, 320, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._background.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._infoButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                var button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._infoButton.on("click", function () {
                var button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.INFORMATION;
            }, this);
            this._exitButton.on("click", function () {
                var button = createjs.Sound.play("button");
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map