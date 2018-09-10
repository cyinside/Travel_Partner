import LoadingViewUI = ui.Loading.LoadingViewUI;
class LoadingView extends LoadingViewUI {
    public constructor() {
        super()
        this.loadingViewInit();
    }

    private loadingViewInit() {
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;

        // this.LoadBg.x = this.width/2;
        this.LoadBg.y = this.height / 2;

        var _x: number = 150;
        if (GameConfig.res_Type == 3) {
            this.loadBarBox.y = this.loadBarBox.y + _x;
            this.roleIcon1.y = this.roleIcon1.y + _x;
            this.roleIcon2.y = this.roleIcon2.y + _x;
        }

        Laya.timer.frameLoop(1, this, this.animateFrameRateBased);
        // this.on(Laya.Event.CLICK,this,this.loadingProgress)
    }

    private num:number=0;
    private animateFrameRateBased(){
        this.roleIcon1.rotation+=1;
        this.roleIcon2.rotation+=1;

        this.num++;
        if(this.num>30){
            this.loadText.changeText('加载中.');
        }
        if(this.num>60){
            this.loadText.changeText('加载中..');
        }
        if(this.num>90){
            this.loadText.changeText('加载中...');
            this.num=0;
        }
    }

    public loadingProgress(progress=null){
        var num:number = ~~(progress * 100);
        this.numText.text = num.toString() + '%';

        this.loadBarMask.x=this.loadBar.x+410*progress;

        // console.log(this.loadBarMask.x)
    }
}