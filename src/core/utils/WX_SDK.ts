class WX_SDK {
    public static getInstance(): WX_SDK {
        if (WX_SDK._instance == null) {
            WX_SDK._instance = new WX_SDK();
        }
        return WX_SDK._instance;
    }

    private static _instance = null;
    public onShow(callBack: Function = null): void {
        var wx = Laya.Browser.window.wx;
        wx.onShow(callBack);

        console.log('onShow');
    }

    private url: string = 'http://192.168.2.40:8080/';
    private textID: number = 1
    public login() {
        var wx = Laya.Browser.window.wx;
        var code: string = '';
        wx.login({
            success: function (e) {
                console.log(e);
                code = e.code;
                WX_SDK.getInstance().getTaken(code);
            }
        })

    }

    public getTaken(code: string) {
        var wx = Laya.Browser.window.wx;
        var questUrl = '/oAuthToken/token';
        wx.request({
            url: WX_SDK.getInstance().url + questUrl,
            data: {
                js_code: code,
            },
            success: function (res) {
                console.log('success' + res)
            },
            fail: function (error) {
                console.log('fail' + error)
            }
        })
    }

    public getCoin() {
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
        })
    }

    public collectCoin() {
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
    }

    public getDraw(){
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
    }

    public getLocation(callBack: Function = null): any {
        /**
         * <p>獲取地理位置信息</p>
         * @param	callBack  成功回調。
         */
        var wx = Laya.Browser.window.wx;
        var locationInfo: any = {};
        var callBack = callBack;
        wx.getLocation({
            success: function (e) {
                locationInfo = e;

                if (callBack) {
                    callBack(e)
                }
            },
            fail: function () {

            }
        })
    }

    public screenCapture(obj: Laya.Sprite, _x: number, _y: number, saveToFile: boolean = false): string {
        /**
         * <p>截图返回URL，或保存到本地</p>
         * @param	obj  截取对象。
         * @param	_x X轴坐标。
         * @param	_y Y轴坐标。
         * @param	saveToFile 是否保存到本地
         */
        var _width = obj.width;
        var _height = obj.height
        var htmlC = obj.drawToCanvas(_width, _height, _x, _y);
        var canvas = htmlC.getCanvas();
        var url = canvas.toDataURL();
        var filePathUrl: string = ''

        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: _width,
            height: _height,
            destWidth: _width,
            destHeight: _height,
            success: function (res) {
                filePathUrl = res.tempFilePath;

                if (saveToFile == true) WX_SDK.getInstance().urltoFilePath(filePathUrl);
            }
        });

        return filePathUrl;
    }

    public urltoFilePath(url: string) {
        /**
        * <p>保存图片到本地</p>
        * @param	url  图片地址，不支持网络图片
        */
        var wx = Laya.Browser.window.wx;
        wx.saveImageToPhotosAlbum({
            filePath: url,
            fail: function (err) {
                console.log(err)
            },
            success: function (e) {
                console.log(e)
                Global.dispatchEvent(GameEvent.SAVE_PIC_COMP);//保存图片成功
            }
        });
    }

    public showConsol() {
        var wx = Laya.Browser.window.wx;
        wx.setEnableDebug({
            enableDebug: true
        });

        // wx.getSystemInfo({
        //     success:function(e){
        //         console.log("性能级别:"+e['brand']);
        //     }
        // })
    }

    public setStorage(_key: string, _data: Object) {
        var wx = Laya.Browser.window.wx;
        wx.setStorage({
            key: _key,
            data: _data,
            success: function (e) {
                console.log('setStorage' + e);
            }
        })
    }

    public getStorage(_key: string) {
        var wx = Laya.Browser.window.wx;
        wx.getStorage({
            key: _key,
            success: function (e) {
                console.log('getStorage' + e.data);
            }
        })
    }
}