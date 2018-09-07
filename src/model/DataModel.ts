class DataModel {
    public static getInstance(): DataModel {
        if (DataModel._instance == null) {
            DataModel._instance = new DataModel();
        }
        return DataModel._instance;
    }

    private static _instance = null;

    public DataConfig(){
        var jsonData = Laya.Loader.getRes('res/storeData.json');
        GameData.storeDataArr=jsonData;
        
        console.log(jsonData);
    }
}