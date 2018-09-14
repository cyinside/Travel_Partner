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
// import LockerLogUI = ui.log.locker.LockerLogUI;
var LockerLog1 = /** @class */ (function (_super) {
    __extends(LockerLog1, _super);
    function LockerLog1() {
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
    LockerLog1.prototype.lockerLogInit = function () {
        this.tabGtoup.selectHandler = new Handler(this, this.onSelect);
        this.lockerList.cacheContent = true;
        this.lockerListArr_food = this.filterItemByKey(1);
        this.lockerListArr_prop = this.filterItemByKey(2);
        this.lockerListArr_luck = this.filterItemByKey(3);
        this.lockerList.selectHandler = new Handler(this, this.selectHandle);
        this.lockerList.renderHandler = new Handler(this, this.setListDetail);
        this.lockerList.array = this.lockerListArr_prop;
        // this.onSelect(0);
    };
    LockerLog1.prototype.setListDetail = function (cell, index) {
        cell.nameText.changeText(cell.dataSource.name);
        cell.descText1.changeText(cell.dataSource.desc1);
        cell.descText2.changeText(cell.dataSource.desc2);
        cell.roleImg.skin = 'storeItem/' + cell.dataSource.res + '.png';
    };
    LockerLog1.prototype.filterItemByKey = function (key) {
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
    LockerLog1.prototype.onSelect = function (index) {
        console.log("当前选择的标签页索引为 " + index);
        for (var i = 0; i < 4; i++) {
            this.getChildByName('butText' + i).color = this.up_color;
            this.getChildByName('butText' + i).fontSize = 30;
        }
        switch (index) {
            case 0:
                this.lockerList.array = this.lockerListArr_food;
                this.lockerListArr_food.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                break;
            case 1:
                this.lockerList.array = this.lockerListArr_luck;
                this.lockerListArr_luck.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                break;
            case 2:
                this.lockerList.array = this.lockerListArr_prop;
                this.lockerListArr_prop.length > 0 ? this.nthImg.visible = false : this.nthImg.visible = true;
                break;
        }
        this.getChildByName('butText' + index).color = this.down_color;
        this.getChildByName('butText' + index).fontSize = 34;
    };
    return LockerLog1;
}(LockerLogUI));
//# sourceMappingURL=LockerLog1.js.map