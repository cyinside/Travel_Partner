var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainSceneUI = ui.MainSceneUI;
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.sceneInit = function () {
        this.height = GameConfig.gameHeight;
        //隐藏滚动条
        this.bgPanel.hScrollBarSkin = '';
        this.bgPanel.height = this.height;
        var res_v = GameConfig.res_Type.toString() + 'x';
        this.bg1.skin = res_v + '/1.jpg';
        this.bg2.skin = res_v + '/2.jpg';
        this.bg3.skin = res_v + '/3.jpg';
        if (GameConfig.res_Type == 3) {
            this.topUnit.top = this.topUnit.top * 4;
        }
        console.log(this.topUnit.top);
    };
    return MainScene;
}(MainSceneUI));
//# sourceMappingURL=MainScene.js.map