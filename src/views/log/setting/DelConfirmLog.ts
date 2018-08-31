import DelConfirmLogUI = ui.log.setting.delConfirmLogUI;
class DelConfirmLog extends DelConfirmLogUI {
    public constructor() {
        super();
        this.settingDelConfirmLog();
    }

    private settingDelConfirmLog() {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        this.cancelBut.name=Dialog.CANCEL;
        this.okBut.name=Dialog.OK;
    }

    private touchHanle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.okBut:
                console.log('OK');
                break
        }
    }
}