import WebGL = Laya.WebGL;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
import Sprite = Laya.Sprite;
import Browser = Laya.Browser;
import Render = Laya.Render;
import LoadingUI = ui.Loading.LoadingViewUI;

// 程序入口
class GameMain {
    private res_root: Array<any> = [];
    constructor() {
        //初始化小游戏适配库
        Laya.MiniAdpter.init();

        GameConfig.init();
        Laya.init(GameConfig.gameWidth, GameConfig.gameHeight, WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#000000";

        //资源读取链接设置
        GameSetting.getInstance().setRes();

        // 调用DebugTool调试面板
        // Laya.DebugTool.init();

        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();

        //性能面板
        Laya.Stat.show(0, 100);
        // WX_SDK.getInstance().showConsol();


        // WX_SDK.getInstance().onShow(function(){
        //     SoundModel.getInstance().playBgMusic();//背景音乐播放
        // })

        // WX_SDK.getInstance().setStorage('test',{msg:'this is test'});
        // WX_SDK.getInstance().getStorage('msg')

        Laya.loader.load('Loading/LoadingView.json', Handler.create(this, this.loadingComp));
        // Laya.URL.basePath = 'https://weixin-res.bbgameonline.com/Travel_Partner/';

        // Laya.URL.basePath = GameSetting.res_url;

        // Laya.MiniAdpter.nativefiles = [
        //     'Loading/LoadingView.json'
        // ]

        // UIConfig.closeDialogOnSide = false;
    }

    private LoadView: LoadingUI;
    private loadingComp() {
        this.LoadView = new LoadingUI;
        Laya.stage.addChild(this.LoadView);

        Laya.loader.load(GameSetting.res_Arr, Handler.create(this, this.onCreateScene), Handler.create(this, this.onLoading, null, false));

    }

    private onLoading(progress) {
        this.LoadView.numText.text = ~~(progress * 100).toString() + '%';
        // console.log("加载进度: " + progress);
    }

    private mainScene: MainScene;
    private indoorScene: IndoorScene;
    private logView: LogView;
    private onCreateScene(id: number) {
        DataModel.getInstance().DataConfig();

        if (Laya.stage.contains(this.LoadView)) {
            Laya.stage.removeChild(this.LoadView);
            this.LoadView.visible = false;
        }

        this.mainScene = new MainScene;
        GameConfig.setAlign_center(this.mainScene);
        Laya.stage.addChild(this.mainScene);

        this.indoorScene = new IndoorScene;
        GameConfig.setAlign_center(this.indoorScene);
        this.indoorScene.alpha = 0;

        this.logView = new LogView;
        this.logView.visible = false;
        Laya.stage.addChild(this.logView);



        Global.addEventListener(GameEvent.SHOW_LOG, this, this.showLog);
        Global.addEventListener(SceneEvent.CHANGE_SCENE, this, this.changeScene);

        // SceneEvent.sceneID = 1;
        // this.changeScene();
    }

    private changeScene() {
        var id = SceneEvent.sceneID;
        switch (id) {
            case 1:
                if (Laya.stage.contains(this.indoorScene)) {
                    Laya.Tween.to(this.indoorScene, { alpha: 0 }, 400, Laya.Ease.sineIn, new Laya.Handler(this, function () {
                        Laya.stage.removeChild(this.indoorScene);
                        this.indoorScene.visible = false;

                        // this.mainScene.alpha=1;
                        this.mainScene.visible = true;
                        Laya.stage.addChild(this.mainScene);
                        Laya.Tween.to(this.mainScene, { alpha: 1 }, 400, Laya.Ease.sineIn);
                    }))
                }
                break;
            case 2:
                if (Laya.stage.contains(this.mainScene)) {
                    Laya.Tween.to(this.mainScene, { alpha: 0 }, 400, Laya.Ease.sineIn, new Laya.Handler(this, function () {
                        Laya.stage.removeChild(this.mainScene);
                        this.mainScene.visible = false;

                        // this.indoorScene.alpha=1;
                        this.indoorScene.visible = true;
                        Laya.stage.addChild(this.indoorScene);
                        Laya.Tween.to(this.indoorScene, { alpha: 1 }, 400, Laya.Ease.sineIn);
                    }))
                }
                break;
        }
    }

    private showLog() {
        this.logView.showLog();
    }

    private changeHandle() {
        console.log('changeHandle');
    }
}
new GameMain();