class CowDetailModal extends eui.Panel implements  eui.UIComponent {
	public constructor(cow:Cow) {
		super();
		this.cowData = cow;
		this.initView();
	}
	private cowData: Cow;

	private initView() {
		// draw cow
		let bitcow = this.createBitmapByName(this.cowData.type);
		this.addChild(bitcow);
		bitcow.width = 350;
		bitcow.height = 250;
		bitcow.x = 50;
		bitcow.y = 50;
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
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