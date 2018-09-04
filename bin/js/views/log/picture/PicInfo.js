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
var PicInfoUI = ui.log.picture.PicInfoUI;
var PicInfo = /** @class */ (function (_super) {
    __extends(PicInfo, _super);
    function PicInfo() {
        var _this = _super.call(this) || this;
        _this.picInfoInit();
        return _this;
    }
    PicInfo.prototype.picInfoInit = function () {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
    };
    PicInfo.prototype.touchHanle = function (e) {
        var _target = e.target;
        switch (_target) {
            case this.btn_delPic:
                Global.dispatchEvent(GameEvent.SHOW_DELPIC_CONFIRM);
                break;
            case this.btn_savePic:
                console.log('btn_savePic');
                // WX_SDK.getInstance().screenCapture(this.pictureBig,0,0,true);
                Global.dispatchEvent(GameEvent.SAVE_PIC_COMP); //保存图片成功
                break;
        }
    };
    return PicInfo;
}(PicInfoUI));
//# sourceMappingURL=PicInfo.js.map