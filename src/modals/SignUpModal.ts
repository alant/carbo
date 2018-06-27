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
	private signup() {
		console.log("signup " + this.nickname);
		const address = "0x5a16ef04f793a5f1878ae451bae06592515bd3c3";
		RES.getResByUrl("contracts/build/contract_addresses.json", function(addresses){
			RES.getResByUrl("contracts/build/contracts/UserInfo.json",function(data){
				console.log(data, addresses);
				this.web3.eth.contract(data.abi).at(addresses.userInfo).nameOf(this.web3.eth.defaultAccount, function(err, name){
					console.log(name);	
				});
				}, null, "json");
		}, null, "json");
	}
}