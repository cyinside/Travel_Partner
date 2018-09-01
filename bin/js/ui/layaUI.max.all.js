var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var EffectAnimation = laya.display.EffectAnimation;
var ui;
(function (ui) {
    var Loading;
    (function (Loading) {
        var LoadingViewUI = /** @class */ (function (_super) {
            __extends(LoadingViewUI, _super);
            function LoadingViewUI() {
                return _super.call(this) || this;
            }
            LoadingViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("Loading/LoadingView");
            };
            return LoadingViewUI;
        }(View));
        Loading.LoadingViewUI = LoadingViewUI;
    })(Loading = ui.Loading || (ui.Loading = {}));
})(ui || (ui = {}));
(function (ui) {
    var indoor;
    (function (indoor) {
        var Bottom2UnitUI = /** @class */ (function (_super) {
            __extends(Bottom2UnitUI, _super);
            function Bottom2UnitUI() {
                return _super.call(this) || this;
            }
            Bottom2UnitUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("indoor/Bottom2Unit");
            };
            return Bottom2UnitUI;
        }(View));
        indoor.Bottom2UnitUI = Bottom2UnitUI;
    })(indoor = ui.indoor || (ui.indoor = {}));
})(ui || (ui = {}));
(function (ui) {
    var indoor;
    (function (indoor) {
        var FireAniUI = /** @class */ (function (_super) {
            __extends(FireAniUI, _super);
            function FireAniUI() {
                return _super.call(this) || this;
            }
            FireAniUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("indoor/FireAni");
            };
            return FireAniUI;
        }(View));
        indoor.FireAniUI = FireAniUI;
    })(indoor = ui.indoor || (ui.indoor = {}));
})(ui || (ui = {}));
(function (ui) {
    var indoor;
    (function (indoor) {
        var IndoorSceneUI = /** @class */ (function (_super) {
            __extends(IndoorSceneUI, _super);
            function IndoorSceneUI() {
                return _super.call(this) || this;
            }
            IndoorSceneUI.prototype.createChildren = function () {
                View.regComponent("TopUnit", TopUnit);
                View.regComponent("Bottom2Unit", Bottom2Unit);
                View.regComponent("ui.indoor.FireAniUI", ui.indoor.FireAniUI);
                _super.prototype.createChildren.call(this);
                this.loadUI("indoor/IndoorScene");
            };
            return IndoorSceneUI;
        }(View));
        indoor.IndoorSceneUI = IndoorSceneUI;
    })(indoor = ui.indoor || (ui.indoor = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var InfoLogUI = /** @class */ (function (_super) {
            __extends(InfoLogUI, _super);
            function InfoLogUI() {
                return _super.call(this) || this;
            }
            InfoLogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("log/InfoLog");
            };
            return InfoLogUI;
        }(Dialog));
        log.InfoLogUI = InfoLogUI;
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var LogViewUI = /** @class */ (function (_super) {
            __extends(LogViewUI, _super);
            function LogViewUI() {
                return _super.call(this) || this;
            }
            LogViewUI.prototype.createChildren = function () {
                View.regComponent("LogView", LogView);
                View.regComponent("SettingLog", SettingLog);
                View.regComponent("ShoppingLog", ShoppingLog);
                _super.prototype.createChildren.call(this);
                this.loadUI("log/LogView");
            };
            return LogViewUI;
        }(View));
        log.LogViewUI = LogViewUI;
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var setting;
        (function (setting) {
            var ChangeNameLogUI = /** @class */ (function (_super) {
                __extends(ChangeNameLogUI, _super);
                function ChangeNameLogUI() {
                    return _super.call(this) || this;
                }
                ChangeNameLogUI.prototype.createChildren = function () {
                    View.regComponent("ChangeNameLog", ChangeNameLog);
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/setting/ChangeNameLog");
                };
                return ChangeNameLogUI;
            }(Dialog));
            setting.ChangeNameLogUI = ChangeNameLogUI;
        })(setting = log.setting || (log.setting = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var setting;
        (function (setting) {
            var SettingLogUI = /** @class */ (function (_super) {
                __extends(SettingLogUI, _super);
                function SettingLogUI() {
                    return _super.call(this) || this;
                }
                SettingLogUI.prototype.createChildren = function () {
                    View.regComponent("ChangeNameLog", ChangeNameLog);
                    View.regComponent("DelConfirmLog", DelConfirmLog);
                    View.regComponent("ui.log.InfoLogUI", ui.log.InfoLogUI);
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/setting/SettingLog");
                };
                return SettingLogUI;
            }(Dialog));
            setting.SettingLogUI = SettingLogUI;
        })(setting = log.setting || (log.setting = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var setting;
        (function (setting) {
            var delConfirmLogUI = /** @class */ (function (_super) {
                __extends(delConfirmLogUI, _super);
                function delConfirmLogUI() {
                    return _super.call(this) || this;
                }
                delConfirmLogUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/setting/delConfirmLog");
                };
                return delConfirmLogUI;
            }(Dialog));
            setting.delConfirmLogUI = delConfirmLogUI;
        })(setting = log.setting || (log.setting = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var store;
        (function (store) {
            var BuyConfirmLogUI = /** @class */ (function (_super) {
                __extends(BuyConfirmLogUI, _super);
                function BuyConfirmLogUI() {
                    return _super.call(this) || this;
                }
                BuyConfirmLogUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/store/BuyConfirmLog");
                };
                return BuyConfirmLogUI;
            }(Dialog));
            store.BuyConfirmLogUI = BuyConfirmLogUI;
        })(store = log.store || (log.store = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var store;
        (function (store) {
            var ListItemUI = /** @class */ (function (_super) {
                __extends(ListItemUI, _super);
                function ListItemUI() {
                    return _super.call(this) || this;
                }
                ListItemUI.prototype.createChildren = function () {
                    View.regComponent("ListItem", ListItem);
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/store/ListItem");
                };
                return ListItemUI;
            }(View));
            store.ListItemUI = ListItemUI;
        })(store = log.store || (log.store = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var log;
    (function (log) {
        var store;
        (function (store) {
            var StoreLogUI = /** @class */ (function (_super) {
                __extends(StoreLogUI, _super);
                function StoreLogUI() {
                    return _super.call(this) || this;
                }
                StoreLogUI.prototype.createChildren = function () {
                    View.regComponent("ShoppingLog", ShoppingLog);
                    View.regComponent("ListItem", ListItem);
                    View.regComponent("BuyConfirmLog", BuyConfirmLog);
                    View.regComponent("ui.log.InfoLogUI", ui.log.InfoLogUI);
                    _super.prototype.createChildren.call(this);
                    this.loadUI("log/store/StoreLog");
                };
                return StoreLogUI;
            }(Dialog));
            store.StoreLogUI = StoreLogUI;
        })(store = log.store || (log.store = {}));
    })(log = ui.log || (ui.log = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var BottomUnitUI = /** @class */ (function (_super) {
            __extends(BottomUnitUI, _super);
            function BottomUnitUI() {
                return _super.call(this) || this;
            }
            BottomUnitUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("main/BottomUnit");
            };
            return BottomUnitUI;
        }(View));
        main.BottomUnitUI = BottomUnitUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var MainSceneUI = /** @class */ (function (_super) {
            __extends(MainSceneUI, _super);
            function MainSceneUI() {
                return _super.call(this) || this;
            }
            MainSceneUI.prototype.createChildren = function () {
                View.regComponent("CoinsRole", CoinsRole);
                View.regComponent("Particle2D", laya.particle.Particle2D);
                View.regComponent("WaveView", WaveView);
                View.regComponent("TopUnit", TopUnit);
                View.regComponent("BottomUnit", BottomUnit);
                _super.prototype.createChildren.call(this);
                this.loadUI("main/MainScene");
            };
            return MainSceneUI;
        }(View));
        main.MainSceneUI = MainSceneUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var TopUnitUI = /** @class */ (function (_super) {
            __extends(TopUnitUI, _super);
            function TopUnitUI() {
                return _super.call(this) || this;
            }
            TopUnitUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadUI("main/TopUnit");
            };
            return TopUnitUI;
        }(View));
        main.TopUnitUI = TopUnitUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
(function (ui) {
    var main;
    (function (main) {
        var WaveViewUI = /** @class */ (function (_super) {
            __extends(WaveViewUI, _super);
            function WaveViewUI() {
                return _super.call(this) || this;
            }
            WaveViewUI.prototype.createChildren = function () {
                View.regComponent("WaveView", WaveView);
                _super.prototype.createChildren.call(this);
                this.loadUI("main/WaveView");
            };
            return WaveViewUI;
        }(View));
        main.WaveViewUI = WaveViewUI;
    })(main = ui.main || (ui.main = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map