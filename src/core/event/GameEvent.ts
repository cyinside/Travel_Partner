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

    public static Locker_seclect_Type: number = 0;
    public static Locker_seclect_Id: number = 0;
    public static ToPreapre_Data: Object = {
        type: 0,
        id: null,
        skinSrc: ''
    }
    public static CHANGE_WARNTIP:string='change_warntip';

    public static PREPARE_setItem: string = 'prepare_setItem';

    public static locker_id: number = 0;

    public static GET_COIN_COMP='get_coin_comp';
    public static COLLECT_COIN_COMP='collect_coin_comp';
}