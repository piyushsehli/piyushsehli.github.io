/*
  Source file name: scene.ts,
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
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["PLAY"] = 1] = "PLAY";
        Scene[Scene["END"] = 2] = "END";
        Scene[Scene["INFORMATION"] = 3] = "INFORMATION";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map