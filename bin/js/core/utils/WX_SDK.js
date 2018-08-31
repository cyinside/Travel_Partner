var WX_SDK = /** @class */ (function () {
    function WX_SDK() {
    }
    WX_SDK.getInstance = function () {
        if (WX_SDK._instance == null) {
            WX_SDK._instance = new WX_SDK();
        }
        return WX_SDK._instance;
    };
    WX_SDK.prototype.onShow = function (callBack) {
        if (callBack === void 0) { callBack = null; }
        var wx = Laya.Browser.window.wx;
        wx.onShow(callBack);
        console.log('onShow');
    };
    WX_SDK.prototype.getLocation = function (callBack) {
        if (callBack === void 0) { callBack = null; }
        /**
         * <p>獲取地理位置信息</p>
         * @param	callBack  成功回調。
         */
        var wx = Laya.Browser.window.wx;
        var locationInfo = {};
        var callBack = callBack;
        wx.getLocation({
            success: function (e) {
                locationInfo = e;
                if (callBack) {
                    callBack(e);
                }
            },
            fail: function () {
            }
        });
    };
    WX_SDK.prototype.screenCapture = function (obj, _x, _y, saveToFile) {
        /**
         * <p>截图返回URL，或保存到本地</p>
         * @param	obj  截取对象。
         * @param	_x X轴坐标。
         * @param	_y Y轴坐标。
         * @param	saveToFile 是否保存到本地
         */
        if (saveToFile === void 0) { saveToFile = false; }
        var htmlC = obj.drawToCanvas(750, 1335, _x, _y);
        var canvas = htmlC.getCanvas();
        var url = canvas.toDataURL();
        var filePathUrl = '';
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: 750,
            height: 1335,
            destWidth: 750,
            destHeight: 1335,
            success: function (res) {
                filePathUrl = res.tempFilePath;
                if (saveToFile == true)
                    WX_SDK.getInstance().urltoFilePath(filePathUrl);
            }
        });
        return filePathUrl;
    };
    WX_SDK.prototype.urltoFilePath = function (url) {
        /**
        * <p>保存图片到本地</p>
        * @param	url  图片地址，不支持网络图片
        */
        var wx = Laya.Browser.window.wx;
        wx.saveImageToPhotosAlbum({
            filePath: url,
            fail: function (err) {
                console.log(err);
            },
            success: function (e) {
                console.log(e);
            }
        });
    };
    WX_SDK.prototype.showConsol = function () {
        var wx = Laya.Browser.window.wx;
        wx.setEnableDebug({
            enableDebug: true
        });
        // wx.getSystemInfo({
        //     success:function(e){
        //         console.log("性能级别:"+e['brand']);
        //     }
        // })
    };
    WX_SDK.prototype.setStorage = function (_key, _data) {
        var wx = Laya.Browser.window.wx;
        wx.setStorage({
            key: _key,
            data: _data,
            success: function (e) {
                console.log('setStorage' + e);
            }
        });
    };
    WX_SDK.prototype.getStorage = function (_key) {
        var wx = Laya.Browser.window.wx;
        wx.getStorage({
            key: _key,
            success: function (e) {
                console.log('getStorage' + e.data);
            }
        });
    };
    WX_SDK._instance = null;
    return WX_SDK;
}());
//# sourceMappingURL=WX_SDK.js.map