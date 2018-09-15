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
var DrawSceneUI = ui.draw.DrawSceneUI;
var DrawScene = /** @class */ (function (_super) {
    __extends(DrawScene, _super);
    function DrawScene() {
        var _this = _super.call(this) || this;
        _this.drawSceneInit();
        return _this;
    }
    DrawScene.prototype.drawSceneInit = function () {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;
        var res_v = GameConfig.res_Type.toString() + 'x';
        this.drawBg.skin = res_v + '/5.jpg';
        var _y = 145;
        if (GameConfig.res_Type == 3) {
            this.posBox.y += _y;
        }
        this.getPrize_timeLine = new Laya.TimeLine;
        this.getPrize_timeLine.to(this.turtleIcon, { x: 200 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 250 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 200 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 250 }, 100, Laya.Ease.sineInOut)
            .to(this.turtleIcon, { x: 225 }, 300, Laya.Ease.sineInOut);
        this.getPrize_timeLine.on(Laya.Event.COMPLETE, this, this.showResult);
        this.coin1_timeLine = new Laya.TimeLine;
        this.coin1_timeLine.to(this.coinArr._childs[0], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[0], { scaleX: 1, scaleY: 1 }, 600, Laya.Ease.sineInOut);
        this.coin2_timeLine = new Laya.TimeLine;
        this.coin2_timeLine.to(this.coinArr._childs[1], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[1], { scaleX: 1, scaleY: 1 }, 600, Laya.Ease.sineInOut);
        this.coin3_timeLine = new Laya.TimeLine;
        this.coin3_timeLine.to(this.coinArr._childs[2], { scaleX: 1.3, scaleY: 1.3, alpha: 1 }, 600, Laya.Ease.sineInOut).to(this.coinArr._childs[2], { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineInOut);
        this.coin3_timeLine.on(Laya.Event.COMPLETE, this, this.showResultText);
        this.on(Laya.Event.CLICK, this, this.touchHandle);
    };
    DrawScene.prototype.touchHandle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.box1:
                this.startDraw();
                break;
        }
    };
    DrawScene.prototype.startDraw = function () {
        // WX_SDK.getInstance().getDraw();
        this.getPrizeTween();
    };
    DrawScene.prototype.showResult = function () {
        this.box1.visible = false;
        this.box2.visible = true;
        this.coinTween();
    };
    DrawScene.prototype.getPrizeTween = function () {
        this.getPrize_timeLine.play(0, false);
    };
    DrawScene.prototype.coinTween = function () {
        this.coin1_timeLine.play(0, false);
        Laya.timer.once(200, this, function () {
            this.coin2_timeLine.play(0, false);
        });
        Laya.timer.once(400, this, function () {
            this.coin3_timeLine.play(0, false);
        });
    };
    DrawScene.prototype.showResultText = function () {
        Laya.Tween.to(this.resultText, { alpha: 1 }, 800, Laya.Ease.sineInOut);
    };
    DrawScene.prototype.resetAll = function () {
        for (var i = 0; i < this.coinArr._childs.length; i++) {
            this.coinArr._childs[i].alpha = 0;
            this.coinArr._childs[i].scale(0.6, 0.6);
        }
        this.coin1_timeLine.reset();
        this.coin2_timeLine.reset();
        this.coin3_timeLine.reset();
    };
    return DrawScene;
}(DrawSceneUI));
//# sourceMappingURL=DrawScene.js.map