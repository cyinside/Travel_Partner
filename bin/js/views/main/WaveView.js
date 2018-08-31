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
var WaveViewUI = ui.main.WaveViewUI;
var WaveView = /** @class */ (function (_super) {
    __extends(WaveView, _super);
    function WaveView() {
        var _this = _super.call(this) || this;
        _this.WaveViewInit();
        return _this;
    }
    WaveView.prototype.WaveViewInit = function () {
        this.waveAni.play(0);
        this.waveAni.addLabel('3', 3);
        // this.waveAni.on(Laya.Event.COMPLETE,this,this.aniComp);
        this.waveAni.on(Laya.Event.LABEL, this, this.aniComp);
    };
    WaveView.prototype.aniComp = function () {
        this.waveAni.stop();
        this.scale(1, 1);
        Laya.Tween.to(this.waveAni, { alpha: 0 }, 1200, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            Laya.timer.once(2000, this, this.aniStart);
        }));
    };
    WaveView.prototype.aniStart = function () {
        this.waveAni.gotoAndStop(0);
        this.scale(0.5, 0.5);
        Laya.Tween.to(this.waveAni, { alpha: 1 }, 1000, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            // this.waveAni.alpha=1;
        }));
        this.waveAni.play(0);
        Laya.Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 2500, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            // this.waveAni.alpha=1;
        }));
    };
    return WaveView;
}(WaveViewUI));
//# sourceMappingURL=WaveView.js.map