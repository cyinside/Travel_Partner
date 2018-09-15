import DrawSceneUI = ui.draw.DrawSceneUI;
class DrawScene extends DrawSceneUI {
    public constructor() {
        super()
        this.drawSceneInit();
    }

    private getPrize_timeLine: Laya.TimeLine;
    private coin1_timeLine: Laya.TimeLine;
    private coin2_timeLine: Laya.TimeLine;
    private coin3_timeLine: Laya.TimeLine;
    private drawSceneInit() {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;

        var res_v: string = GameConfig.res_Type.toString() + 'x';
        this.drawBg.skin = res_v + '/5.jpg';

        var _y: number = 145;
        if (GameConfig.res_Type == 3) {
            this.posBox.y += _y;
        }

        this.getPrize_timeLine = new Laya.TimeLine;
        this.getPrize_timeLine.to(this.turtleIcon, { x: 200 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 250 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 200 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 250 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 225 }, 300, Laya.Ease.sineInOut);
        this.getPrize_timeLine.on(Laya.Event.COMPLETE, this, this.showResult)

        this.coin1_timeLine = new Laya.TimeLine;
        this.coin1_timeLine.to(this.coinArr._childs[0], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[0], { scaleX: 1, scaleY: 1 }, 600, Laya.Ease.sineInOut);

        this.coin2_timeLine = new Laya.TimeLine;
        this.coin2_timeLine.to(this.coinArr._childs[1], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[1], { scaleX: 1, scaleY: 1 }, 600, Laya.Ease.sineInOut);

        this.coin3_timeLine = new Laya.TimeLine;
        this.coin3_timeLine.to(this.coinArr._childs[2], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[2], { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineInOut);
        this.coin3_timeLine.on(Laya.Event.COMPLETE, this, this.showResultText)

        this.on(Laya.Event.CLICK, this, this.touchHandle);
    }

    private touchHandle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.box1:
                this.startDraw();
                break;
        }
    }

    private startDraw() {
        // WX_SDK.getInstance().getDraw();
        this.getPrizeTween();
    }

    private showResult() {
        this.box1.visible = false;
        this.box2.visible = true;

        this.coinTween();
    }

    private getPrizeTween() {
        this.getPrize_timeLine.play(0, false);
    }

    private coinTween() {
        this.coin1_timeLine.play(0, false)
        Laya.timer.once(200, this, function () {
            this.coin2_timeLine.play(0, false)
        })
        Laya.timer.once(400, this, function () {
            this.coin3_timeLine.play(0, false)
        })
    }

    private showResultText(){
        Laya.Tween.to(this.resultText,{alpha:1},800,Laya.Ease.sineInOut);
    }

    private resetAll(){
        for(var i:number=0;i<this.coinArr._childs.length;i++){
            this.coinArr._childs[i].alpha=0;
            this.coinArr._childs[i].scale(0.6,0.6);
        }

        this.coin1_timeLine.reset();
        this.coin2_timeLine.reset();
        this.coin3_timeLine.reset();
    }
}