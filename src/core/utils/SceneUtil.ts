module SceneUtil {

    export var sceneContainer:Laya.Sprite;

    export var sceneArr:Array<Laya.Sprite> = [];

    //初始化
    export function init(container:Laya.Sprite):void {
        this.sceneContainer = container;
    }

    //实例化并addChild场景,如果已实例化则不会再重新创建
    export function addScene(scene:Laya.Sprite, sceneClass:any):Laya.Sprite {
        if (!scene) {
            var className:any = sceneClass;
            var newClass:any = new className();
            this.sceneContainer.addChild(newClass);
            scene = newClass;
            this.sceneArr.push(scene);
        } else {
            this.sceneContainer.addChild(scene);
        }
        return <Laya.Sprite>scene;
    }

    //removeChild除target以外的场景
    export function removeOtherSceneByTarget(targetScene:Laya.Sprite):void {
        for (var i:number = 0; i < this.sceneArr.length; i++) {
            var sceneTemp:Laya.Sprite = this.sceneArr[i];
            if (sceneTemp != targetScene) {
                if (this.sceneContainer.contains(sceneTemp))
                    this.sceneContainer.removeChild(sceneTemp);
            }
        }
    }

    export function changeScene(sceneID:number){
        var data:SceneEvent = new SceneEvent();
        data.sceneID = sceneID;
        Global.dispatchEvent(SceneEvent.CHANGE_SCENE,data);
    }
}