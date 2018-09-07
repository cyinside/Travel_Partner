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
var infoLogUI = ui.log.InfoLogUI;
var infoLog = /** @class */ (function (_super) {
    __extends(infoLog, _super);
    function infoLog() {
        var _this = _super.call(this) || this;
        _this.infoLogInit();
        return _this;
    }
    infoLog.prototype.infoLogInit = function () {
    };
    infoLog.prototype.showInfo = function (text) {
        this.infoText.changeText(text);
        if (GameEvent.LOG_url != '') {
            this.roleImg.skin = GameEvent.LOG_url;
            this.infoText.x = 358;
            GameEvent.LOG_url = '';
        }
        else {
            this.roleImg.skin = '';
            this.infoText.x = this.width / 2;
        }
        this.visible = true;
        this.popup();
        if (this.isPopup)
            Laya.timer.once(2500, this, function () {
                this.close();
            });
    };
    return infoLog;
}(infoLogUI));
//# sourceMappingURL=InfoLog.js.map