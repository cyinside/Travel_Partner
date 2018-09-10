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
var StoreLogUI = ui.log.store.StoreLogUI;
var StoreLog = /** @class */ (function (_super) {
    __extends(StoreLog, _super);
    function StoreLog() {
        var _this = _super.call(this) || this;
        _this.itemArr = _this.m_list.cells;
        _this.storeData = GameData.storeDataArr["prop"];
        _this.b_X = 0;
        _this.e_X = 0;
        _this.scrollPage = 0;
        _this.now_index = 0;
        _this.StoreLogInit();
        return _this;
    }
    StoreLog.prototype.StoreLogInit = function () {
        this.m_list.scrollBar.hide = true; //隐藏列表的滚动条。
        // this.m_list.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        // this.m_list.scrollBar.elasticDistance = 30;//设置橡皮筋极限距离。
        this.m_list.cacheContent = true;
        this.m_list.scrollBar.rollRatio = 0.8;
        var _imgUrl = '';
        for (var m = 0; m < this.itemArr.length; m++) {
            if (m < 22) {
                this.itemArr[m].priceText.text = this.storeData[m].price;
                this.itemArr[m].m_label.text = this.storeData[m].name;
                _imgUrl = 'storeItem/' + this.storeData[m].res + '.png';
                this.itemArr[m].itemImg.skin = _imgUrl;
                if (this.storeData[m].type == 1) {
                    this.itemArr[m].itemBg.skin = 'store/itemBg1.png';
                }
            }
            if (m > 21) {
                this.itemArr[m].alpha = 0;
            } // 隐藏最后两个多出item
        }
        this.m_list.array = this.itemArr;
        this.selectHandle(0); //默认选中;
        // this.m_list.refresh();
        this.on(Laya.Event.CLICK, this, this.touchHandle);
        // this.m_list.scrollBar.changeHandler=new Laya.Handler(this,this.getListPos);
        this.m_list.selectHandler = new Laya.Handler(this, this.selectHandle);
        this.m_list.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin);
        this.m_list.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        // this.m_list.on(Laya.Event.MOUSE_OUT, this, this.touchOut);
        this.closeBut.name = Dialog.CLOSE;
        this.leftBut.alpha = 0;
        Global.addEventListener(GameEvent.SHWO_BUY_CONFIRM, this, this.showBuyConfirm);
        Global.addEventListener(GameEvent.SHWO_BUY_STATE, this, this.showBuyState);
    };
    StoreLog.prototype.touchBegin = function (e) {
        this.b_X = e.stageX;
        // console.log('b:' + this.b_X)
    };
    StoreLog.prototype.touchEnd = function (e) {
        this.e_X = e.stageX;
        // console.log('e:' + this.e_X)
        this.dragHandle();
    };
    // private touchOut(e: Laya.Event){
    //     // console.log('mouse out')
    //     this.e_X = e.stageX;
    //     // console.log('e:' + this.e_X)
    //     this.dragHandle()
    // }
    StoreLog.prototype.dragHandle = function () {
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
    StoreLog.prototype.touchHandle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.rightBut:
                this.tweenPage('right');
                break;
            case this.leftBut:
                this.m_list.tweenTo(0, 300);
                this.tweenPage('left');
                break;
        }
    };
    StoreLog.prototype.tweenPage = function (side) {
        var indexItem = 4;
        switch (side) {
            case 'left':
                this.scrollPage -= 1;
                this.now_index -= indexItem;
                if (this.now_index < 0) {
                    this.now_index = 0;
                }
                if (this.now_index == 0) {
                    this.hideBut("left");
                }
                else {
                    this.showBut('left');
                }
                if (this.now_index == 20) {
                    this.hideBut('right');
                }
                else {
                    this.showBut('right');
                }
                this.m_list.tweenTo(this.now_index, 300);
                // this.m_list.page += 1;
                break;
            case 'right':
                this.scrollPage += 1;
                this.now_index += indexItem;
                if (this.now_index > 20) {
                    this.now_index = 20;
                }
                if (this.now_index == 0) {
                    this.hideBut("left");
                }
                else {
                    this.showBut('left');
                }
                if (this.now_index == 20) {
                    this.hideBut('right');
                }
                else {
                    this.showBut('right');
                }
                this.m_list.tweenTo(this.now_index, 300);
                // this.m_list.page += 1;
                break;
        }
    };
    StoreLog.prototype.hideBut = function (dir) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
        }
    };
    StoreLog.prototype.showBut = function (dir) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
        }
    };
    StoreLog.prototype.getListPos = function (num) {
        console.log(num);
        if (num > 300) {
            this.m_list.tweenTo(4, 300);
        }
        // console.log(this.m_list.totalPage)
    };
    StoreLog.prototype.selectHandle = function (selectIdex) {
        if (selectIdex > 21)
            return; //后两个item点击不作处理
        for (var i = 0; i < this.itemArr.length; i++) {
            this.itemArr[i].selectedBg.visible = false;
        }
        console.log(selectIdex);
        var item = this.itemArr[selectIdex];
        item.selectedBg.visible = true;
        this.updateInfoText(selectIdex);
    };
    StoreLog.prototype.updateInfoText = function (selectIdex) {
        var type = this.storeData[selectIdex].type;
        var text = '';
        switch (type) {
            case 1:
                text = '食物';
                break;
            case 2:
                text = '道具';
                break;
            case 3:
                text = '幸运物';
                break;
        }
        var t_text = text + '：' + this.storeData[selectIdex].name;
        this.titleInfo.changeText(t_text);
        this.descText1.changeText(this.storeData[selectIdex].desc1);
        this.descText2.changeText(this.storeData[selectIdex].desc2);
    };
    StoreLog.prototype.showBuyConfirm = function () {
        var index = this.m_list.selectedIndex;
        var _name = this.storeData[index].name;
        var _price = this.storeData[index].price;
        var infoText = "确定花费" + _price + '铜钱购买' + _name + '？';
        this.buyConfirmLog.setInfo(infoText);
        this.buyConfirmLog.visible = true;
        this.buyConfirmLog.popup();
    };
    StoreLog.prototype.showBuyState = function () {
        var nameText = this.storeData[this.m_list.selectedIndex].name;
        GameEvent.LOG_info = '你获得了' + nameText;
        GameEvent.LOG_name = 'Info';
        GameEvent.LOG_url = 'storeItem/' + this.storeData[this.m_list.selectedIndex].res + '.png';
        Global.dispatchEvent(GameEvent.SHOW_LOG);
    };
    return StoreLog;
}(StoreLogUI));
//# sourceMappingURL=StoreLog.js.map