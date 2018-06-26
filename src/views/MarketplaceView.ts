/**
 * Created by SPC
 * marketPlace view
 */
class MarketplaceView extends egret.Sprite {
	public constructor() {
		super();
		this.initView();
	}
    private initView() {
		const label = new egret.TextField(); 
		label.text = "Welcome to Marketplace"; 
		label.textColor = 0xFFFFFF;
        label.bold = true;
        label.size = 60;
		this.addChild(label);
		label.x = GameConst.SCENT_WIDTH / 2 - 300;
		label.y = GameConst.SCENT_HEIGHT / 2;
    }
	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}