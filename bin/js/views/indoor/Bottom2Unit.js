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
var Bottom2UnitUI = ui.indoor.Bottom2UnitUI;
var Bottom2Unit = /** @class */ (function (_super) {
    __extends(Bottom2Unit, _super);
    function Bottom2Unit() {
        var _this = _super.call(this) || this;
        _this.Bottom2UnitInit();
        return _this;
    }
    Bottom2Unit.prototype.Bottom2UnitInit = function () {
        this.on(Laya.Event.CLICK, this, this.onTouchHandle);
        Global.addEventListener(GameEvent.CHANGE_WARNTIP, this, this.showWarn);
    };
    Bottom2Unit.prototype.onTouchHandle = function (e) {
        var _but = e.target;
        switch (_but) {
            case this.storeBut:
                GameEvent.LOG_name = 'Store';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
            case this.outsideBut:
                SceneEvent.sceneID = 1;
                Global.dispatchEvent(SceneEvent.CHANGE_SCENE);
                break;
            case this.prepareBut:
                GameEvent.LOG_name = 'Prepare';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
            case this.bookBut:
                GameEvent.LOG_name = 'Picture';
                Global.dispatchEvent(GameEvent.SHOW_LOG);
                break;
        }
    };
    Bottom2Unit.prototype.showWarn = function () {
        this.warnTip.visible = GameSetting.showWarnTip;
    };
    return Bottom2Unit;
}(Bottom2UnitUI));
//# sourceMappingURL=Bottom2Unit.js.map