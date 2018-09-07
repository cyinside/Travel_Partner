import infoLogUI = ui.log.InfoLogUI;
class infoLog extends infoLogUI {
    public constructor() {
        super();
        this.infoLogInit();
    }

    private infoLogInit() {

    }

    public showInfo(text: string) {
        this.infoText.changeText(text);
        if (GameEvent.LOG_url != '') {
            this.roleImg.skin = GameEvent.LOG_url;
            this.infoText.x = 358;
            GameEvent.LOG_url = '';
        } else {
            this.roleImg.skin = '';
            this.infoText.x = this.width / 2;
        }

        this.visible = true;
        this.popup();

        if (this.isPopup)
            Laya.timer.once(2500, this, function () {
                this.close();
            })
    }
}