/**
* Created by SPC
* farm view
*/
class FarmView extends egret.Sprite {
	public constructor() {
		super();
		this.initView();
	}
	private cowDetail: CowDetailModal;
	private initView() {
		this.createCows().catch(e => {
			console.log(e);
		})
	}
	private cows: Array<Cow> = [
		{
			type: "cow_bitcoin_png",
			milk: 79,
        	totalMilked: 102.0002,
        	totalStolen: 3.0123
		},
		{
			type: "cow_ether_png",
			milk: 50,
			totalMilked: 102.0002,
        	totalStolen: 3.0123
		},
		{
			type: "cow_filecoin_png",
			milk: 79,
			totalMilked: 102.0002,
        	totalStolen: 3.0123
		},
		{
			type: "cow_lama_png",
			milk: 100,
			totalMilked: 102.0002,
        	totalStolen: 3.0123
		},
		{
			type: "cow_bitcoin_png",
			milk: 10,
			totalMilked: 102.0002,
        	totalStolen: 3.0123
		}
	]
	private async createCows() {
		this.cows.forEach((cow, i) => {
			this.createCow(100 + 1600 * Math.random(), 650 + 150 * Math.random(), cow, i);
		});
	}
	/**
	* 创建奶牛
	* Create cows
	*/
	private async createCow(cowX: number, cowY: number, cow: Cow, cowIndex: number) {
		// draw cow
		let bitcow = this.createBitmapByName(cow.type);
		this.addChild(bitcow);
		bitcow.width = 350;
		bitcow.height = 250;
		bitcow.x = cowX;
		bitcow.y = cowY;
		// draw milk bar
		const milkBar:egret.Shape = new egret.Shape();
		milkBar.graphics.beginFill( 0xffffff, 1);
		milkBar.graphics.drawRect( cowX + 15, cowY - 50, 320, 30 );
		milkBar.graphics.drawCircle(cowX + 15, cowY - 35, 15);
		milkBar.graphics.drawCircle(cowX + 335, cowY - 35, 15);
		milkBar.graphics.endFill();
		const fillColor = cow.milk < 100 ? 0xae99cf : 0xec3333;
		milkBar.graphics.beginFill( fillColor, cow.milk/100);
		milkBar.graphics.drawCircle(cowX + 15, cowY - 35, 15);
		milkBar.graphics.drawRect( cowX + 15, cowY - 50, 320 * cow.milk / 100, 30 );
		if (cow.milk === 100) {
			milkBar.graphics.drawCircle(cowX + 335, cowY - 35, 15);
		}
		milkBar.graphics.endFill();
		this.addChild(milkBar);
		// milk bottle
		const milkBottle:egret.Bitmap = this.createBitmapByName("bottle_png");
		this.addChild(milkBottle);
		milkBottle.x = cowX + 320 * cow.milk / 100;
		milkBottle.y = cowY - 60;
		milkBottle.width = 20;
		milkBottle.height = 50;
        console.log(`cow number ${cowIndex} created`);
        // bitcow.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
        //     console.log(`cow got clicked!`);
        // },this);
        bitcow.touchEnabled = true;
        bitcow.addEventListener(egret.TouchEvent.TOUCH_TAP,this.handleCowClick.bind(this, cowIndex, cowX, cowY),this);
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
    private handleCowClick(cowIndex: number, cowX: number, cowY: number, e: egret.TouchEvent) {
        console.log(`cow ${cowIndex} got clicked!`);
		if(this.cowDetail && this.cowDetail.parent) {
			this.removeChild(this.cowDetail);
		}
		const modal = new CowDetailModal(this.cows[cowIndex]);
		modal.x = GameConst.SCENT_WIDTH / 2 - 600;
        modal.y = GameConst.SCENT_HEIGHT / 2 - 440;
		this.cowDetail = modal;
		this.addChild(this.cowDetail);
    }
}
