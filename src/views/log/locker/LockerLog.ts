import LockerLogUI = ui.log.locker.LockerLogUI;
class LockerLog extends LockerLogUI {
    public constructor() {
        super();
        this.lockerLogInit();
    }

    private lockerListArr: Array<any> = GameData.storeDataArr["prop"];
    private lockerListArr_food: Array<any> = [];
    private lockerListArr_luck: Array<any> = [];
    private lockerListArr_prop: Array<any> = [];
    private bagPos_Rec:Array<number>=[0,0,0,0];
    private lockerLogInit() {
        this.tabGtoup.selectHandler = new Handler(this, this.onSelect);
        this.lockerList.cacheContent = true;

        this.lockerListArr_food = this.filterItemByKey(1);
        this.lockerListArr_prop = this.filterItemByKey(2);
        this.lockerListArr_luck = this.filterItemByKey(3);

        this.lockerList.mouseHandler = new Handler(this, this.selectHandle);
        this.lockerList.renderHandler = new Handler(this, this.setListDetail);

        this.onSelect(0);
    }
    public setButTouch_off() {
        this.tabGtoup.mouseEnabled = false;
    }

    private setListDetail(cell: LockerListItem, index: number) {
        cell.nameText.changeText(cell.dataSource.name);
        cell.descText1.changeText(cell.dataSource.desc1);
        cell.descText2.changeText(cell.dataSource.desc2);
        cell.roleImg.skin = 'storeItem/' + cell.dataSource.res + '.png';
    }

    private filterItemByKey(key: number) {
        var filter_arr = this.lockerListArr.filter(
            function (value, index, arr) {
                if (value.type == key) {
                    return true;
                } else {
                    return false;
                }
            }
        );

        return filter_arr;
    }

    private selectHandle(e, index) {
        // GameEvent.Locker_seclect_Type = this.tabGtoup.selectedIndex;
        if (e.type == "mouseup") {
            console.log(index);
            if (GameEvent.ToPreapre_Data['id'] == index) {
                console.log('重复')

                GameEvent.ToPreapre_Data['skinSrc'] = '';
                GameEvent.ToPreapre_Data['id'] = null;

                this.bagPos_Rec[this.tabGtoup.selectedIndex]=0;
            } else {
                var skin = 'storeItem/' + e.target.dataSource.res + '.png';

                GameEvent.ToPreapre_Data['skinSrc'] = skin;
                GameEvent.ToPreapre_Data['id'] = index;

                this.bagPos_Rec[this.tabGtoup.selectedIndex]=1;
            }

            console.log(this.bagPos_Rec)
            e.target.markImg.visible = false;
            Global.dispatchEvent(GameEvent.PREPARE_setItem);

            this.close();
        }
    }

    private up_color: string = '#ffedd5';
    private down_color: string = '#56361f';
    private onSelect(index) {
        console.log("当前选择的标签页索引为 " + index);
        for (var i: number = 0; i < 4; i++) {
            this.getChildByName('butText' + i).color = this.up_color;
            this.getChildByName('butText' + i).fontSize = 30;
        }
        this.closeAll();

        this.lockerList.visible = true;
        this.lockerList.alpha = 0;

        if(this.bagPos_Rec[index]==0){
        GameEvent.ToPreapre_Data['id']=null;
        }
            console.log(this.bagPos_Rec)

        switch (index) {
            case 0:
                this.lockerList.array = this.lockerListArr_food;

                this.lockerListArr_food.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
            case 1:
                this.lockerList.array = this.lockerListArr_luck;

                this.lockerListArr_luck.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
            case 2:
                this.lockerList.array = this.lockerListArr_prop;

                this.lockerListArr_prop.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
        }


        this.lockerList.refresh();
        this.getChildByName('butText' + index).color = this.down_color;
        this.getChildByName('butText' + index).fontSize = 34;

        this.lockerList.array.length < 5 ? this.lockerList.scrollBar.hide = true : this.lockerList.scrollBar.hide = false;
    }

    private closeAll() {
        this.lockerList.visible = false;
    }

    private showList(obj: Laya.Sprite) {
        Laya.Tween.to(obj, { alpha: 1 }, 400);
    }

    public setIndex(id: number) {
        this.tabGtoup.selectedIndex = id;
        // this.onSelect(id)
    }

    public lockerInit(){
        for(var i:number=0;i<this.lockerList.cells.length;i++){
            this.lockerList.cells[i].markImg.visible = false;
        }
        if (GameEvent.ToPreapre_Data['id']||GameEvent.ToPreapre_Data['id']==0) {
            this.lockerList.cells[GameEvent.ToPreapre_Data['id']].markImg.visible = true;
            // this.lockerList.cells[GameEvent.ToPreapre_Data['id']].hes_use=true;
        }
    }
}