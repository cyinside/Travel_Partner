var GameData = /** @class */ (function () {
    function GameData() {
    }
    GameData.getInstance = function () {
        if (GameData._instance == null) {
            GameData._instance = new GameData();
        }
        return GameData._instance;
    };
    GameData._instance = null;
    GameData.userName = '一共7个字字字';
    GameData.storeDataArr = [];
    GameData.picDataArr = [
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
    ];
    return GameData;
}());
//# sourceMappingURL=GameData.js.map