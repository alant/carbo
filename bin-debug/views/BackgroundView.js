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
 * background view
 */
var BackgroundView = (function (_super) {
    __extends(BackgroundView, _super);
    function BackgroundView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    BackgroundView.prototype.initView = function () {
        this.bg = this.createBitmapByName("bg_jpg");
        this.addChild(this.bg);
        this.ft = this.createBitmapByName("ft_png");
        this.addChild(this.ft);
        var stageW = GameConst.SCENT_WIDTH;
        var stageH = GameConst.SCENT_HEIGHT;
        this.bg.height = stageH;
        this.ft.height = stageH;
        this.posX = GameConst.GamePoxX;
        this.ft.x = -this.posX;
        // draw cloud
        var cloud1 = this.createBitmapByName("cloud_png");
        this.addChild(cloud1);
        cloud1.x = 200;
        cloud1.y = 100;
        var cloud2 = this.createBitmapByName("cloud2_png");
        this.addChild(cloud2);
        cloud2.x = 500;
        cloud2.y = 150;
        var cloud3 = this.createBitmapByName("cloud3_png");
        this.addChild(cloud3);
        cloud3.x = 1200;
        cloud3.y = 130;
        var cloud4 = this.createBitmapByName("cloud4_png");
        this.addChild(cloud4);
        cloud4.x = 1600;
        cloud4.y = 200;
        console.log("bg rendered");
    };
    BackgroundView.prototype.movebg = function () {
        this.posX = -GameConst.GamePoxX;
        egret.Tween.get(this.ft).to({ x: this.posX, y: 0 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this.bg).to({ x: this.posX / 2, y: 0 }, 1000, egret.Ease.sineIn);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    BackgroundView.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return BackgroundView;
}(egret.Sprite));
__reflect(BackgroundView.prototype, "BackgroundView");
