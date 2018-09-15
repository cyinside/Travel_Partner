import Bottom2UnitUI = ui.indoor.Bottom2UnitUI;
class Bottom2Unit extends Bottom2UnitUI {
    public constructor() {
        super();
        this.Bottom2UnitInit();
    }

    public Bottom2UnitInit() {
        this.on(Laya.Event.CLICK, this, this.onTouchHandle)
        Global.addEventListener(GameEvent.CHANGE_WARNTIP, this, this.showWarn);
    }

    private onTouchHandle(e: Laya.Event) {
        var _but = e.target;
        switch (_but) {
            case this.storeBut:
                GameEvent.LOG_name = 'Store';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
            case this.outsideBut:
                SceneEvent.sceneID = 1;
                Global.dispatchEvent(SceneEvent.CHANGE_SCENE);
                break;
            case this.prepareBut:
                GameEvent.LOG_name = 'Prepare';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
            case this.bookBut:
                GameEvent.LOG_name = 'Picture';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
        }
    }

    private showWarn() {
        this.warnTip.visible = GameSetting.showWarnTip;
    }
}