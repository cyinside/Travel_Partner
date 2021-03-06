var WX_SDK = /** @class */ (function () {
    function WX_SDK() {
        this.url = 'http://192.168.2.40:8080/';
        this.textID = 1;
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
    WX_SDK.prototype.login = function () {
        var wx = Laya.Browser.window.wx;
        var code = '';
        wx.login({
            success: function (e) {
                console.log(e);
                code = e.code;
                WX_SDK.getInstance().getTaken(code);
            }
        });
    };
    WX_SDK.prototype.getTaken = function (code) {
        var wx = Laya.Browser.window.wx;
        var questUrl = '/oAuthToken/token';
        wx.request({
            url: WX_SDK.getInstance().url + questUrl,
            data: {
                js_code: code,
            },
            success: function (res) {
                console.log('success' + res);
            },
            fail: function (error) {
                console.log('fail' + error);
            }
        });
    };
    WX_SDK.prototype.getCoin = function () {
        var wx = Laya.Browser.window.wx;
        var questUrl = '/copper/get-coppers';
        wx.request({
            url: WX_SDK.getInstance().url + questUrl,
            method: 'POST',
            data: {
                openid: '1',
            },
            success: function (res) {
                console.log('getCoinsuccess' + res);
                GameData.coinNumber = res.data.total;
                Global.dispatchEvent(GameEvent.GET_COIN_COMP);
            },
            fail: function (error) {
                console.log('getCoinfail' + error);
            }
        });
    };
    WX_SDK.prototype.collectCoin = function () {
        console.log('collectCoin');
        var wx = Laya.Browser.window.wx;
        var questUrl = '/copper/collect?openid=1';
        wx.request({
            url: WX_SDK.getInstance().url + questUrl,
            method: 'GET',
            data: {
            // openid: 1,
            },
            success: function (res) {
                console.log('collectCoin_success' + res.data.code);
                var data = res.data;
                if (data.code == 0) {
                    Global.dispatchEvent(GameEvent.COLLECT_COIN_COMP);
                }
            },
            fail: function (error) {
                console.log('collectCoin_fail' + error);
            }
        });
    };
    WX_SDK.prototype.getDraw = function () {
        var wx = Laya.Browser.window.wx;
        var questUrl = '/luck-draw/get-data';
        wx.request({
            url: WX_SDK.getInstance().url + questUrl,
            method: 'POST',
            data: {
                openid: 1,
            },
            success: function (res) {
                console.log('getDraw_success' + res.data.code);
                var data = res.data;
            },
            fail: function (error) {
                console.log('getDraw_fail' + error);
            }
        });
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
        if (saveToFile === void 0) { saveToFile = false; }
        /**
         * <p>截图返回URL，或保存到本地</p>
         * @param	obj  截取对象。
         * @param	_x X轴坐标。
         * @param	_y Y轴坐标。
         * @param	saveToFile 是否保存到本地
         */
        var _width = obj.width;
        var _height = obj.height;
        var htmlC = obj.drawToCanvas(_width, _height, _x, _y);
        var canvas = htmlC.getCanvas();
        var url = canvas.toDataURL();
        var filePathUrl = '';
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: _width,
            height: _height,
            destWidth: _width,
            destHeight: _height,
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
                Global.dispatchEvent(GameEvent.SAVE_PIC_COMP); //保存图片成功
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