/**
* Created by SPC
* farm view
*/
class FarmView extends egret.Sprite {
	public constructor() {
		super();
		this.initView();
	}

	private initView() {
		this.createCows().catch(e => {
			console.log(e);
		})
	}
	private cows: Array<Cow> = [
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
			type: "cow_lama_png",
			milk: 100
		},
		{
			type: "cow_bitcoin_png",
			milk: 10
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
		const fillColor = cow.milk < 100 ? 0x0000ff : 0xff0000;
		milkBar.graphics.beginFill( fillColor, cow.milk/100);
		milkBar.graphics.drawCircle(cowX + 15, cowY - 35, 15);
		milkBar.graphics.drawRect( cowX + 15, cowY - 50, 320 * cow.milk / 100, 30 );
		if (cow.milk === 100) {
			milkBar.graphics.drawCircle(cowX + 335, cowY - 35, 15);
		}
		milkBar.graphics.endFill();
		this.addChild(milkBar);
        console.log(`cow number ${cowIndex} created`);
        // bitcow.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {
        //     console.log(`cow got clicked!`);
        // },this);
        bitcow.touchEnabled = true;
        bitcow.addEventListener(egret.TouchEvent.TOUCH_TAP,this.handleCowClick.bind(this, cowIndex),this);
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
    private handleCowClick(cowIndex: number, e: egret.TouchEvent) {
        console.log(`cow ${cowIndex} got clicked!`);
        // console.log(`cow ${cowIndex} got clicked!`);
    }
}
