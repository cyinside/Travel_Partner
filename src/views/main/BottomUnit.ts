import BottomUnitUI = ui.main.BottomUnitUI;
class BottomUnit extends BottomUnitUI {
    public constructor() {
        super();
        this.bottomUnitInit()
    }

    public bottomUnitInit() {
        this.on(Laya.Event.CLICK, this, this.onTouchHandle)
    }

    private onTouchHandle(e: Laya.Event) {
        var _but = e.target;
        switch (_but) {
            case this.insideBut:
                SceneEvent.sceneID = 2;
                Global.dispatchEvent(SceneEvent.CHANGE_SCENE);
                break;
        }
    }
}