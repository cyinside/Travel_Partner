var GameEvent = /** @class */ (function () {
    function GameEvent() {
    }
    GameEvent.getInstance = function () {
        if (GameEvent._instance == null) {
            GameEvent._instance = new GameEvent();
        }
        return GameEvent._instance;
    };
    GameEvent._instance = null;
    GameEvent.SHOW_DELPIC_CONFIRM = 'show_delpic_confirm';
    GameEvent.SHWO_BUY_CONFIRM = 'show_buy_confirm';
    GameEvent.SHWO_BUY_STATE = 'show_buy_state';
    GameEvent.SHOW_LOG = 'show_log';
    GameEvent.SAVE_PIC_COMP = 'save_pic_comp';
    GameEvent.LOG_name = '';
    GameEvent.LOG_info = '';
    GameEvent.LOG_url = '';
    GameEvent.Locker_seclect_Type = 0;
    GameEvent.Locker_seclect_Id = 0;
    GameEvent.ToPreapre_Data = {
        type: 0,
        id: null,
        skinSrc: ''
    };
    GameEvent.CHANGE_WARNTIP = 'change_warntip';
    GameEvent.PREPARE_setItem = 'prepare_setItem';
    GameEvent.locker_id = 0;
    GameEvent.GET_COIN_COMP = 'get_coin_comp';
    GameEvent.COLLECT_COIN_COMP = 'collect_coin_comp';
    return GameEvent;
}());
//# sourceMappingURL=GameEvent.js.map