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
var LogViewUI = ui.log.LogViewUI;
var LogView = /** @class */ (function (_super) {
    __extends(LogView, _super);
    function LogView() {
        var _this = _super.call(this) || this;
        _this.LogViewInit();
        return _this;
    }
    LogView.prototype.LogViewInit = function () {
        this.settingLog.closeHandler = new Laya.Handler(this, this.closeHandle);
        this.storeLog.closeHandler = new Laya.Handler(this, this.closeHandle);
    };
    LogView.prototype.closeHandle = function () {
        console.log('close');
        this.visible = false;
    };
    return LogView;
}(LogViewUI));
//# sourceMappingURL=LogView.js.map