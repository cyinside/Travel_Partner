// class CoinRole extends Laya.Sprite {
//     public has_touch:boolean=false;
//     public constructor(){
//         super();
//     }
//     public coinInit(){
//         var typeNum:number = RandomUtils.getInstance().limitInteger(1,2);
//         this.loadImage('GameScene/coin'+typeNum+'.png');
//         this.alpha=1;
//         this.scale(1,1);
//         this.mouseEnabled=true;
//         this.visiale=true;
//         this.has_touch=false;
//     }
//     public changeCoin(){
//         this.graphics.clear();
//         this.loadImage('GameScene/coin3.png');
//         this.mouseEnabled=false;
//         this.setTouch()
//     }
//     public setTouch(){
//         this.has_touch=true;
//     }
//     public recycleCoin(role:any){
//         console.log('coin recycle');
//         role.visiale=false;
//     }
// }
//# sourceMappingURL=CoinRole.js.map