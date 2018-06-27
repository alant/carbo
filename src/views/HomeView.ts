/**
 * Created by SPC
 * Home view
 */
class HomeView extends egret.Sprite {
    private instance: any;
    private web3: any;

	public constructor(web3: any) {
		super();
        this.web3 = web3;
		this.initView();
	}
    private initView() {
		const label = new egret.TextField(); 
		label.text = "Welcome to CoinCow"; 
		label.textColor = 0xFFFFFF;
        label.size = 100;
		this.addChild(label);
		label.x = GameConst.SCENT_WIDTH / 2 - 500;
		label.y = GameConst.SCENT_HEIGHT / 2 - 200;
        // add cows
        let cow1 = this.createBitmapByName("cow_bitcoin_png");
		this.addChild(cow1);
		cow1.width = 350;
		cow1.height = 250;
		cow1.x = 60;
		cow1.y = GameConst.SCENT_HEIGHT - 400;

        let cow2 = this.createBitmapByName("cow_lama_png");
		this.addChild(cow2);
		cow2.width = 350;
		cow2.height = 250;
		cow2.x = GameConst.SCENT_WIDTH - 400;
		cow2.y = GameConst.SCENT_HEIGHT - 300;

        // add button
        var button = new eui.Button();
        button.width = 1000;
        button.height = 100;
        button.x = GameConst.SCENT_WIDTH / 2 - 500;
        button.y = GameConst.SCENT_HEIGHT / 2 + 100;
        button.label = "Start Mooring";
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showSignUpModal,this);
    }

    private showSignUpModal() {
        console.log("click");
        const modal = new SignUpModal(this.web3);
        modal.x = GameConst.SCENT_WIDTH / 2 - 570;
        modal.y = GameConst.SCENT_HEIGHT / 2 - 270;
        this.addChild(modal);
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
