class GameSetting {
    public static getInstance(): GameSetting {
        if (GameSetting._instance == null) {
            GameSetting._instance = new GameSetting();
        }
        return GameSetting._instance;
    }

    private static _instance = null;

    public static res_url: string = 'https://weixin-res.bbgameonline.com/Travel_Partner/'
    // public static res_url:'oss://weixin-trip'

    public static coinNumber: number = 10;
    public static res_Arr: Array<any> = [

    ]

    public setRes() {
        var res_v: string = GameConfig.res_Type.toString() + 'x';
        GameSetting.res_Arr = [
            { url: res_v + '/1.jpg', type: Laya.Loader.IMAGE },
            { url: res_v + '/2.jpg', type: Laya.Loader.IMAGE },
            { url: res_v + '/3.jpg', type: Laya.Loader.IMAGE },
            { url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/GameScene.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/settingLog.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/store.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/wave.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/inDoorScene.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/fire.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/pictureLog.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/storeItem.atlas", type: Laya.Loader.ATLAS },
            {url:'res/storeData.json',type:Laya.Loader.JSON},
            { url: 'main/BottomUnit.json', type: Laya.Loader.JSON },
            { url: 'main/MainScene.json', type: Laya.Loader.JSON },
            { url: 'main/TopUnit.json', type: Laya.Loader.JSON },
            { url: 'log/setting/SettingLog.json', type: Laya.Loader.JSON },
            { url: 'log/setting/ChangeNameLog.json', type: Laya.Loader.JSON },
            { url: 'log/setting/delConfirmLog.json', type: Laya.Loader.JSON },
            { url: 'log/InfoLog.json', type: Laya.Loader.JSON },
            { url: 'log/store/StoreLog.json', type: Laya.Loader.JSON },
            { url: 'log/store/ListItem.json', type: Laya.Loader.JSON },
            { url: 'log/store/BuyConfirmLog.json', type: Laya.Loader.JSON },
            { url: 'log/picture/PicDelConfrom.json', type: Laya.Loader.JSON },
            { url: 'log/picture/PicInfo.json', type: Laya.Loader.JSON },
            { url: 'log/picture/PictureLog.json', type: Laya.Loader.JSON },
            { url: 'log/picture/PicItem.json', type: Laya.Loader.JSON },
            { url: 'log/prepare/PrepareLog.json', type: Laya.Loader.JSON },
            { url: 'main/WaveView.json', type: Laya.Loader.JSON },
            { url: 'main/Tips.json', type: Laya.Loader.JSON },
            { url: 'indoor/Tips1.ani', type: Laya.Loader.JSON },
            { url: 'indoor/Bottom2Unit.json', type: Laya.Loader.JSON },
            { url: 'indoor/IndoorScene.json', type: Laya.Loader.JSON },
            { url: 'indoor/FireAni.json', type: Laya.Loader.JSON },
            { url: 'log/LogView.json', type: Laya.Loader.JSON },
            { url: 'Loading/LoadingView.json', type: Laya.Loader.JSON },


            { url: 'music.mp3', type: Laya.Loader.SOUND }
        ]
    }
}