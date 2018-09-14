class GameData {
    public static getInstance(): GameData {
        if (GameData._instance == null) {
            GameData._instance = new GameData();
        }
        return GameData._instance;
    }

    private static _instance = null;

    public static coinNumber: number = 0;

    public static userName: string = '一共7个字字字';

    public static storeDataArr: Array<any> = [];

    public static picDataArr: Array<any> = [
        {
            id: 0,
            name: '第一张',
            date: '2018-9-10'
        },
        {
            id: 1,
            name: '第二张',
            date: '2018-9-9'
        },
        {
            id: 2,
            name: '第三张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
        {
            id: 3,
            name: '第四张',
            date: '2018-9-8'
        },
    ]

    public getCoinNum(){
        WX_SDK.getInstance().getCoin();
    }
}