/**
 * Created by SPC
 * background view
 */
class BackgroundView extends egret.Sprite {
	public constructor() {
		super();
		this.initView();
	}
	private bg: egret.Bitmap;
	private ft: egret.Bitmap;
    private posX: number;
    private initView() {
		this.bg = this.createBitmapByName("background_mountains_jpg");
        this.addChild(this.bg);
        this.ft = this.createBitmapByName("background_front_png");
        this.addChild(this.ft);
        let stageW = GameConst.SCENT_WIDTH;
        let stageH = GameConst.SCENT_HEIGHT;
        this.bg.height = stageH;
        this.ft.height = stageH;
        this.posX = GameConst.GamePoxX;
        this.ft.x = -this.posX;
        // draw cloud
        const cloud1 = this.createBitmapByName("background_cloud1_png");
        this.addChild(cloud1);
        cloud1.x = 200;
        cloud1.y = 100;
        const cloud2 = this.createBitmapByName("background_cloud2_png");
        this.addChild(cloud2);
        cloud2.x = 500;
        cloud2.y = 150;
        const cloud3 = this.createBitmapByName("background_cloud3_png");
        this.addChild(cloud3);
        cloud3.x = 1200;
        cloud3.y = 130;
        const cloud4 = this.createBitmapByName("background_cloud4_png");
        this.addChild(cloud4);
        cloud4.x = 1600;
        cloud4.y = 200;
		console.log("bg rendered");
    }
    public movebg():void {
        this.posX = -GameConst.GamePoxX;
        egret.Tween.get(this.ft).to({x:this.posX,y:0}, 1000, egret.Ease.sineIn );
        egret.Tween.get(this.bg).to({x:this.posX/2,y:0}, 1000, egret.Ease.sineIn );
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
