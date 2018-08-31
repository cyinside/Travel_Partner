
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.Loading {
    export class LoadingViewUI extends View {
		public numText:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("Loading/LoadingView");

        }

    }
}

module ui.indoor {
    export class Bottom2UnitUI extends View {
		public prepareBut.:Laya.Image;
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
    export class IndoorSceneUI extends View {
		public bg4:Laya.Image;
		public topUnit:TopUnit;
		public bottom2Unit:Bottom2Unit;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("TopUnit",TopUnit);
			View.regComponent("Bottom2Unit",Bottom2Unit);

            super.createChildren();
            this.loadUI("indoor/IndoorScene");

        }

    }
}

module ui.log {
    export class InfoLogUI extends Dialog {
		public infoText:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.loadUI("log/InfoLog");

        }

    }
}

module ui.log {
    export class LogViewUI extends View {
		public settingLog:SettingLog;
		public storeLog:ShoppingLog;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("LogView",LogView);
			View.regComponent("SettingLog",SettingLog);
			View.regComponent("ShoppingLog",ShoppingLog);

            super.createChildren();
            this.loadUI("log/LogView");

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
		public infoLog:ui.log.InfoLogUI;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ChangeNameLog",ChangeNameLog);
			View.regComponent("DelConfirmLog",DelConfirmLog);
			View.regComponent("ui.log.InfoLogUI",ui.log.InfoLogUI);

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
		public m_label:Laya.Label;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ListItem",ListItem);

            super.createChildren();
            this.loadUI("log/store/ListItem");

        }

    }
}

module ui.log.store {
    export class StoreLogUI extends Dialog {
		public m_list:Laya.List;
		public m_item:ListItem;
		public leftBut:Laya.Button;
		public rightBut:Laya.Button;
		public titleInfo:Laya.Label;
		public closeBut:Laya.Image;
		public buyConfirmLog:BuyConfirmLog;
		public infoLog:ui.log.InfoLogUI;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ShoppingLog",ShoppingLog);
			View.regComponent("ListItem",ListItem);
			View.regComponent("BuyConfirmLog",BuyConfirmLog);
			View.regComponent("ui.log.InfoLogUI",ui.log.InfoLogUI);

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
		public waveView:WaveView;
		public coinBox:Laya.Box;
		public LeafView:laya.particle.Particle2D;
		public topUnit:TopUnit;
		public bottomUnit:BottomUnit;

        constructor(){ super()}
        createChildren():void {
        			View.regComponent("WaveView",WaveView);
			View.regComponent("CoinsRole",CoinsRole);
			View.regComponent("Particle2D",laya.particle.Particle2D);
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
