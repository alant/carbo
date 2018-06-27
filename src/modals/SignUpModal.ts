class SignUpModal extends eui.Panel implements eui.UIComponent {
	public constructor() {
		super();
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
	private signup() {
		console.log("signup " + this.nickname);
	}
	
}