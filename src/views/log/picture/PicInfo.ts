import PicInfoUI = ui.log.picture.PicInfoUI;
class PicInfo extends PicInfoUI {
    public constructor() {
        super();
        this.picInfoInit();
    }

    private picInfoInit() {
        this.on(Laya.Event.CLICK, this, this.touchHanle)
    }

    private touchHanle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.btn_delPic:
                Global.dispatchEvent(GameEvent.SHOW_DELPIC_CONFIRM);
                break;
            case this.btn_savePic:
                console.log('btn_savePic');
                // WX_SDK.getInstance().screenCapture(this.pictureBig,0,0,true);
                Global.dispatchEvent(GameEvent.SAVE_PIC_COMP);//保存图片成功
                break;
        }
    }
}