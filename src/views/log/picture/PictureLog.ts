import PictureLogUI = ui.log.picture.PictureLogUI;
class PictureLog extends PictureLogUI {
    public constructor() {
        super();
        this.pictureLogInit();
    }

    private itemArr: Array<any> = this.m_list.cells;
    private pictureLogInit() {
        this.m_list.scrollBar.hide = true;//隐藏列表的滚动条。
        this.m_list.scrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.m_list.scrollBar.elasticDistance = 30;//设置橡皮筋极限距离。
        this.m_list.cacheContent = true;
        this.m_list.scrollBar.rollRatio = 0.8;

        this.m_list.array = this.itemArr;
        this.m_list.refresh();
        this.on(Laya.Event.CLICK, this, this.touchHandle);

        this.m_list.selectHandler = new Laya.Handler(this, this.selectHandle);
        this.m_list.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin)
        this.m_list.on(Laya.Event.MOUSE_UP, this, this.touchEnd);

        this.closeBut.name = Dialog.CLOSE;

        Global.addEventListener(GameEvent.SHOW_DELPIC_CONFIRM,this,this.showDelCon);
        Global.addEventListener(GameEvent.SAVE_PIC_COMP,this,this.showStateInfo);
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


    private scrollPage: number = 0;
    private now_index: number = 0;
    private max_index: number = 18;
    private tweenPage(side: string) {
        var indexItem = 6;
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
                if (this.now_index > this.max_index) {
                    this.now_index = this.max_index;
                }
                this.m_list.tweenTo(this.now_index, 300)
                // this.m_list.page += 1;
                break;
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

    private selectHandle(selectIdex) {
        // console.log(selectIdex);
        // var item: any = this.itemArr[selectIdex];
        this.picInfo.visible = true;
        this.picInfo.popup();
    }

    private showDelCon(){
        this.picDelConfrom.visible=true;
        this.picDelConfrom.popup();
    }

    private showStateInfo(){
        // this.infoLog.infoText.changeText('保存成功');
        // this.infoLog.visible=true;
        // this.infoLog.popup();

        // this.infoLog.showInfo('保存成功')

        GameEvent.LOG_info='保存成功';
        GameEvent.LOG_name='Info'
        Global.dispatchEvent(GameEvent.SHOW_LOG);
    }

}
