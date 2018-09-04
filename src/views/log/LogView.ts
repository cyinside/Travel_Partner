import LogViewUI = ui.log.LogViewUI;
class LogView extends LogViewUI {
    public constructor() {
        super();
        this.LogViewInit();
    }

    private LogViewInit() {
        this.settingLog.closeHandler = new Laya.Handler(this, this.closeHandle);
        this.storeLog.closeHandler = new Laya.Handler(this, this.closeHandle);
        this.pictureLog.closeHandler = new Laya.Handler(this, this.closeHandle);
    }

    private closeHandle() {
        console.log('close')
        this.visible = false;
    }

    public showLog() {
        this.visible = true;
        var name = GameEvent.LOG_name;
        switch (name) {
            case 'Store':
                this.storeLog.visible = true;
                this.storeLog.popup()
                break;
            case 'Setting':
                this.settingLog.visible = true;
                this.settingLog.popup()
                break;
            case 'Picture':
                this.pictureLog.visible = true;
                this.pictureLog.popup();
                break;
            case 'Info':
                this.infoLog.showInfo(GameEvent.LOG_info);
                break;

        }
    }
}