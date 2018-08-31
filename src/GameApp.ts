import WebGL = Laya.WebGL;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
import Sprite = Laya.Sprite;
import Browser = Laya.Browser;
import Render = Laya.Render;
import LoadingUI = ui.Loading.LoadingViewUI;

// 程序入口
class GameMain{
    private res_root:Array<any>=[];
    constructor(){
        //初始化小游戏适配库
        Laya.MiniAdpter.init();

        GameConfig.init();
        Laya.init(GameConfig.gameWidth,GameConfig.gameHeight, WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#000000";

		//资源读取链接设置
        GameSetting.getInstance().setRes();

        // 调用DebugTool调试面板
        // Laya.DebugTool.init();

        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();
        
        //性能面板
        Laya.Stat.show(0,100);
        // WX_SDK.getInstance().showConsol();

        
        // WX_SDK.getInstance().onShow(function(){
        //     SoundModel.getInstance().playBgMusic();//背景音乐播放
        // })

        // WX_SDK.getInstance().setStorage('test',{msg:'this is test'});
        // WX_SDK.getInstance().getStorage('msg')

        Laya.loader.load('Loading/LoadingView.json',Handler.create(this,this.loadingComp));
        // Laya.URL.basePath = 'https://weixin-res.bbgameonline.com/Travel_Partner/';

        // Laya.URL.basePath = GameSetting.res_url;

        // Laya.MiniAdpter.nativefiles=
        //     'music.mp3'
        // ]

        // UIConfig.closeDialogOnSide = false;
    }

    private LoadView:LoadingUI;
    private loadingComp(){
        this.LoadView = new LoadingUI;
        Laya.stage.addChild(this.LoadView);
        
        Laya.loader.load(GameSetting.res_Arr,Handler.create(this,this.onCreateScene), Handler.create(this, this.onLoading, null, false));
    }

	private onLoading(progress)
	{
        this.LoadView.numText.text=~~(progress*100).toString()+'%';
		// console.log("加载进度: " + progress);
	}

	private mainScene:MainScene;
	private onCreateScene(){
        if(Laya.stage.contains(this.LoadView)){
            Laya.stage.removeChild(this.LoadView);
        }

		this.mainScene = new MainScene;   
        // this.mainScene.sceneInit();
		GameConfig.setAlign_center(this.mainScene);
		Laya.stage.addChild(this.mainScene);

        // var jsonData = Laya.Loader.getRes('res/contData.json');
        // console.log(jsonData['giftInfo'][0].desc);
	}

    private changeHandle(){
        console.log('changeHandle');
    }
}
new GameMain();