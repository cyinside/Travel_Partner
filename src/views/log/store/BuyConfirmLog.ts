import BuyConfirmLogUI = ui.log.store.BuyConfirmLogUI;
class BuyConfirmLog extends BuyConfirmLogUI {
    public constructor() {
        super()
        this.buyConfirmLogInit()
    }

    private buyConfirmLogInit() {
        this.cancelBut.name = Dialog.CANCEL;
        this.okBut.name = Dialog.OK;

        this.on(Laya.Event.CLICK, this, this.touchHandle)
    }

    public setInfo(nameText: string) {
        this.nameText.changeText(nameText);
    }

    private touchHandle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.okBut:
                this.showState();
                break;
        }
    }

    private showState() {
        Global.dispatchEvent(GameEvent.SHWO_BUY_STATE);
    }
}