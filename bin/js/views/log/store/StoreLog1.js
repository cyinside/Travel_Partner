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
var StoreLog1 = /** @class */ (function (_super) {
    __extends(StoreLog1, _super);
    function StoreLog1() {
        var _this = _super.call(this) || this;
        // private itemArr: Array<any> = this.m_list.cells;
        _this.storeData = GameData.storeDataArr["prop"];
        _this.itemArr1 = [];
        _this._listItems = [];
        _this.b_X = 0;
        _this.e_X = 0;
        _this.scrollPage = 0;
        _this.now_index = 0;
        _this.StoreLogInit();
        return _this;
    }
    StoreLog1.prototype.StoreLogInit = function () {
        this.m_list1.scrollBar.hide = true; //隐藏列表的滚动条。
        this.m_list1.scrollBar.rollRatio = 0.8;
        this.setList();
        // this.selectHandle(0);//默认选中;
        // this.m_list.refresh();
        this.on(Laya.Event.CLICK, this, this.touchHandle);
        // this.m_list.scrollBar.changeHandler=new Laya.Handler(this,this.getListPos);
        this.m_list1.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin);
        this.m_list1.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        // this.m_list.on(Laya.Event.MOUSE_OUT, this, this.touchOut);
        this.closeBut.name = Dialog.CLOSE;
        this.leftBut.alpha = 0;
        Global.addEventListener(GameEvent.SHWO_BUY_CONFIRM, this, this.showBuyConfirm);
        Global.addEventListener(GameEvent.SHWO_BUY_STATE, this, this.showBuyState);
    };
    StoreLog1.prototype.setList = function () {
        this.m_list1.repeatX = 5;
        this.itemArr1 = this.setGroup(this.storeData, 4);
        console.log(this.itemArr1);
        this._listItems = this.m_list1.cells;
        var _item;
        var child = null;
        for (var i = 0; i < this.itemArr1.length; i++) {
            _item = this._listItems[i];
            for (var j = 0; j < this.itemArr1[j].length; j++) {
                // console.log(this.itemArr1[i][j])
                child = _item.getChildByName("i_" + j);
                if (i == 5 && j > 1) {
                    child.visible = false; //隐藏最后两个
                }
                else {
                    child.m_label.changeText(this.itemArr1[i][j].name);
                    child.priceText.changeText(this.itemArr1[i][j].price);
                    child.itemImg.skin = 'storeItem/' + this.itemArr1[i][j].res + '.png';
                    child.item_id = i.toString() + j.toString();
                }
            }
        }
        this.m_list1.array = this._listItems;
        this.m_list1.refresh();
        this.m_list1.cacheContent = true;
    };
    StoreLog1.prototype.setGroup = function (array, subGroupLength) {
        var index = 0;
        var newArray = [];
        while (index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }
        return newArray;
    };
    StoreLog1.prototype.touchBegin = function (e) {
        this.b_X = e.stageX;
        // console.log('b:' + this.b_X)
    };
    StoreLog1.prototype.touchEnd = function (e) {
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
    StoreLog1.prototype.dragHandle = function () {
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
    StoreLog1.prototype.touchHandle = function (e) {
        var _target = e.target;
        if (_target.item_id) {
            this.selectHandle(_target);
        }
        switch (_target) {
            case this.rightBut:
                this.tweenPage('right');
                break;
            case this.leftBut:
                this.m_list1.tweenTo(0, 300);
                this.tweenPage('left');
                break;
        }
    };
    StoreLog1.prototype.tweenPage = function (side) {
        var indexItem = 1;
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
                if (this.now_index == 6) {
                    this.hideBut('right');
                }
                else {
                    this.showBut('right');
                }
                this.m_list1.tweenTo(this.now_index, 300);
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
                if (this.now_index == 6) {
                    this.hideBut('right');
                }
                else {
                    this.showBut('right');
                }
                this.m_list1.tweenTo(this.now_index, 300);
                // this.m_list.page += 1;
                break;
        }
    };
    StoreLog1.prototype.hideBut = function (dir) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
        }
    };
    StoreLog1.prototype.showBut = function (dir) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
        }
    };
    StoreLog1.prototype.selectHandle = function (selectItem) {
        if (this.now_selectItem == selectItem) {
        }
        else {
            this.m_list1.selection.getChildByName('i_0').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_1').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_2').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_3').selectedBg.visible = false;
            this.now_selectItem = selectItem;
        }
        selectItem.selectedBg.visible = true;
        this.updateInfoText(selectItem);
    };
    StoreLog1.prototype.updateInfoText = function (selectItem) {
        var _item = this.getNowInfo();
        var type = _item.type;
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
        var t_text = text + '：' + _item.name;
        this.titleInfo.changeText(t_text);
        this.descText1.changeText(_item.desc1);
        this.descText2.changeText(_item.desc2);
    };
    StoreLog1.prototype.showBuyConfirm = function () {
        var _item = this.getNowInfo();
        var _name = _item.name;
        var _price = _item.price;
        var infoText = "确定花费" + _price + '铜钱购买' + _name + '？';
        this.buyConfirmLog.setInfo(infoText);
        this.buyConfirmLog.visible = true;
        this.buyConfirmLog.popup();
    };
    StoreLog1.prototype.showBuyState = function () {
        var _item = this.getNowInfo();
        GameEvent.LOG_info = '你获得了' + _item.name;
        GameEvent.LOG_name = 'Info';
        GameEvent.LOG_url = 'storeItem/' + _item.res + '.png';
        Global.dispatchEvent(GameEvent.SHOW_LOG);
    };
    StoreLog1.prototype.getNowInfo = function () {
        var index = this.now_selectItem.item_id;
        var _i = parseInt(index.substr(0, 1));
        var _j = parseInt(index.substr(1, 1));
        return this.itemArr1[_i][_j];
    };
    return StoreLog1;
}(StoreLogUI));
//# sourceMappingURL=StoreLog1.js.map