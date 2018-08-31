var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.getInstance = function () {
        if (GameConfig._instance == null) {
            GameConfig._instance = new GameConfig();
        }
        return GameConfig._instance;
    };
    GameConfig.init = function () {
        this.deviceW = Laya.Browser.width;
        this.deviceH = Laya.Browser.height;
        var isIOS = Laya.Browser.onIPhone;
        if (this.deviceW == 1125 && this.deviceH == 2436 && isIOS == true) {
            this.deviceName = 'iphoneX';
            this.gameWidth = 750;
            this.gameHeight = 1624;
            // this.sceneH=1468;
            this.res_Type = 3;
            // this.gameScale=1.1;
        }
        // else if(this.deviceW==1242&&this.deviceH==2208&&isIOS==true){
        //     this.deviceName='iphone6/7/8+';
        //     this.gameWidth=750;
        //     this.gameHeight=1334;
        // }
        // else if(this.deviceW==750&&this.deviceH==1334&&isIOS==true){
        //     this.deviceName='iphone6/7/8';
        //     this.gameWidth=750;
        //     this.gameHeight=1334;
        // }
        else if (this.deviceW == 640 && this.deviceH == 1136 && isIOS == true) {
            this.deviceName = 'iphone5/5E';
            this.gameWidth = 750;
            this.gameHeight = 1334;
            // this.gameScale=0.85;
        }
        else if (isIOS == false) {
            if (this.deviceW > 750 || this.deviceH > 1334) {
                this.gameWidth = 750;
                this.gameHeight = 1334;
            }
            else if (this.deviceW < 750 || this.deviceH < 1334) {
                this.gameWidth = 750;
                this.gameHeight = 1334;
                this.gameScale = 0.9;
            }
        }
        console.log(this.deviceW, this.deviceH, this.deviceName);
    };
    GameConfig.setAlign_center = function (obj) {
        obj.pivot(obj.width * 0.5, obj.height * 0.5);
        obj.pos(this.gameWidth * 0.5, this.gameHeight * 0.5);
        obj.scale(this.gameScale, this.gameScale);
    };
    GameConfig.gameWidth = 750;
    GameConfig.gameHeight = 1334;
    GameConfig.gameScale = 1;
    GameConfig.deviceW = 0;
    GameConfig.deviceH = 0;
    GameConfig.deviceName = '';
    GameConfig.sceneH = 1334;
    GameConfig.res_Type = 2;
    GameConfig._instance = null;
    return GameConfig;
}());
//# sourceMappingURL=GameConfig.js.map