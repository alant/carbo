/**
 * Created by SPC
 * farm list view
 */
class FarmListView extends egret.Sprite {
    private view:FarmListModal;
	public constructor() {
		super();
		this.initView();
	}
    private initView() {
		this.view = new FarmListModal();
		this.view.x = (GameConst.SCENT_WIDTH-1920) / 2;
        this.view.y = (GameConst.SCENT_HEIGHT-1080) / 2;
        this.addChild(this.view);
    }
	
}