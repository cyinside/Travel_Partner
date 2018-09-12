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
    private lockerLogInit() {
        this.tabGtoup.selectHandler = new Handler(this, this.onSelect);
        this.lockerList.cacheContent = true;

        this.lockerListArr_food = this.filterItemByKey(1);
        this.lockerListArr_prop = this.filterItemByKey(2);
        this.lockerListArr_luck = this.filterItemByKey(3);


        this.onSelect(0);
    }

    public setButTouch_off() {
        this.tabGtoup.mouseEnabled = false;
    }

    private setListDetail(arr: Array<any> = []) {
        this.lockerList.repeatY = arr.length;
        this.lockerList.scrollBar.scaleBar = false;

        var _itemList = this.lockerList.cells;
        arr.length < 5 ? this.lockerList.scrollBar.hide = true : this.lockerList.scrollBar.hide = false;

        for (var i: number = 0; i < arr.length; i++) {
            _itemList[i].nameText.changeText(arr[i].name);
            _itemList[i].roleImg.skin = 'storeItem/' + arr[i].res + '.png';
            _itemList[i].descText1.changeText(arr[i].desc1);
            _itemList[i].descText1.changeText(arr[i].desc2);
        }

        this.lockerList.refresh();
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

        switch (index) {
            case 0:
                this.lockerList.array = this.lockerListArr_food;
                this.setListDetail(this.lockerListArr_food);

                this.lockerListArr_food.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
            case 1:
                this.lockerList.array = this.lockerListArr_luck;
                this.setListDetail(this.lockerListArr_luck);

                this.lockerListArr_luck.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
            case 2:
                this.lockerList.array = this.lockerListArr_prop;
                this.setListDetail(this.lockerListArr_prop);

                this.lockerListArr_prop.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                this.showList(this.lockerList);
                break;
        }
        this.getChildByName('butText' + index).color = this.down_color;
        this.getChildByName('butText' + index).fontSize = 34;
    }

    private closeAll() {
        this.lockerList.visible = false;
    }

    private showList(obj: Laya.Sprite) {
        Laya.Tween.to(obj, { alpha: 1 }, 400);
    }

    public setIndex(id: number) {
        this.tabGtoup.selectedIndex = id;
    }
}