var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inputLogUI = ui.log.inputLogUI;
var InputLog = /** @class */ (function (_super) {
    __extends(InputLog, _super);
    function InputLog() {
        var _this = _super.call(this) || this;
        _this.settingInputLog();
        return _this;
    }
    InputLog.prototype.settingInputLog = function () {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        // this.inputLog.close();
        // this.cancelBut.name=Dialog.CANCEL;
    };
    InputLog.prototype.touchHanle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.cancelBut:
                this.close();
                break;
            case this.okBut:
                console.log('OK');
                break;
        }
    };
    return InputLog;
}(inputLogUI));
//# sourceMappingURL=InputLog.js.map