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
var TopUnitUI = ui.main.TopUnitUI;
var TopUnit = /** @class */ (function (_super) {
    __extends(TopUnit, _super);
    function TopUnit() {
        var _this = _super.call(this) || this;
        _this.sumNumer = 0;
        // this.topUnitInit();
        _this.settingBut.mouseEnabled = true;
        _this.settingBut.on(Laya.Event.CLICK, _this, _this.onTouchHandle);
        return _this;
    }
    TopUnit.prototype.textTweem_UP = function () {
        Laya.Tween.to(this.sumText, { y: 0 }, 100, Laya.Ease.sineInOut, new Laya.Handler(this, this.textTweem_DROM));
    };
    TopUnit.prototype.textTweem_DROM = function () {
        this.addSum();
        Laya.Tween.to(this.sumText, { y: 13 }, 100, Laya.Ease.sineInOut);
    };
    TopUnit.prototype.addSum = function () {
        this.sumNumer++;
        this.sumText.changeText(this.sumNumer.toString());
    };
    TopUnit.prototype.onTouchHandle = function (e) {
        var _but = e.target;
        switch (_but) {
            case this.settingBut:
                GameEvent.LOG_name = 'Setting';
                Global.dispatchEvent(GameEvent.SHOW_LOG, this);
                break;
        }
    };
    return TopUnit;
}(TopUnitUI));
//# sourceMappingURL=TopUnit.js.map