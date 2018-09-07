import PrepareLogUI = ui.log.prepare.PrepareLogUI;
class PrepareLog extends PrepareLogUI {
    public constructor() {
        super();
        this.prepareLogInit()
    }

    private prepareLogInit() {
        this.bgPanel.hScrollBar.hide=true;
        this.bgPanel.hScrollBar.elasticBackTime = 200;//设置橡皮筋回弹时间。单位为毫秒。
        this.bgPanel.hScrollBar.elasticDistance = 30;//设置橡皮筋极限距离。

        this.on(Laya.Event.CLICK, this, this.onTouchHandle);
        // this.bgPanel.hScrollBar.on(Laya.Event.CHANGE, this, this.onChange);

        this.bgPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchBegin)
        this.bgPanel.on(Laya.Event.MOUSE_UP, this, this.touchEnd);

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
            if (this.dirState == 1) {
                this.moveTo_Bag();
                this.dirState = 0
            }
        }
        else if (_dis < 0 && _dis < -5) {
            // console.log('right')
            if (this.dirState == 0) {
                this.moveTo_Table();
                this.dirState = 1;
            }
        }
    }

    private onChange(e) {
        console.log(this.bgPanel.hScrollBar.value)
    }

    private dirState: number = 0;
    private onTouchHandle(e: Laya.Event) {
        var _target = e.target
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
                    this.dirState = 0
                }
                break;
        }
    }

    private moveTo_Table() {
        Laya.Tween.to(this.bgPanel.hScrollBar, { value: 757 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, function () {
            this.leftBut.visible = true;
            this.rightBut.visible = false;
        }));
    }

    private moveTo_Bag() {
        Laya.Tween.to(this.bgPanel.hScrollBar, { value: 0 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, function () {
            this.leftBut.visible = false;
            this.rightBut.visible = true;
        }));
    }
}