class GameData{
    public static getInstance() : GameData{
        if (GameData._instance == null){
            GameData._instance = new GameData();
        }
        return GameData._instance;
    }

    private static _instance = null;

    public static userName:string='一共7个字字字';
    
    public static storeDataArr:Array<any>=[];
}