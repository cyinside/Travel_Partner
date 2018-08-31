import MainSceneUI = ui.main.MainSceneUI;
class MainScene extends MainSceneUI {
    public constructor() {
        super();
        this.sceneInit();
    }

    public sceneInit() {
        this.height = GameConfig.gameHeight;

        //隐藏滚动条
        this.bgPanel.hScrollBarSkin = '';
        this.bgPanel.height = this.height;


        var res_v: string = GameConfig.res_Type.toString() + 'x';
        this.bg1.skin = res_v + '/1.jpg';
        this.bg2.skin = res_v + '/2.jpg';
        this.bg3.skin = res_v + '/3.jpg';

        if (GameConfig.res_Type == 3) {
            this.topUnit.top = this.topUnit.top * 4;
            this.coinBox.top = this.coinBox.top + 150;
        }

        console.log(this.topUnit.top);


        Laya.timer.once(300,this,function(){
            this.bgPanel.hScrollBar.value=400;
            this.visible=true;
        })//先定滚动初始位置，再显示

        this.setCoin(GameSetting.coinNumber);//设定金币数量

        Laya.loader.load("main/LeafView.part", Handler.create(this, this.onAssetsLoaded), null, Loader.JSON);

        Global.addEventListener(GameEvent.SHOW_LOG, this, this.showLog);
    }

    private onAssetsLoaded() {
        this.LeafView.autoPlay = false;
        this.LeafView.stop();
        this.bgPanel.addChild(this.LeafView);
        this.bgPanel.hScrollBar.on(Laya.Event.CHANGE, this, this.changeHandle);
    }

    private coinArr: Array<any> = [];
    private coinItemArr1: Array<any> = [];
    private coinNum: number = 0;
    private setCoin(num: number) {
        this.coinArr = this.coinBox._childs;

        if (num && num <= this.coinBox.numChildren) {
            this.coinNum = num;
            for (var i: number = 0; i < num; i++) {
                this.coinArr[i].coinInit();
            }
        }

        this.coinBox.mouseEnabled = true;
        this.coinBox.mouseThrough = false;
        this.coinBox.on(Laya.Event.MOUSE_MOVE, this, this.coinHandle);
        this.coinBox.on(Laya.Event.MOUSE_UP, this, this.treeTouch)
    }
    private changeHandle() {
        if (this.bgPanel.contains(this.LeafView)) {
            this.bgPanel.removeChild(this.LeafView);
            this.LeafView.emitter.clear()
            this.treeTween_OFF();
        }
        //移动前景
        // var bgPanel_X: number = this.bgPanel.hScrollBar.value;
        // // console.log(bgPanel_X)
        // if (bgPanel_X > 1300 && bgPanel_X <= 1470) {
        //     if (this.leafBig.right > 0) {
        //         return;
        //     }
        //     this.leafBig.right += 0.8;
        // } else if (bgPanel_X <= 1300 && bgPanel_X > 0) {
        //     if (this.leafBig.right < -20) {
        //         return;
        //     }
        //     this.leafBig.right -= 0.8;
        // }
        // console.log(this.leafBig.right)
    }

    private treeTouch() {
        if (!this.bgPanel.contains(this.LeafView)) {
            this.bgPanel.addChild(this.LeafView);
        }

        this.treeTween_ON();
        Laya.timer.once(300, this, this.treeTween_OFF);
    }

    private treeTween_ON() {
        this.LeafView.emitter.start();
        this.LeafView.play();
    }

    private treeTween_OFF() {
        this.LeafView.stop();
    }
    private coinHandle(e: Laya.Event) {
        var _coin = e.target;
        if (this.coinNum > 0) {
            this.bgPanel.hScrollBar.stopScroll()
            if (_coin == this.coinBox) {
                return;
            } else {
                this.coinNum--;
                console.log(this.coinNum);

                _coin.changeCoin();
                this.startTween(_coin);

                this.addCoinsNum();
            }
        } else {
            // this.coinBox.mouseEnabled=false;
            // this.coinBox.mouseThrough=true;
        }
    }

    public startTween(role: any) {
        Laya.Tween.to(role, { scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 1000, Laya.Ease.sineOut, new Laya.Handler(this, function () {
            role.recycleCoin(role);
        }));
    }

    public addCoinsNum() {
        this.topUnit.textTweem_UP();
    }

    // private num: number = 0;
    // private showLog() {
    //     // this.settingLog.visible=true;
    //     // this.settingLog.popup();

    //     this.storeLog.visible = true;
    //     this.storeLog.popup()
    // }

    private showLog() {
        var name = GameEvent.LOG_name;
        switch (name) {
            case 'Store':
                this.storeLog.visible = true;
                this.storeLog.popup()
                break;
            case 'Setting':
                this.settingLog.visible = true;
                this.settingLog.popup()
                break;
        }
    }

}