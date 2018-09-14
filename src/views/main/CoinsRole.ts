class CoinsRole extends Laya.Sprite {
    public has_touch:boolean=false;

    public constructor(){
        super();
    }

    public coinInit(){
        this.graphics.clear();
        var typeNum:number = RandomUtils.getInstance().limitInteger(1,2);
        this.loadImage('GameScene/coin'+typeNum+'.png');
        this.alpha=1;
        this.scale(1,1);
        this.mouseEnabled=true;
        this.visible=true;
        this.has_touch=false;
    }

    public changeCoin(){
        this.graphics.clear();
        this.loadImage('GameScene/coin3.png');
        this.mouseEnabled=false;
        this.setTouch();
    }

    public setTouch(){
        this.has_touch=true;
    }
    
    public recycleCoin(role:any){
        console.log('coin recycle');
        role.visiale=false;
    }
}