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
var PictureLogUI = ui.log.picture.PictureLogUI;
var PictureLog = /** @class */ (function (_super) {
    __extends(PictureLog, _super);
    function PictureLog() {
        var _this = _super.call(this) || this;
        _this.itemArr = _this.m_list.cells;
        _this.b_X = 0;
        _this.e_X = 0;
        _this.scrollPage = 0;
        _this.now_index = 0;
        _this.pictureLogInit();
        return _this;
    }
    PictureLog.prototype.pictureLogInit = function () {
        this.m_list.scrollBar.hide = true; //隐藏列表的滚动条。
        this.m_list.scrollBar.elasticBackTime = 200; //设置橡皮筋回弹时间。单位为毫秒。
        this.m_list.scrollBar.elasticDistance = 30; //设置橡皮筋极限距离。
        this.m_list.cacheContent = true;
        this.m_list.scrollBar.rollRatio = 0.8;
        this.m_list.array = this.itemArr;
        this.m_list.refresh();
        this.m_list.selectHandler = new Laya.Handler(this, this.selectHandle);
        this.m_list.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin);
        this.m_list.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        this.closeBut.name = Dialog.CLOSE;
    };
    PictureLog.prototype.touchBegin = function (e) {
        this.b_X = e.stageX;
        // console.log('b:' + this.b_X)
    };
    PictureLog.prototype.touchEnd = function (e) {
        this.e_X = e.stageX;
        // console.log('e:' + this.e_X)
        this.dragHandle();
    };
    PictureLog.prototype.dragHandle = function () {
        var _dis = this.e_X - this.b_X;
        if (_dis > 0 && _dis > 5) {
            // console.log('left');
            this.tweenPage('left');
        }
        else if (_dis < 0 && _dis < -5) {
            // console.log('right')
            this.tweenPage('right');
        }
    };
    PictureLog.prototype.tweenPage = function (side) {
        var indexItem = 4;
        switch (side) {
            case 'left':
                this.scrollPage -= 1;
                this.now_index -= indexItem;
                if (this.now_index < 0) {
                    this.now_index = 0;
                }
                this.m_list.tweenTo(this.now_index, 300);
                // this.m_list.page += 1;
                break;
            case 'right':
                this.scrollPage += 1;
                this.now_index += indexItem;
                if (this.now_index > 12) {
                    this.now_index = 12;
                }
                this.m_list.tweenTo(this.now_index, 300);
                // this.m_list.page += 1;
                break;
        }
    };
    PictureLog.prototype.selectHandle = function (selectIdex) {
        // for (var i: number = 0; i < this.itemArr.length; i++) {
        //     this.itemArr[i].selectedBg.visible = false;
        // }
        // console.log(selectIdex);
        // var item: any = this.itemArr[selectIdex];
        // item.selectedBg.visible = true
    };
    return PictureLog;
}(PictureLogUI));
//# sourceMappingURL=PictureLog.js.map