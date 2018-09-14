
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
import EffectAnimation=laya.display.EffectAnimation
module ui.Loading {
    export class LoadingViewUI extends View {
		public LoadBg:Laya.Image;
		public loadBarBox:Laya.Box;
		public loadText:Laya.Label;
		public numText:Laya.Label;
		public loadBar:Laya.Image;
		public loadBarMask:Laya.Image;
		public loadBarBg:Laya.Image;
		public roleIcon2:Laya.Image;
		public roleIcon1:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("Loading/LoadingView");

        }

    }
}

module ui.indoor {
    export class Bottom2UnitUI extends View {
		public prepareBut:Laya.Image;
		public bookBut:Laya.Button;
		public outsideBut:Laya.Image;
		public storeBut:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("indoor/Bottom2Unit");

        }

    }
}

module ui.indoor {
    export class FireAniUI extends View {

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("indoor/FireAni");

        }

    }
}

module ui.indoor {
    export class IndoorSceneUI extends View {
		public bg4:Laya.Image;
		public topUnit:TopUnit;
		public bottom2Unit:Bottom2Unit;
		public FireAni:ui.indoor.FireAniUI;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("TopUnit",TopUnit);
			View.regComponent("Bottom2Unit",Bottom2Unit);
			View.regComponent("ui.indoor.FireAniUI",ui.indoor.FireAniUI);

            super.createChildren();
            this.loadUI("indoor/IndoorScene");

        }

    }
}

module ui.log {
    export class InfoLogUI extends Dialog {
		public infoText:Laya.Label;
		public roleImg:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("infoLog",infoLog);

            super.createChildren();
            this.loadUI("log/InfoLog");

        }

    }
}

module ui.log {
    export class LogViewUI extends View {
		public settingLog:SettingLog;
		public storeLog:StoreLog1;
		public pictureLog:PictureLog;
		public infoLog:infoLog;
		public prepareLog:PrepareLog;
		public lockerLog:LockerLog;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("LogView",LogView);
			View.regComponent("SettingLog",SettingLog);
			View.regComponent("StoreLog1",StoreLog1);
			View.regComponent("PictureLog",PictureLog);
			View.regComponent("infoLog",infoLog);
			View.regComponent("PrepareLog",PrepareLog);
			View.regComponent("LockerLog",LockerLog);

            super.createChildren();
            this.loadUI("log/LogView");

        }

    }
}

module ui.log.locker {
    export class LockerListItemUI extends View {
		public roleImg:Laya.Image;
		public nameText:Laya.Label;
		public descText1:Laya.Label;
		public descText2:Laya.Label;
		public numText:Laya.Label;
		public markImg:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/locker/LockerListItem");

        }

    }
}

module ui.log.locker {
    export class LockerLogUI extends Dialog {
		public nthImg:Laya.Image;
		public btn_tostore:Laya.Button;
		public tabGtoup:Laya.Tab;
		public item0:Laya.Button;
		public item1:Laya.Button;
		public item2:Laya.Button;
		public item3:Laya.Button;
		public butText0:Laya.Label;
		public butText1:Laya.Label;
		public butText2:Laya.Label;
		public butText3:Laya.Label;
		public lockerList:Laya.List;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("LockerLog",LockerLog);
			View.regComponent("LockerListItem",LockerListItem);

            super.createChildren();
            this.loadUI("log/locker/LockerLog");

        }

    }
}

module ui.log.picture {
    export class PicDelConfromUI extends Dialog {
		public okBut:Laya.Button;
		public cancelBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/picture/PicDelConfrom");

        }

    }
}

module ui.log.picture {
    export class PicInfoUI extends Dialog {
		public pictureBig:Laya.Image;
		public btn_delPic:Laya.Button;
		public btn_savePic:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/picture/PicInfo");

        }

    }
}

module ui.log.picture {
    export class PicItemUI extends View {
		public pictureRole:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/picture/PicItem");

        }

    }
}

module ui.log.picture {
    export class PictureLogUI extends Dialog {
		public closeBut:Laya.Image;
		public m_list:Laya.List;
		public rightBut:Laya.Image;
		public leftBut:Laya.Image;
		public picInfo:PicInfo;
		public picDelConfrom:PicDelConfirmLog;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("PictureLog",PictureLog);
			View.regComponent("PicInfo",PicInfo);
			View.regComponent("PicDelConfirmLog",PicDelConfirmLog);

            super.createChildren();
            this.loadUI("log/picture/PictureLog");

        }

    }
}

module ui.log.prepare {
    export class PrepareLogUI extends Dialog {
		public bgPanel:Laya.Panel;
		public bgBox:Laya.Box;
		public bagAera:Laya.Image;
		public addFood1:ButItem;
		public addLuck1:ButItem;
		public addProp2:ButItem;
		public addProp1:ButItem;
		public clearBut_Bag:Laya.Button;
		public tableArea:Laya.Image;
		public setFood1:ButItem;
		public setFood2:ButItem;
		public setLock1:ButItem;
		public setLock2:ButItem;
		public setProp1:ButItem;
		public setProp2:ButItem;
		public setProp3:ButItem;
		public setProp4:ButItem;
		public clearBut_Table:Laya.Button;
		public leftBut:Laya.Image;
		public rightBut:Laya.Image;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("PrepareLog",PrepareLog);
			View.regComponent("ButItem",ButItem);

            super.createChildren();
            this.loadUI("log/prepare/PrepareLog");

        }

    }
}

module ui.log.setting {
    export class ChangeNameLogUI extends Dialog {
		public nameInput:Laya.TextInput;
		public cancelBut:Laya.Button;
		public okBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ChangeNameLog",ChangeNameLog);

            super.createChildren();
            this.loadUI("log/setting/ChangeNameLog");

        }

    }
}

module ui.log.setting {
    export class SettingLogUI extends Dialog {
		public btn_music:Laya.Button;
		public btn_sound:Laya.Button;
		public closeBut:Laya.Image;
		public helpBut:Laya.Image;
		public btn_delRole:Laya.Button;
		public btn_location:Laya.Button;
		public writeBut:Laya.Image;
		public nameText:Laya.Label;
		public ageText:Laya.Label;
		public uidText:Laya.Label;
		public locationText:Laya.Label;
		public changeNameLog:ChangeNameLog;
		public DelConfirmLog:DelConfirmLog;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ChangeNameLog",ChangeNameLog);
			View.regComponent("DelConfirmLog",DelConfirmLog);

            super.createChildren();
            this.loadUI("log/setting/SettingLog");

        }

    }
}

module ui.log.setting {
    export class delConfirmLogUI extends Dialog {
		public okBut:Laya.Button;
		public cancelBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/setting/delConfirmLog");

        }

    }
}

module ui.log.store {
    export class BuyConfirmLogUI extends Dialog {
		public cancelBut:Laya.Button;
		public okBut:Laya.Button;
		public nameText:Laya.Label;
		public numText:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/store/BuyConfirmLog");

        }

    }
}

module ui.log.store {
    export class ListItemUI extends View {
		public selectedBg:Laya.Image;
		public itemBg:Laya.Image;
		public itemImg:Laya.Image;
		public m_label:Laya.Label;
		public priceText:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ListItem",ListItem);

            super.createChildren();
            this.loadUI("log/store/ListItem");

        }

    }
}

module ui.log.store {
    export class StoreItemGroupUI extends View {
		public i_0:ui.log.store.ListItemUI;
		public i_3:ui.log.store.ListItemUI;
		public i_2:ui.log.store.ListItemUI;
		public i_1:ui.log.store.ListItemUI;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.log.store.ListItemUI",ui.log.store.ListItemUI);

            super.createChildren();
            this.loadUI("log/store/StoreItemGroup");

        }

    }
}

module ui.log.store {
    export class StoreLogUI extends Dialog {
		public leftBut:Laya.Button;
		public rightBut:Laya.Button;
		public titleInfo:Laya.Label;
		public descText1:Laya.Label;
		public descText2:Laya.Label;
		public closeBut:Laya.Image;
		public buyConfirmLog:BuyConfirmLog;
		public m_list1:Laya.List;
		public m_item1:Laya.Box;
		public i_0:ListItem;
		public i_1:ListItem;
		public i_2:ListItem;
		public i_3:ListItem;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("StoreLog1",StoreLog1);
			View.regComponent("BuyConfirmLog",BuyConfirmLog);
			View.regComponent("ListItem",ListItem);

            super.createChildren();
            this.loadUI("log/store/StoreLog");

        }

    }
}

module ui.main {
    export class BottomUnitUI extends View {
		public bookBut:Laya.Button;
		public insideBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("main/BottomUnit");

        }

    }
}

module ui.main {
    export class MainSceneUI extends View {
		public bgPanel:Laya.Panel;
		public bgBox:Laya.Box;
		public bg1:Laya.Image;
		public bg2:Laya.Image;
		public bg3:Laya.Image;
		public coinBox:Laya.Box;
		public LeafView:laya.particle.Particle2D;
		public waveView:WaveView;
		public tipsAni:Laya.Animation;
		public indoorRect:Laya.Sprite;
		public topUnit:TopUnit;
		public bottomUnit:BottomUnit;
		public textBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("CoinsRole",CoinsRole);
			View.regComponent("Particle2D",laya.particle.Particle2D);
			View.regComponent("WaveView",WaveView);
			View.regComponent("TopUnit",TopUnit);
			View.regComponent("BottomUnit",BottomUnit);

            super.createChildren();
            this.loadUI("main/MainScene");

        }

    }
}

module ui.main {
    export class TopUnitUI extends View {
		public sumText:Laya.Label;
		public settingBut:Laya.Button;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("main/TopUnit");

        }

    }
}

module ui.main {
    export class WaveViewUI extends View {
		public waveAni:Laya.Animation;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("WaveView",WaveView);

            super.createChildren();
            this.loadUI("main/WaveView");

        }

    }
}
