class SignUpModal extends eui.Panel implements eui.UIComponent {
	private web3:any;

	public constructor(web3: any) {
		super();
		this.web3 = web3;
	}
	
	public signupButton: eui.Button;
	public inputNickname: eui.TextInput;
	public nickname: string;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		if(instance == this.signupButton) {
			this.signupButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.signup,this);
		};
		if(instance == this.inputNickname) {
			this.inputNickname.addEventListener(egret.Event.CHANGE,this.onNickChange,this);
		}
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	private onNickChange(e: egret.Event) {
		this.nickname = e.target.text;
	}
	private async signup() {
		const userInfoInstance = await getContractInstance('userInfo');

		const nameBytes = await userInfoInstance.nameOf(web3wrap.eth.defaultAccount);
		const name = web3wrap.toUtf8(nameBytes);

		if (!name) {
			await userInfoInstance.register(this.web3.fromUtf8(this.nickname), 0x0);
		} else {
			// TODO: go to farm view
			GameConst.GameInst.showFarm();
		}
	}
}