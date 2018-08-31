class GameEvent{
    public static getInstance() : GameEvent{
        if (GameEvent._instance == null){
            GameEvent._instance = new GameEvent();
        }
        return GameEvent._instance;
    }

    private static _instance = null;

    public static SHWO_BUY_CONFIRM='show_buy_confirm';
    public static SHWO_BUY_STATE='show_buy_state';
    public static SHOW_LOG='show_log'

    public static LOG_name=''
}