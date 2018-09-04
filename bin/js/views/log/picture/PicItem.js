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
var PicItemUI = ui.log.picture.PicItemUI;
var PicItem = /** @class */ (function (_super) {
    __extends(PicItem, _super);
    function PicItem() {
        var _this = _super.call(this) || this;
        _this.picItemInit();
        return _this;
    }
    PicItem.prototype.picItemInit = function () {
    };
    return PicItem;
}(PicItemUI));
//# sourceMappingURL=PicItem.js.map