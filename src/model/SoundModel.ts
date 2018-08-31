class SoundModel {
     public static getInstance() : SoundModel{
        if (SoundModel._instance == null){
            SoundModel._instance = new SoundModel();
        }
        return SoundModel._instance;
    }

    private static _instance = null;

    public playBgMusic(){
        Laya.SoundManager.playMusic("music.mp3",0);
    }

    public stopBgMusic(){
        Laya.SoundManager.stopMusic();
    }
    
}