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
        _this.index_id = null;
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
        // this.addFood1.seclect_Type=0;
        // this.addLuck1.seclect_Type=1;
        // this.addProp1.seclect_Type=2;
        // this.addProp2.seclect_Type=2;
        this.bgPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin);
        this.bgPanel.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        Global.addEventListener(GameEvent.PREPARE_setItem, this, this.setItem);
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
    PrepareLog.prototype.setItem = function () {
        this.selectItem.getChildByName('itemImg').skin = GameEvent.ToPreapre_Data['skinSrc'];
        this.selectItem.getChildByName('itemImg').visible = true;
        this.selectItem.seclect_Id = GameEvent.ToPreapre_Data['id'];
        if (this.selectItem.seclect_Id || this.selectItem.seclect_Id == 0) {
            this.selectItem.getChildByName('addImg').alpha = 0;
        }
        else {
            this.selectItem.getChildByName('addImg').alpha = 1;
        }
        console.log(this.selectItem.seclect_Id);
    };
    PrepareLog.prototype.onTouchHandle = function (e) {
        var _target = e.target;
        this.selectItem = _target;
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
            case this.addFood1:
                GameEvent.locker_id = 0;
                this.showLocker(this.addFood1.seclect_Id);
                console.log('addFood1');
                break;
            case this.addLuck1:
                GameEvent.locker_id = 1;
                this.showLocker(this.addLuck1.seclect_Id);
                console.log('addLuck1');
                break;
            case this.addProp1:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp1.seclect_Id);
                console.log('addProp1');
                break;
            case this.addProp2:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('addProp2');
                break;
            case this.setFood1:
                GameEvent.locker_id = 0;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setFood1');
                break;
            case this.setFood2:
                GameEvent.locker_id = 0;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setFood2');
                break;
            case this.setLock1:
                GameEvent.locker_id = 1;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setLock1');
                break;
            case this.setLock2:
                GameEvent.locker_id = 1;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setLock2');
                break;
            case this.setProp1:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setProp1');
                break;
            case this.setProp2:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setProp2');
                break;
            case this.setProp3:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setProp3');
                break;
            case this.setProp4:
                GameEvent.locker_id = 2;
                this.showLocker(this.addProp2.seclect_Id);
                console.log('setProp4');
                break;
        }
    };
    PrepareLog.prototype.showLocker = function (num) {
        GameEvent.ToPreapre_Data['id'] = num;
        GameEvent.LOG_name = 'Locker';
        Global.dispatchEvent(GameEvent.SHOW_LOG);
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