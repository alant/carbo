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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by SPC
 * farm view
 */
var FarmView = (function (_super) {
    __extends(FarmView, _super);
    function FarmView() {
        var _this = _super.call(this) || this;
        _this.cows = [
            {
                type: "cow_bitcoin_png",
                milk: 79
            },
            {
                type: "cow_ether_png",
                milk: 50
            },
            {
                type: "cow_filecoin_png",
                milk: 79
            },
            {
                type: "cow_own_png",
                milk: 100
            },
            {
                type: "cow_bitcoin_png",
                milk: 10
            }
        ];
        _this.initView();
        return _this;
    }
    FarmView.prototype.initView = function () {
        this.createCows().catch(function (e) {
            console.log(e);
        });
    };
    FarmView.prototype.createCows = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.cows.forEach(function (cow) {
                    _this.createCow(100 + 1600 * Math.random(), 650 + 150 * Math.random(), cow);
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 创建奶牛
     * Create cows
     */
    FarmView.prototype.createCow = function (cowX, cowY, cow) {
        return __awaiter(this, void 0, void 0, function () {
            var bitcow, milkBar, fillColor;
            return __generator(this, function (_a) {
                bitcow = this.createBitmapByName(cow.type);
                this.addChild(bitcow);
                bitcow.width = 350;
                bitcow.height = 250;
                bitcow.x = cowX;
                bitcow.y = cowY;
                milkBar = new egret.Shape();
                milkBar.graphics.beginFill(0xffffff, 1);
                milkBar.graphics.drawRect(cowX + 15, cowY - 50, 320, 30);
                milkBar.graphics.drawCircle(cowX + 15, cowY - 35, 15);
                milkBar.graphics.drawCircle(cowX + 335, cowY - 35, 15);
                milkBar.graphics.endFill();
                fillColor = cow.milk < 100 ? 0x0000ff : 0xff0000;
                milkBar.graphics.beginFill(fillColor, cow.milk / 100);
                milkBar.graphics.drawCircle(cowX + 15, cowY - 35, 15);
                milkBar.graphics.drawRect(cowX + 15, cowY - 50, 320 * cow.milk / 100, 30);
                if (cow.milk === 100) {
                    milkBar.graphics.drawCircle(cowX + 335, cowY - 35, 15);
                }
                milkBar.graphics.endFill();
                this.addChild(milkBar);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    FarmView.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return FarmView;
}(egret.Sprite));
__reflect(FarmView.prototype, "FarmView");
