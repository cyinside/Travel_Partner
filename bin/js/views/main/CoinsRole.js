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
var CoinsRole = /** @class */ (function (_super) {
    __extends(CoinsRole, _super);
    function CoinsRole() {
        var _this = _super.call(this) || this;
        _this.has_touch = false;
        return _this;
    }
    CoinsRole.prototype.coinInit = function () {
        this.graphics.clear();
        var typeNum = RandomUtils.getInstance().limitInteger(1, 2);
        this.loadImage('GameScene/coin' + typeNum + '.png');
        this.alpha = 1;
        this.scale(1, 1);
        this.mouseEnabled = true;
        this.visible = true;
        this.has_touch = false;
    };
    CoinsRole.prototype.changeCoin = function () {
        this.graphics.clear();
        this.loadImage('GameScene/coin3.png');
        this.mouseEnabled = false;
        this.setTouch();
    };
    CoinsRole.prototype.setTouch = function () {
        this.has_touch = true;
    };
    CoinsRole.prototype.recycleCoin = function (role) {
        console.log('coin recycle');
        role.visiale = false;
    };
    return CoinsRole;
}(Laya.Sprite));
//# sourceMappingURL=CoinsRole.js.map