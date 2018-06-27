/**
* Created by SPC
* farm view
*/
class FarmMemberListView extends egret.Sprite {
	public constructor() {
		super();
		this.renderList();
	}

	private members: Array<FarmMember> = [
		{
			name: "Test user 1",
			walletAddress: "0x12345678",
            balance: 0,
            cows: []
		},
        {
			name: "Test user 2",
			walletAddress: "0x23456789",
            balance: 0,
            cows: []
		},
        {
			name: "Test user 3",
			walletAddress: "0x34567891",
            balance: 0,
            cows: []
		}
	]

	
    private async renderList() {
		this.members.forEach((member, i) => {
			this.createRowItem(member, i);
		});
	}
	
	private async createRowItem(member: FarmMember, cowIndex: number) {
        var height = cowIndex * 100 + 400;
		var text1:egret.TextField = new egret.TextField();
        text1.inputType = egret.TextFieldInputType.TEXT;
        text1.text = "Name:";
        text1.textColor = 0x000000;
        text1.width = 200;
        text1.y = height;
        this.addChild(text1);

        var text2:egret.TextField = new egret.TextField();
        text2.inputType = egret.TextFieldInputType.TEXT;
        text2.text = member.name
        text2.textColor = 0x000000;
        text2.width = 200;
        text2.x = 100;
        text2.y = height;
        this.addChild(text2);
	}
}