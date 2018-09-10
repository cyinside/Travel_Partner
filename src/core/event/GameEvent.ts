class GameEvent {
    public static getInstance(): GameEvent {
        if (GameEvent._instance == null) {
            GameEvent._instance = new GameEvent();
        }
        return GameEvent._instance;
    }

    private static _instance = null;

    public static SHOW_DELPIC_CONFIRM = 'show_delpic_confirm';

    public static SHWO_BUY_CONFIRM = 'show_buy_confirm';
    public static SHWO_BUY_STATE = 'show_buy_state';
    public static SHOW_LOG = 'show_log'

    public static SAVE_PIC_COMP = 'save_pic_comp';

    public static LOG_name = '';
    public static LOG_info = '';
    public static LOG_url = '';
}