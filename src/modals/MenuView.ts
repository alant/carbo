class MenuView extends eui.Component implements  eui.UIComponent {
	public marketplaceBtn:eui.Button;
	public allFarmsBtn:eui.Button;
	public myFarmBtn:eui.Button;
	public gotMilkBtn:eui.Button;
	public shareBtn:eui.Button;
	private main:Main;
	public constructor(main:Main) {
		super();
		this.main = main;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		if(instance == this.marketplaceBtn){
			this.marketplaceBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.main.showMarket,this.main);
		}else if (instance ==this.allFarmsBtn ){
			this.allFarmsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.main.showFarmList,this.main);
		}else if (instance ==this.myFarmBtn ){
			this.myFarmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.main.showFarm,this.main);
		}else if (instance ==this.gotMilkBtn ){
			this.gotMilkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.main.showFarm,this.main);
		}else if (instance ==this.shareBtn ){
			this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.main.showAccount,this.main);
		}
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}