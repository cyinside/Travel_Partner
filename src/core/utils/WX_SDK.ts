class WX_SDK {
     public static getInstance() : WX_SDK{
        if (WX_SDK._instance == null){
            WX_SDK._instance = new WX_SDK();
        }
        return WX_SDK._instance;
    }

    private static _instance = null;

    public onShow(callBack:Function = null):void{
        var wx=Laya.Browser.window.wx;
        wx.onShow(callBack);

        console.log('onShow');
    }

    public getLocation(callBack:Function = null):any{
        /**
         * <p>獲取地理位置信息</p>
         * @param	callBack  成功回調。
         */
        var wx=Laya.Browser.window.wx;
        var locationInfo:any={};
        var callBack=callBack;
        wx.getLocation({
            success:function(e){
                locationInfo=e;

                if (callBack) {
                    callBack(e)
                }
            },
            fail:function(){
                
            }
        })
    }

    public screenCapture(obj:Laya.Sprite,_x:number,_y:number,saveToFile:boolean=false):string{
        /**
         * <p>截图返回URL，或保存到本地</p>
         * @param	obj  截取对象。
         * @param	_x X轴坐标。
         * @param	_y Y轴坐标。
         * @param	saveToFile 是否保存到本地
         */
        
        var htmlC = obj.drawToCanvas(750,1335,_x,_y);
        var canvas = htmlC.getCanvas();
        var url=canvas.toDataURL();
        var filePathUrl:string=''

        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: 750,
            height: 1334,
            destWidth: 750,
            destHeight: 1334,
            success: function (res) {
                filePathUrl=res.tempFilePath;

                if(saveToFile==true)WX_SDK.getInstance().urltoFilePath(filePathUrl); 
            }
        });
    
        return filePathUrl;
    }

    public urltoFilePath(url:string){
         /**
         * <p>保存图片到本地</p>
         * @param	url  图片地址，不支持网络图片
         */
        var wx=Laya.Browser.window.wx;
        wx.saveImageToPhotosAlbum({
            filePath:url,
            fail:function(err){
                console.log(err)
            },
            success:function(e){
                console.log(e)
            }
        });
    }

    public showConsol(){
        var wx=Laya.Browser.window.wx;
        wx.setEnableDebug({
            enableDebug:true
        });

        // wx.getSystemInfo({
        //     success:function(e){
        //         console.log("性能级别:"+e['brand']);
        //     }
        // })
    }

    public setStorage(_key:string,_data:Object){
        var wx=Laya.Browser.window.wx;
        wx.setStorage({
            key:_key,
            data:_data,
            success:function(e){
                console.log('setStorage'+e);
            }
        })
    }

    public getStorage(_key:string){
        var wx=Laya.Browser.window.wx;
        wx.getStorage({
            key:_key,
            success:function(e){
                console.log('getStorage'+e.data);
            }
        })
    }
}