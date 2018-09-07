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
var PrepareLogUI = ui.log.prepare.PrepareLogUI;
var PrepareLog = /** @class */ (function (_super) {
    __extends(PrepareLog, _super);
    function PrepareLog() {
        var _this = _super.call(this) || this;
        _this.b_X = 0;
        _this.e_X = 0;
        _this.dirState = 0;
        _this.prepareLogInit();
        return _this;
    }
    PrepareLog.prototype.prepareLogInit = function () {
        this.bgPanel.hScrollBar.hide = true;
        this.bgPanel.hScrollBar.elasticBackTime = 200; //设置橡皮筋回弹时间。单位为毫秒。
        this.bgPanel.hScrollBar.elasticDistance = 30; //设置橡皮筋极限距离。
        this.on(Laya.Event.CLICK, this, this.onTouchHandle);
        // this.bgPanel.hScrollBar.on(Laya.Event.CHANGE, this, this.onChange);
        this.bgPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin);
        this.bgPanel.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
    };
    PrepareLog.prototype.touchBegin = function (e) {
        this.b_X = e.stageX;
        // console.log('b:' + this.b_X)
    };
    PrepareLog.prototype.touchEnd = function (e) {
        this.e_X = e.stageX;
        // console.log('e:' + this.e_X)
        this.dragHandle();
    };
    PrepareLog.prototype.dragHandle = function () {
        var _dis = this.e_X - this.b_X;
        if (_dis > 0 && _dis > 5) {
            // console.log('left');
            if (this.dirState == 1) {
                this.moveTo_Bag();
                this.dirState = 0;
            }
        }
        else if (_dis < 0 && _dis < -5) {
            // console.log('right')
            if (this.dirState == 0) {
                this.moveTo_Table();
                this.dirState = 1;
            }
        }
    };
    PrepareLog.prototype.onChange = function (e) {
        console.log(this.bgPanel.hScrollBar.value);
    };
    PrepareLog.prototype.onTouchHandle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.rightBut:
                if (this.dirState == 0) {
                    this.moveTo_Table();
                    this.dirState = 1;
                }
                break;
            case this.leftBut:
                if (this.dirState == 1) {
                    this.moveTo_Bag();
                    this.dirState = 0;
                }
                break;
        }
    };
    PrepareLog.prototype.moveTo_Table = function () {
        Laya.Tween.to(this.bgPanel.hScrollBar, { value: 757 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, function () {
            this.leftBut.visible = true;
            this.rightBut.visible = false;
        }));
    };
    PrepareLog.prototype.moveTo_Bag = function () {
        Laya.Tween.to(this.bgPanel.hScrollBar, { value: 0 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, function () {
            this.leftBut.visible = false;
            this.rightBut.visible = true;
        }));
    };
    return PrepareLog;
}(PrepareLogUI));
//# sourceMappingURL=PreapreLog.js.map