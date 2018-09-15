import TopUnitUI = ui.main.TopUnitUI;
class TopUnit extends TopUnitUI {
    public constructor() {
        super()
        // this.topUnitInit();
        this.settingBut.mouseEnabled = true;
        this.settingBut.on(Laya.Event.CLICK, this, this.onTouchHandle);
    }

    private sumNumer: number = GameData.balanceNumber;

    public textTweem_UP() {
        Laya.Tween.to(this.sumText, { y: 0 }, 100, Laya.Ease.sineInOut, new Laya.Handler(this, this.textTweem_DROM));
    }
    private textTweem_DROM() {
        this.addSum();
        Laya.Tween.to(this.sumText, { y: 13 }, 100, Laya.Ease.sineInOut);
    }

    public addSum() {
        this.sumNumer++;
        this.sumText.changeText(this.sumNumer.toString());

        GameData.balanceNumber=this.sumNumer;
    }

    private onTouchHandle(e: Laya.Event) {
        var _but = e.target;
        switch (_but) {
            case this.settingBut:
                GameEvent.LOG_name = 'Setting';
                Global.dispatchEvent(GameEvent.SHOW_LOG, this);
                break;
        }
    }
}