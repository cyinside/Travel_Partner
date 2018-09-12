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
    LockerLog.prototype.lockerLogInit = function () {
        this.tabGtoup.selectHandler = new Handler(this, this.onSelect);
        this.lockerList.cacheContent = true;
        this.lockerListArr_food = this.filterItemByKey(1);
        this.lockerListArr_prop = this.filterItemByKey(2);
        this.lockerListArr_luck = this.filterItemByKey(3);
        this.onSelect(0);
    };
    LockerLog.prototype.setButTouch_off = function () {
        this.tabGtoup.mouseEnabled = false;
    };
    LockerLog.prototype.setListDetail = function (arr) {
        if (arr === void 0) { arr = []; }
        this.lockerList.repeatY = arr.length;
        this.lockerList.scrollBar.scaleBar = false;
        var _itemList = this.lockerList.cells;
        arr.length < 5 ? this.lockerList.scrollBar.hide = true : this.lockerList.scrollBar.hide = false;
        for (var i = 0; i < arr.length; i++) {
            _itemList[i].nameText.changeText(arr[i].name);
            _itemList[i].roleImg.skin = 'storeItem/' + arr[i].res + '.png';
            _itemList[i].descText1.changeText(arr[i].desc1);
            _itemList[i].descText1.changeText(arr[i].desc2);
        }
        this.lockerList.refresh();
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
    LockerLog.prototype.onSelect = function (index) {
        console.log("当前选择的标签页索引为 " + index);
        for (var i = 0; i < 4; i++) {
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
    };
    LockerLog.prototype.closeAll = function () {
        this.lockerList.visible = false;
    };
    LockerLog.prototype.showList = function (obj) {
        Laya.Tween.to(obj, { alpha: 1 }, 400);
    };
    LockerLog.prototype.setIndex = function (id) {
        this.tabGtoup.selectedIndex = id;
    };
    return LockerLog;
}(LockerLogUI));
//# sourceMappingURL=LockerLog.js.map