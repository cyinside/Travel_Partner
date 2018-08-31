import SettingLogUI = ui.log.setting.SettingLogUI;
class SettingLog extends SettingLogUI {
    public constructor() {
        super();
        this.settingLog();
    }

    private settingLog() {
        this.on(Laya.Event.CLICK, this, this.touchHanle);
        // this.inputLog.close();
        this.nameText.changeText(GameData.userName);
        Global.addEventListener('showInfo',this,this.showInfo);
    }

    private playState: number = 1;
    private touchHanle(e: Laya.Event) {
        var _target = e.target;
        switch (_target) {
            case this.btn_music:
                this.playState == 1 ? this.playState = 0 : this.playState = 1;
                if (this.playState == 1) {
                    SoundModel.getInstance().playBgMusic();
                } else {
                    SoundModel.getInstance().stopBgMusic();
                }
                break;
            case this.closeBut:
                this.close();
                break;
            case this.nameText:
            case this.writeBut:
                this.changeNameLog.visible = true;
                this.changeNameLog.mouseEnabled=true;
                this.changeNameLog.popup();
                break;
            case this.btn_delRole:
                console.log('del')
                this.DelConfirmLog.visible=true;
                this.DelConfirmLog.popup();
                break;
        }
    }

    private showInfo(){
        this.nameText.changeText(GameData.userName);

        this.infoLog.visible=true;
        this.infoLog.infoText.changeText('改名了！！');
        this.infoLog.popup();
    }
}