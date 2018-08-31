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
var BuyConfirmLogUI = ui.log.store.BuyConfirmLogUI;
var BuyConfirmLog = /** @class */ (function (_super) {
    __extends(BuyConfirmLog, _super);
    function BuyConfirmLog() {
        var _this = _super.call(this) || this;
        _this.buyConfirmLogInit();
        return _this;
    }
    BuyConfirmLog.prototype.buyConfirmLogInit = function () {
        this.cancelBut.name = Dialog.CANCEL;
        this.okBut.name = Dialog.OK;
        this.on(Laya.Event.CLICK, this, this.touchHandle);
    };
    BuyConfirmLog.prototype.setInfo = function (nameText) {
        this.nameText.changeText(nameText);
    };
    BuyConfirmLog.prototype.touchHandle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.okBut:
                this.showState();
                break;
        }
    };
    BuyConfirmLog.prototype.showState = function () {
        Global.dispatchEvent(GameEvent.SHWO_BUY_STATE);
    };
    return BuyConfirmLog;
}(BuyConfirmLogUI));
//# sourceMappingURL=BuyConfirmLog.js.map