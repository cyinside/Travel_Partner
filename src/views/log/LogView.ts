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
}