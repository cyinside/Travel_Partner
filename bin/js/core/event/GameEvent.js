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
    GameEvent.SHWO_BUY_CONFIRM = 'show_buy_confirm';
    GameEvent.SHWO_BUY_STATE = 'show_buy_state';
    GameEvent.SHOW_LOG = 'show_log';
    GameEvent.LOG_name = '';
    return GameEvent;
}());
//# sourceMappingURL=GameEvent.js.map