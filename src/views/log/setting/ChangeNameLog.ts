import ChangeNameLogUI = ui.log.setting.ChangeNameLogUI;
class ChangeNameLog extends ChangeNameLogUI {
    public constructor() {
        super();
        this.settingInputLog();
    }

    private settingInputLog() {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        this.cancelBut.name=Dialog.CANCEL;
        this.okBut.name=Dialog.OK;
    }

    private touchHanle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.okBut:
                console.log('OK');
                if(this.nameInput.text){
                    GameData.userName=this.nameInput.text;
                    Global.dispatchEvent('showInfo');
                }
                break                
        }
    }
}