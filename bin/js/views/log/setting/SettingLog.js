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
var SettingLogUI = ui.log.setting.SettingLogUI;
var SettingLog = /** @class */ (function (_super) {
    __extends(SettingLog, _super);
    function SettingLog() {
        var _this = _super.call(this) || this;
        _this.playState = 1;
        _this.settingLog();
        return _this;
    }
    SettingLog.prototype.settingLog = function () {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        // this.inputLog.close();
        this.nameText.changeText(GameData.userName);
        Global.addEventListener('showInfo', this, this.showInfo);
    };
    SettingLog.prototype.touchHanle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.btn_music:
                this.playState == 1 ? this.playState = 0 : this.playState = 1;
                if (this.playState == 1) {
                    SoundModel.getInstance().playBgMusic();
                }
                else {
                    SoundModel.getInstance().stopBgMusic();
                }
                break;
            case this.closeBut:
                this.close();
                break;
            case this.nameText:
            case this.writeBut:
                this.changeNameLog.visible = true;
                this.changeNameLog.mouseEnabled = true;
                this.changeNameLog.popup();
                break;
            case this.btn_delRole:
                console.log('del');
                this.DelConfirmLog.visible = true;
                this.DelConfirmLog.popup();
                break;
        }
    };
    SettingLog.prototype.showInfo = function () {
        this.nameText.changeText(GameData.userName);
        this.infoLog.visible = true;
        this.infoLog.infoText.changeText('改名了！！');
        this.infoLog.popup();
    };
    return SettingLog;
}(SettingLogUI));
//# sourceMappingURL=SettingLog.js.map