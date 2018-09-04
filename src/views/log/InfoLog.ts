import infoLogUI = ui.log.InfoLogUI;
class infoLog extends infoLogUI{
    public constructor(){
        super();
        this.infoLogInit();
    }

    private infoLogInit(){

    }

    public showInfo(text:string){
        this.infoText.changeText(text);
        this.infoText.x = this.width/2;
        this.visible=true;
        this.popup();

        if(this.isPopup)
        Laya.timer.once(2000,this,function(){
            this.close();
        })
    }
}