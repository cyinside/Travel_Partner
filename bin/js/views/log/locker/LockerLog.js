var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LockerLogUI = ui.log.locker.LockerLogUI;
var LockerLog = /** @class */ (function (_super) {
    __extends(LockerLog, _super);
    function LockerLog() {
        var _this = _super.call(this) || this;
        _this.lockerListArr = GameData.storeDataArr["prop"];
        _this.lockerListArr_food = [];
        _this.lockerListArr_luck = [];
        _this.lockerListArr_prop = [];
        _this.up_color = '#ffedd5';
        _this.down_color = '#56361f';
        _this.lockerLogInit();
        return _this;
    }
    // private bagPos_Rec:Array<number>=[0,0,0,0];
    LockerLog.prototype.lockerLogInit = function () {
        this.tabGtoup.selectHandler = new Handler(this, this.onSelect);
        this.lockerList.cacheContent = true;
        this.lockerListArr_food = this.filterItemByKey(1);
        this.lockerListArr_prop = this.filterItemByKey(2);
        this.lockerListArr_luck = this.filterItemByKey(3);
        this.lockerList.mouseHandler = new Handler(this, this.selectHandle);
        this.lockerList.renderHandler = new Handler(this, this.setListDetail);
        this.onSelect(0);
    };
    LockerLog.prototype.setButTouch_off = function () {
        this.tabGtoup.mouseEnabled = false;
    };
    LockerLog.prototype.setListDetail = function (cell, index) {
        cell.nameText.changeText(cell.dataSource.name);
        cell.descText1.changeText(cell.dataSource.desc1);
        cell.descText2.changeText(cell.dataSource.desc2);
        cell.roleImg.skin = 'storeItem/' + cell.dataSource.res + '.png';
    };
    LockerLog.prototype.filterItemByKey = function (key) {
        var filter_arr = this.lockerListArr.filter(function (value, index, arr) {
            if (value.type == key) {
                return true;
            }
            else {
                return false;
            }
        });
        return filter_arr;
    };
    LockerLog.prototype.selectHandle = function (e, index) {
        // GameEvent.Locker_seclect_Type = this.tabGtoup.selectedIndex;
        if (e.type == "mouseup") {
            console.log(index);
            if (GameEvent.ToPreapre_Data['id'] == index) {
                console.log('重复');
                GameEvent.ToPreapre_Data['skinSrc'] = '';
                GameEvent.ToPreapre_Data['id'] = null;
                GameSetting.bagPos_Rec[this.tabGtoup.selectedIndex] = 0;
            }
            else {
                var skin = 'storeItem/' + e.target.dataSource.res + '.png';
                GameEvent.ToPreapre_Data['skinSrc'] = skin;
                GameEvent.ToPreapre_Data['id'] = index;
                GameSetting.bagPos_Rec[this.tabGtoup.selectedIndex] = 1;
            }
            console.log(GameSetting.bagPos_Rec);
            e.target.markImg.visible = false;
            Global.dispatchEvent(GameEvent.PREPARE_setItem);
            if (GameSetting.bagPos_Rec[0] == 0) {
                GameSetting.showWarnTip = true;
                Global.dispatchEvent(GameEvent.CHANGE_WARNTIP); //书包食物拦为空时发送显示警示请求
            }
            else {
                GameSetting.showWarnTip = false;
                Global.dispatchEvent(GameEvent.CHANGE_WARNTIP);
            }
            this.close();
        }
    };
    LockerLog.prototype.onSelect = function (index) {
        console.log("当前选择的标签页索引为 " + index);
        for (var i = 0; i < 4; i++) {
            this.getChildByName('butText' + i).color = this.up_color;
            this.getChildByName('butText' + i).fontSize = 30;
        }
        this.closeAll();
        this.lockerList.visible = true;
        this.lockerList.alpha = 0;
        if (GameSetting.bagPos_Rec[index] == 0) {
            GameEvent.ToPreapre_Data['id'] = null;
        }
        console.log(GameSetting.bagPos_Rec);
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
    };
    LockerLog.prototype.closeAll = function () {
        this.lockerList.visible = false;
    };
    LockerLog.prototype.showList = function (obj) {
        Laya.Tween.to(obj, { alpha: 1 }, 400);
    };
    LockerLog.prototype.setIndex = function (id) {
        this.tabGtoup.selectedIndex = id;
        // this.onSelect(id)
    };
    LockerLog.prototype.lockerInit = function () {
        for (var i = 0; i < this.lockerList.cells.length; i++) {
            this.lockerList.cells[i].markImg.visible = false;
        }
        if (GameEvent.ToPreapre_Data['id'] || GameEvent.ToPreapre_Data['id'] == 0) {
            this.lockerList.cells[GameEvent.ToPreapre_Data['id']].markImg.visible = true;
            // this.lockerList.cells[GameEvent.ToPreapre_Data['id']].hes_use=true;
        }
    };
    return LockerLog;
}(LockerLogUI));
//# sourceMappingURL=LockerLog.js.map