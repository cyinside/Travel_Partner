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
var ListItemUI = ui.log.store.ListItemUI;
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super.call(this) || this;
        _this.touchTime = 0;
        _this.item_id = '';
        _this.listIteminit();
        return _this;
    }
    ListItem.prototype.listIteminit = function () {
        this.selectedBg.on(Laya.Event.CLICK, this, this.clickHandle);
    };
    ListItem.prototype.onTouch = function () {
        //    return this.touchTime+=1;
        this.itemBg.mouseThrough = true;
    };
    ListItem.prototype.clickHandle = function () {
        console.log('CLICK');
        Global.dispatchEvent(GameEvent.SHWO_BUY_CONFIRM);
    };
    return ListItem;
}(ListItemUI));
//# sourceMappingURL=ListItem.js.map