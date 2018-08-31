import BottomUnitUI = ui.main.BottomUnitUI;
class BottomUnit extends BottomUnitUI{
    public constructor(){
        super();
        this.bottomUnitInit()
    }

    public bottomUnitInit(){
        this.on(Laya.Event.CLICK,this,this.onTouchHandle)
    }

    private onTouchHandle(e:Laya.Event){
        var _but=e.target;
        switch (_but){
            case this.storeBut:
                GameEvent.LOG_name='Store';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
            break;
        }
    }
}