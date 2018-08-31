import StoreLogUI = ui.log.store.StoreLogUI;
class ShoppingLog extends StoreLogUI {
    public constructor() {
        super();
        this.shoppingLogInit();
    }

    private itemArr: Array<any> = this.m_list.cells;
    public shoppingLogInit() {
        this.m_list.scrollBar.hide = true;//隐藏列表的滚动条。
        this.m_list.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.m_list.scrollBar.elasticDistance = 30;//设置橡皮筋极限距离。
        this.m_list.cacheContent = true;
        this.m_list.scrollBar.rollRatio = 0.8

        for (var m: number = 0; m < this.itemArr.length; m++) {
            this.itemArr[m].m_label.text = 'NO.' + m.toString();
        }
        this.m_list.array = this.itemArr;
        this.m_list.refresh();
        this.on(Laya.Event.CLICK, this, this.touchHandle);
        // this.m_list.scrollBar.changeHandler=new Laya.Handler(this,this.getListPos);

        this.m_list.selectHandler = new Laya.Handler(this, this.selectHandle);
        this.m_list.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin)
        this.m_list.on(Laya.Event.MOUSE_UP, this, this.touchEnd);
        // this.m_list.on(Laya.Event.MOUSE_OUT, this, this.touchOut);

        this.closeBut.name = Dialog.CLOSE;

        Global.addEventListener(GameEvent.SHWO_BUY_CONFIRM, this, this.showBuyConfirm);
        Global.addEventListener(GameEvent.SHWO_BUY_STATE, this, this.showBuyState);

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
        switch (_target) {
            case this.rightBut:
                this.tweenPage('right')
                break;
            case this.leftBut:
                this.m_list.tweenTo(0, 300);
                this.tweenPage('left')
                break;
        }
    }

    private scrollPage: number = 0;
    private now_index: number = 0;
    private tweenPage(side: string) {
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
                this.m_list.tweenTo(this.now_index, 300)
                // this.m_list.page += 1;
                break;
        }
    }

    private getListPos(num) {
        console.log(num)
        if (num > 300) {
            this.m_list.tweenTo(4, 300);
        }
        // console.log(this.m_list.totalPage)
    }

    private selectHandle(selectIdex) {
        for (var i: number = 0; i < this.itemArr.length; i++) {
            this.itemArr[i].selectedBg.visible = false;
        }
        console.log(selectIdex);
        var item: any = this.itemArr[selectIdex];
        item.selectedBg.visible = true

        this.updateInfoText(selectIdex)
    }

    private updateInfoText(selectIdex) {
        // var item:any=this.itemArr[selectIdex];
        var text: string = '食物' + selectIdex.toString();
        this.titleInfo.changeText(text);
    }

    private showBuyConfirm() {
        var nameText: string = this.titleInfo.text;
        this.buyConfirmLog.setInfo(nameText);

        this.buyConfirmLog.visible = true;
        this.buyConfirmLog.popup();
    }

    private showBuyState() {
        var nameText: string = this.titleInfo.text;
        this.infoLog.infoText.changeText(nameText)
        this.infoLog.visible = true;
        this.infoLog.popup();

        Laya.timer.once(2000, this, function () {
            this.infoLog.close();
        })
    }
}