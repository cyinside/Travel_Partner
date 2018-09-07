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
    return GameData;
}());
//# sourceMappingURL=GameData.js.map