var DataModel = /** @class */ (function () {
    function DataModel() {
    }
    DataModel.getInstance = function () {
        if (DataModel._instance == null) {
            DataModel._instance = new DataModel();
        }
        return DataModel._instance;
    };
    DataModel.prototype.DataConfig = function () {
        var jsonData = Laya.Loader.getRes('res/storeData.json');
        GameData.storeDataArr = jsonData;
        console.log(jsonData);
    };
    DataModel._instance = null;
    return DataModel;
}());
//# sourceMappingURL=DataModel.js.map