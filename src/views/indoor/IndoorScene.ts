import indoorSceneUi = ui.indoor.IndoorSceneUI;
class IndoorScene extends indoorSceneUi{
    public constructor(){
        super()
        this.indoorSceneInit();
    }

    private indoorSceneInit(){
        this.height = GameConfig.gameHeight;
        this.width = GameConfig.gameWidth;

        var res_v: string = GameConfig.res_Type.toString() + 'x';
        this.bg4.skin = res_v + '/4.jpg';

        if (GameConfig.res_Type == 3) {
            this.topUnit.top = this.topUnit.top * 3.5;
            this.FireAni.y=this.FireAni.y+145;
        }
    }
}