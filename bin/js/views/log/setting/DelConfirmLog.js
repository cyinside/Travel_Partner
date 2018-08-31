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
var DelConfirmLogUI = ui.log.setting.delConfirmLogUI;
var DelConfirmLog = /** @class */ (function (_super) {
    __extends(DelConfirmLog, _super);
    function DelConfirmLog() {
        var _this = _super.call(this) || this;
        _this.settingDelConfirmLog();
        return _this;
    }
    DelConfirmLog.prototype.settingDelConfirmLog = function () {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        this.cancelBut.name = Dialog.CANCEL;
        this.okBut.name = Dialog.OK;
    };
    DelConfirmLog.prototype.touchHanle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.okBut:
                console.log('OK');
                break;
        }
    };
    return DelConfirmLog;
}(DelConfirmLogUI));
//# sourceMappingURL=DelConfirmLog.js.map