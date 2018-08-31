import WaveViewUI = ui.main.WaveViewUI;
class WaveView extends WaveViewUI{
    public constructor(){
        super();
        this.WaveViewInit()
    }

    private WaveViewInit(){
        this.waveAni.play(0);

        this.waveAni.addLabel('3',3);
        // this.waveAni.on(Laya.Event.COMPLETE,this,this.aniComp);
        this.waveAni.on(Laya.Event.LABEL,this,this.aniComp)
    }

    private aniComp(){
        this.waveAni.stop();
        this.scale(1,1);

        Laya.Tween.to(this.waveAni,{alpha:0},1200,Laya.Ease.sineIn,new Laya.Handler(this,function(){
            Laya.timer.once(2000,this,this.aniStart);
        }))
    }

    private aniStart(){
        this.waveAni.gotoAndStop(0);

        this.scale(0.5,0.5);	
        Laya.Tween.to(this.waveAni,{alpha:1},1000,Laya.Ease.sineIn,new Laya.Handler(this,function(){
            // this.waveAni.alpha=1;
        }))

        this.waveAni.play(0);
        Laya.Tween.to(this,{scaleX:1.1,scaleY:1.1},2500,Laya.Ease.sineIn,new Laya.Handler(this,function(){
            // this.waveAni.alpha=1;
        }))

    }
}