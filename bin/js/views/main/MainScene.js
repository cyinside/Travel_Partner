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
var MainSceneUI = ui.main.MainSceneUI;
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.coinArr = [];
        _this.coinItemArr1 = [];
        _this.coinNum = 0;
        _this.sceneInit();
        return _this;
    }
    MainScene.prototype.sceneInit = function () {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;
        //隐藏滚动条
        this.bgPanel.hScrollBarSkin = '';
        this.bgPanel.height = this.height;
        var res_v = GameConfig.res_Type.toString() + 'x';
        this.bg1.skin = res_v + '/1.jpg';
        this.bg2.skin = res_v + '/2.jpg';
        this.bg3.skin = res_v + '/3.jpg';
        var _x = 150;
        if (GameConfig.res_Type == 3) {
            this.topUnit.top = this.topUnit.top * 3.5;
            this.coinBox.top = this.coinBox.top + _x;
            this.waveView.y = this.waveView.y + _x;
            this.tipsAni.y = this.tipsAni.y + _x;
            this.indoorRect.y = this.indoorRect.y + _x;
        }
        console.log(this.topUnit.top);
        Laya.timer.once(300, this, function () {
            this.bgPanel.hScrollBar.value = 400;
            this.visible = true;
        }); //先定滚动初始位置，再显示
        this.setCoin(GameSetting.coinNumber); //设定金币数量
        Laya.loader.load("main/LeafView.part", Handler.create(this, this.onAssetsLoaded), null, Loader.JSON);
        // Global.addEventListener(GameEvent.SHOW_LOG, this, this.showLog);
        this.on(Laya.Event.CLICK, this, this.touchHandle);
    };
    MainScene.prototype.touchHandle = function (e) {
        switch (e.target) {
            case this.indoorRect:
                SceneUtil.changeScene(2);
                break;
        }
    };
    MainScene.prototype.onAssetsLoaded = function () {
        this.LeafView.autoPlay = false;
        this.LeafView.stop();
        this.bgPanel.addChild(this.LeafView);
        this.bgPanel.hScrollBar.on(Laya.Event.CHANGE, this, this.changeHandle);
    };
    MainScene.prototype.setCoin = function (num) {
        this.coinArr = this.coinBox._childs;
        if (num && num <= this.coinBox.numChildren) {
            this.coinNum = num;
            for (var i = 0; i < num; i++) {
                this.coinArr[i].coinInit();
            }
        }
        this.coinBox.mouseEnabled = true;
        this.coinBox.mouseThrough = false;
        this.coinBox.on(Laya.Event.MOUSE_MOVE, this, this.coinHandle);
        this.coinBox.on(Laya.Event.MOUSE_UP, this, this.treeTouch);
    };
    MainScene.prototype.changeHandle = function () {
        if (this.bgPanel.contains(this.LeafView)) {
            this.bgPanel.removeChild(this.LeafView);
            this.LeafView.emitter.clear();
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
    };
    MainScene.prototype.treeTouch = function () {
        if (!this.bgPanel.contains(this.LeafView)) {
            this.bgPanel.addChild(this.LeafView);
        }
        this.treeTween_ON();
        Laya.timer.once(300, this, this.treeTween_OFF);
    };
    MainScene.prototype.treeTween_ON = function () {
        this.LeafView.emitter.start();
        this.LeafView.play();
    };
    MainScene.prototype.treeTween_OFF = function () {
        this.LeafView.stop();
    };
    MainScene.prototype.coinHandle = function (e) {
        var _coin = e.target;
        if (this.coinNum > 0) {
            this.bgPanel.hScrollBar.stopScroll();
            if (_coin == this.coinBox) {
                return;
            }
            else {
                this.coinNum--;
                console.log(this.coinNum);
                _coin.changeCoin();
                this.startTween(_coin);
                this.addCoinsNum();
            }
        }
        else {
            // this.coinBox.mouseEnabled=false;
            // this.coinBox.mouseThrough=true;
        }
    };
    MainScene.prototype.startTween = function (role) {
        Laya.Tween.to(role, { scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 1000, Laya.Ease.sineOut, new Laya.Handler(this, function () {
            role.recycleCoin(role);
        }));
    };
    MainScene.prototype.addCoinsNum = function () {
        this.topUnit.textTweem_UP();
    };
    return MainScene;
}(MainSceneUI));
//# sourceMappingURL=MainScene.js.map