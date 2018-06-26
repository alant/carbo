var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by SPC
 * farm list view
 */
var FarmListView = (function (_super) {
    __extends(FarmListView, _super);
    function FarmListView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    FarmListView.prototype.initView = function () {
        var label = new egret.TextField();
        label.text = "Farm List";
        label.textColor = 0x000000;
        label.bold = true;
        label.size = 32;
        this.addChild(label);
        label.x = GameConst.SCENT_WIDTH / 2 - 200;
        label.y = GameConst.SCENT_HEIGHT / 2;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    FarmListView.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return FarmListView;
}(egret.Sprite));
__reflect(FarmListView.prototype, "FarmListView");
