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
var PicDelConfirmLogUI = ui.log.picture.PicDelConfromUI;
var PicDelConfirmLog = /** @class */ (function (_super) {
    __extends(PicDelConfirmLog, _super);
    function PicDelConfirmLog() {
        var _this = _super.call(this) || this;
        _this.PicDelConfirmInit();
        return _this;
    }
    PicDelConfirmLog.prototype.PicDelConfirmInit = function () {
        this.cancelBut.name = Dialog.CANCEL;
    };
    return PicDelConfirmLog;
}(PicDelConfirmLogUI));
//# sourceMappingURL=PicDelConfirmLog.js.map