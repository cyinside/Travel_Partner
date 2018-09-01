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
var indoorSceneUi = ui.indoor.IndoorSceneUI;
var IndoorScene = /** @class */ (function (_super) {
    __extends(IndoorScene, _super);
    function IndoorScene() {
        var _this = _super.call(this) || this;
        _this.indoorSceneInit();
        return _this;
    }
    IndoorScene.prototype.indoorSceneInit = function () {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;
        var res_v = GameConfig.res_Type.toString() + 'x';
        this.bg4.skin = res_v + '/4.jpg';
        if (GameConfig.res_Type == 3) {
            this.topUnit.top = this.topUnit.top * 3.5;
            this.FireAni.y = this.FireAni.y + 145;
        }
    };
    return IndoorScene;
}(indoorSceneUi));
//# sourceMappingURL=IndoorScene.js.map