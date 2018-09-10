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
var LoadingViewUI = ui.Loading.LoadingViewUI;
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        var _this = _super.call(this) || this;
        _this.num = 0;
        _this.loadingViewInit();
        return _this;
    }
    LoadingView.prototype.loadingViewInit = function () {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;
        // this.LoadBg.x = this.width/2;
        this.LoadBg.y = this.height / 2;
        var _x = 150;
        if (GameConfig.res_Type == 3) {
            this.loadBarBox.y = this.loadBarBox.y + _x;
            this.roleIcon1.y = this.roleIcon1.y + _x;
            this.roleIcon2.y = this.roleIcon2.y + _x;
        }
        Laya.timer.frameLoop(1, this, this.animateFrameRateBased);
        // this.on(Laya.Event.CLICK,this,this.loadingProgress)
    };
    LoadingView.prototype.animateFrameRateBased = function () {
        this.roleIcon1.rotation += 1;
        this.roleIcon2.rotation += 1;
        this.num++;
        if (this.num > 30) {
            this.loadText.changeText('加载中.');
        }
        if (this.num > 60) {
            this.loadText.changeText('加载中..');
        }
        if (this.num > 90) {
            this.loadText.changeText('加载中...');
            this.num = 0;
        }
    };
    LoadingView.prototype.loadingProgress = function (progress) {
        if (progress === void 0) { progress = null; }
        var num = ~~(progress * 100);
        this.numText.text = num.toString() + '%';
        this.loadBarMask.x = this.loadBar.x + 410 * progress;
        // console.log(this.loadBarMask.x)
    };
    return LoadingView;
}(LoadingViewUI));
//# sourceMappingURL=LoadingView.js.map