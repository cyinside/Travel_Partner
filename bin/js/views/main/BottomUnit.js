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
var BottomUnitUI = ui.main.BottomUnitUI;
var BottomUnit = /** @class */ (function (_super) {
    __extends(BottomUnit, _super);
    function BottomUnit() {
        var _this = _super.call(this) || this;
        _this.bottomUnitInit();
        return _this;
    }
    BottomUnit.prototype.bottomUnitInit = function () {
        this.on(Laya.Event.CLICK, this, this.onTouchHandle);
    };
    BottomUnit.prototype.onTouchHandle = function (e) {
        var _but = e.target;
        switch (_but) {
            case this.insideBut:
                SceneUtil.changeScene(2);
                break;
        }
    };
    return BottomUnit;
}(BottomUnitUI));
//# sourceMappingURL=BottomUnit.js.map