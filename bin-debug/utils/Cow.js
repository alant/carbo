var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by SPC
 * data struture of Cow
 */
var Cow = (function () {
    function Cow() {
    }
    return Cow;
}());
__reflect(Cow.prototype, "Cow");
