/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LListener
 * @constructor
 */

module lcp{
    /**
     * 全局侦听类及消息处理
     */
    export class LListener{
        public CLASS_NAME:string = "LListener";
        private static _instance:LListener;
        private _dispatcher:Laya.EventDispatcher;
        private isInit:boolean = false;
        public constructor(){
            if(this.isInit){
               console.warn("不可以实例化"+this.CLASS_NAME+"类,请实例Lcp."+this.CLASS_NAME+".getInstance()开始");
            }
            if(this._dispatcher == null){
                this._dispatcher = new Laya.EventDispatcher();
                this.isInit = true;
            }
        }

        public static getInstance():LListener{
            if(this._instance==null)
                this._instance = new LListener();
            return this._instance;
        }

        public addEventListener(type:string,thisObject:any,listener:Function):void{
            this._dispatcher.on(type,thisObject,listener);
        }

        public removeEventListener(type:string,thisObject:any,listener:Function):void{
            this._dispatcher.off(type,thisObject,listener);
        }

        public hasEventListener(type:string):boolean
		{
			return this._dispatcher.hasListener(type);
		}

        public event(type,obj){
			this._dispatcher.event(type,obj);
		}

        public toString():string
		{
			return this._dispatcher.toString();
		}
    }
}