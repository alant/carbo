class MenuView extends eui.Component implements  eui.UIComponent {
	public marketplaceBtn:eui.Button;
	public allFarmsBtn:eui.Button;
	public myFarmBtn:eui.Button;
	public myMilkBtn:eui.Button;
	public shareBtn:eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		const main:Main = GameConst.GameInst;
		if(instance == this.marketplaceBtn){
			this.marketplaceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,main.showMarket,main);
		}else if (instance ==this.allFarmsBtn ){
			this.allFarmsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,main.showFarmList,main);
		}else if (instance ==this.myFarmBtn ){
			this.myFarmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,main.showFarm,main);
		}else if (instance ==this.myMilkBtn ){
			this.myMilkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,main.showMyMilk,main);
		}else if (instance ==this.shareBtn ){
			this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,main.showAccount,main);
		}
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}