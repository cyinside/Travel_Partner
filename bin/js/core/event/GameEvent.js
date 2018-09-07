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
    return GameEvent;
}());
//# sourceMappingURL=GameEvent.js.map