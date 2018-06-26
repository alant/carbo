var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by SPC
 * game const
 */
var GameConst = (function () {
    function GameConst() {
    }
    GameConst.SCENT_WIDTH = 0;
    GameConst.SCENT_HEIGHT = 0;
    GameConst.GamePoxX = 0;
    return GameConst;
}());
__reflect(GameConst.prototype, "GameConst");
