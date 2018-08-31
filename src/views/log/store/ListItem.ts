import ListItemUI = ui.log.store.ListItemUI;
class ListItem extends ListItemUI {
    public constructor() {
        super()
        this.listIteminit();
    }

    public touchTime:number=0;
    private listIteminit(){
        this.selectedBg.on(Laya.Event.CLICK,this,this.clickHandle);
    }

    public onTouch(){
    //    return this.touchTime+=1;
        this.itemBg.mouseThrough=true;
    }

    private clickHandle(){
        console.log('CLICK');
        Global.dispatchEvent(GameEvent.SHWO_BUY_CONFIRM);
    }
}