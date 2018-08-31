module Global{
    	//新建事件
	export function Event(type:string, obj:Object = null):Laya.Event
	{ 
		 return new lcp.LEvent(type,obj); 
	}

	//派发事件
	export function dispatchEvent(type:string, obj:Object = null):void
	{ 	
		var event = new lcp.LEvent(type,obj);
		lcp.LListener.getInstance().event(type,obj);
	}

	//监听事件
	export function addEventListener(type:string,thisObject:any,listener:Function):void
	{ 
		lcp.LListener.getInstance().addEventListener(type,thisObject,listener);
	}
}