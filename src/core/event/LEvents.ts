/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LEvent
 * @constructor
 */
module lcp{
    /**
     * 自定义事件类
     */
    export class LEvent extends Laya.Event{
        public CLASS_NAME:string = "LEvent";
        public obj:Object;
        public typeStr:string;
        public constructor(type:string, obj:Object = null){
            super();
            if(obj){
                this.obj = obj;
            }
            this.typeStr=type;
        }

        public toString():void{
			console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
		}

        /**
         * 传参获取
         * @returns {Object}
         */
        public get param():Object{
            return this.obj;
        }

    }
}