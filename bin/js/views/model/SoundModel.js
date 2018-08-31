var SoundModel = /** @class */ (function () {
    function SoundModel() {
    }
    SoundModel.getInstance = function () {
        if (SoundModel._instance == null) {
            SoundModel._instance = new SoundModel();
        }
        return SoundModel._instance;
    };
    SoundModel.prototype.playBgMusic = function () {
        Laya.SoundManager.playMusic("music.mp3", 0);
    };
    SoundModel.prototype.stopBgMusic = function () {
        Laya.SoundManager.stopMusic();
    };
    SoundModel._instance = null;
    return SoundModel;
}());
//# sourceMappingURL=SoundModel.js.map