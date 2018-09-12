import StoreLogUI = ui.log.store.StoreLogUI;
class StoreLog1 extends StoreLogUI {
    public constructor() {
        super();
        this.StoreLogInit();
    }

    // private itemArr: Array<any> = this.m_list.cells;
    private storeData: Array<any> = GameData.storeDataArr["prop"];
    public StoreLogInit() {
        this.m_list1.scrollBar.hide = true;//隐藏列表的滚动条。
        this.m_list1.scrollBar.rollRatio = 0.8;

        this.setList()

        // this.selectHandle(0);//默认选中;

        // this.m_list.refresh();
        this.on(Laya.Event.CLICK, this, this.touchHandle);
        // this.m_list.scrollBar.changeHandler=new Laya.Handler(this,this.getListPos);

        this.m_list1.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin)
        this.m_list1.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        // this.m_list.on(Laya.Event.MOUSE_OUT, this, this.touchOut);

        this.closeBut.name = Dialog.CLOSE;

        this.leftBut.alpha = 0;

        Global.addEventListener(GameEvent.SHWO_BUY_CONFIRM, this, this.showBuyConfirm);
        Global.addEventListener(GameEvent.SHWO_BUY_STATE, this, this.showBuyState);
    }

    private itemArr1: Array<any> = [];
    private _listItems: Array<any> = [];
    private setList() {
        this.m_list1.repeatX = 5;
        this.itemArr1 = this.setGroup(this.storeData, 4);
        console.log(this.itemArr1)

        this._listItems = this.m_list1.cells;
        var _item: Laya.Sprite;
        var child:any=null;
        for (var i: number = 0; i < this.itemArr1.length; i++) {
            _item = this._listItems[i];
            for (var j: number = 0; j < this.itemArr1[j].length; j++) {
                // console.log(this.itemArr1[i][j])
                child = _item.getChildByName("i_" + j)

                if (i == 5 && j > 1) {
                    child.visible = false;//隐藏最后两个
                }else{
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
    }

    private setGroup(array, subGroupLength) {
        var index = 0;
        var newArray = [];

        while (index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }

        return newArray;
    }


    private b_X: number = 0;
    private touchBegin(e: Laya.Event) {
        this.b_X = e.stageX;
        // console.log('b:' + this.b_X)
    }

    private e_X: number = 0;
    private touchEnd(e: Laya.Event) {
        this.e_X = e.stageX;
        // console.log('e:' + this.e_X)
        this.dragHandle()
    }

    // private touchOut(e: Laya.Event){
    //     // console.log('mouse out')
    //     this.e_X = e.stageX;
    //     // console.log('e:' + this.e_X)
    //     this.dragHandle()
    // }

    private dragHandle() {
        var _dis: number = this.e_X - this.b_X;
        if (_dis > 0 && _dis > 5) {
            // console.log('left');
            this.tweenPage('left')
        }
        else if (_dis < 0 && _dis < -5) {
            // console.log('right')
            this.tweenPage('right')
        }
    }

    private touchHandle(e: Laya.Event) {
        var _target = e.target;
        if (_target.item_id) {
            this.selectHandle(_target);
        }

        switch (_target) {
            case this.rightBut:
                this.tweenPage('right')
                break;
            case this.leftBut:
                this.m_list1.tweenTo(0, 300);
                this.tweenPage('left')
                break;
        }
    }

    private scrollPage: number = 0;
    private now_index: number = 0;
    private tweenPage(side: string) {
        var indexItem = 1
        switch (side) {
            case 'left':
                this.scrollPage -= 1;
                this.now_index -= indexItem;
                if (this.now_index < 0) {
                    this.now_index = 0;
                }

                if (this.now_index == 0) {
                    this.hideBut("left")
                } else {
                    this.showBut('left')
                }
                if (this.now_index == 6) {
                    this.hideBut('right');
                } else {
                    this.showBut('right')
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
                    this.hideBut("left")
                } else {
                    this.showBut('left')
                }
                if (this.now_index == 6) {
                    this.hideBut('right');
                } else {
                    this.showBut('right')
                }

                this.m_list1.tweenTo(this.now_index, 300)
                // this.m_list.page += 1;
                break;
        }
    }

    private hideBut(dir: string) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 0 }, 400, Laya.Ease.sineIn);
                break;
        }
    }

    private showBut(dir: string) {
        switch (dir) {
            case "left":
                Laya.Tween.to(this.leftBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
            case "right":
                Laya.Tween.to(this.rightBut, { alpha: 1 }, 400, Laya.Ease.sineIn);
                break;
        }
    }

    private now_selectItem: ListItem;
    private selectHandle(selectItem: ListItem) {
        if (this.now_selectItem == selectItem) {

        } else {
            this.m_list1.selection.getChildByName('i_0').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_1').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_2').selectedBg.visible = false;
            this.m_list1.selection.getChildByName('i_3').selectedBg.visible = false;

            this.now_selectItem = selectItem;
        }

        selectItem.selectedBg.visible = true;
        this.updateInfoText(selectItem)
    }

    private updateInfoText(selectItem: ListItem) {
        var _item = this.getNowInfo();

        var type = _item.type
        var text: string = ''

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

        var t_text: string = text + '：' + _item.name;
        this.titleInfo.changeText(t_text);
        this.descText1.changeText(_item.desc1);
        this.descText2.changeText(_item.desc2);
    }

    private showBuyConfirm() {
        var _item = this.getNowInfo();

        var _name: string = _item.name;
        var _price: string = _item.price;

        var infoText: string = "确定花费" + _price + '铜钱购买' + _name + '？';
        this.buyConfirmLog.setInfo(infoText);

        this.buyConfirmLog.visible = true;
        this.buyConfirmLog.popup();
    }

    private showBuyState() {
        var _item = this.getNowInfo();

        GameEvent.LOG_info = '你获得了' + _item.name;
        GameEvent.LOG_name = 'Info';
        GameEvent.LOG_url = 'storeItem/' + _item.res + '.png';
        Global.dispatchEvent(GameEvent.SHOW_LOG);
    }


    private getNowInfo() {
        var index: string = this.now_selectItem.item_id;
        var _i: number = parseInt(index.substr(0, 1));
        var _j: number = parseInt(index.substr(1, 1));
        return this.itemArr1[_i][_j];
    }
}